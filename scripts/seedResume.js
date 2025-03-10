#!/usr/bin/env node
/**
 * seedData.js
 *
 * This script seeds data for all Amplify Gen 2 models by reading a single JSON file
 * from the 'resumes' folder (brady_resume.json).
 */
import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { existsSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from 'url';
import { randomUUID } from "crypto";

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('AWS Access Key ID:', process.env.AWS_ACCESS_KEY_ID);
console.log('AWS Region:', process.env.AWS_REGION);
const UNIQUE_ID = process.env.UNIQUE_ID || "defaultUniqueId";
/** 
 * Define the data models and their seeding functions.
 * This array is used by the upsertRecord function to seed data into DynamoDB tables.
 * @type {Array<{name: string, keyField: string, seedFn: Function}>}
 */
export const models = [
  { name: "Resume", keyField: "id", seedFn: (resume) => ({
    title: resume.title,
    summaryId: resume.summaryId,
    contactInformationId: resume.contactInformationId,
    educationId: resume.educationId,
    experienceId: resume.experienceId
  })},
  { name: "Summary", keyField: "id", seedFn: (summary) => ({
    goals: summary.summary?.goals || "",
    persona: summary.summary?.persona || "",
    url: summary.summary?.url || "",
    headshot: summary.summary?.headshot || "",
    gptResponse: summary.summary?.gptResponse || "",
    resume: summary.summary?.resume || ""
  })},
  { name: "ContactInformation", keyField: "id", seedFn: (contact) => ({
    name: contact.contactInformation?.name || "",
    email: contact.contactInformation?.email || "",
    phone: contact.contactInformation?.phone || "",
    resume: contact.contactInformation?.resume || ""
  })},
  { name: "Reference", keyField: "id", seedFn: (reference) => ({
    name: reference.name || "",
    phone: reference.phone || "",
    email: reference.email || "",
    contactInformationId: reference.contactInformationId || ""
  })},
  { name: "Education", keyField: "id", seedFn: (education) => ({
    summary: education.education.summary || "",
    resume: education.education.resume || ""
  })},
  { name: "School", keyField: "id", seedFn: (school) => ({
    name: school.name || "",
    educationId: school.educationId || ""
  })},
  { name: "Degree", keyField: "id", seedFn: (degree) => ({
    major: degree.major || "",
    startYear: degree.startYear || "",
    endYear: degree.endYear || "",
    schoolId: degree.schoolId || ""
  })},
  { name: "Experience", keyField: "id", seedFn: (experience) => ({
    title: experience.experience.title || "",
    text: experience.experience.text || "",
    gptResponse: experience.experience.gptResponse || "",
    resume: experience.experience.resume || ""
  })},
  { name: "Company", keyField: "id", seedFn: (company) => ({
    name: company.name || "",
    role: company.role || "",
    startDate: company.startDate || "",
    endDate: company.endDate || "",
    title: company.title || "",
    gptResponse: company.gptResponse || "",
    experienceId: company.experienceId || ""
  })},
  { name: "Engagement", keyField: "id", seedFn: (engagement) => ({
    client: engagement.client || "",
    startDate: engagement.startDate || "",
    endDate: engagement.endDate || "",
    gptResponse: engagement.gptResponse || "",
    companyId: engagement.companyId || ""
  })},
  { name: "Accomplishment", keyField: "id", seedFn: (accomplishment) => ({
    title: accomplishment.title || "",
    description: accomplishment.description || "",
    link: accomplishment.link || "",
    companyId: accomplishment.companyId || "",
    engagementId: accomplishment.engagementId || ""
  })},
  { name: "Skill", keyField: "id", seedFn: (skill) => ({
    title: skill.title || "",
    link: skill.link || "",
    resumeId: skill.resumeId || "",
    companyId: skill.companyId || "",
    accomplishmentId: skill.accomplishmentId || ""
  })}
];
const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
const documentClient = DynamoDBDocumentClient.from(client);
async function findTableForModel(modelName, uniqueId) {
  try {
    const listCommand = new ListTablesCommand({});
    const result = await client.send(listCommand);
    if (!result.TableNames || result.TableNames.length === 0) {
      console.error("No DynamoDB tables found.");
      return null;
    }
    const tableName = result.TableNames.find(name =>
      name.includes(modelName) && name.includes(uniqueId)
    );
    if (!tableName) {
      console.error(`No table found for model ${modelName} with unique ID ${uniqueId}`);
      return null;
    }
    console.log(`Found table for ${modelName}: ${tableName}`);
    return tableName;
  } catch (error) {
    console.error("Error listing tables:", error);
    return null;
  }
}
function buildUpdateParams(tableName, keyField, record, skipIfEmpty = []) {
  if (!record[keyField]) {
    record[keyField] = randomUUID();
    console.log(`Auto-generated ${keyField}: ${record[keyField]}`);
  }
  const key = { [keyField]: record[keyField] };
  const attributes = { ...record };
  delete attributes[keyField];
  const updateExprParts = [];
  const exprAttrValues = {};
  const exprAttrNames = {};
  for (const attr in attributes) {
    if (skipIfEmpty.includes(attr) && (!attributes[attr] || attributes[attr] === "")) continue;
    const attrPlaceholder = "#" + attr;
    const valuePlaceholder = ":" + attr;
    updateExprParts.push(`${attrPlaceholder} = ${valuePlaceholder}`);
    exprAttrNames[attrPlaceholder] = attr;
    exprAttrValues[valuePlaceholder] = attributes[attr];
  }
  if (updateExprParts.length === 0) return null;
  const updateExpression = "set " + updateExprParts.join(", ");
  return {
    TableName: tableName,
    Key: key,
    UpdateExpression: updateExpression,
    ExpressionAttributeNames: exprAttrNames,
    ExpressionAttributeValues: exprAttrValues,
    ReturnValues: "ALL_NEW"
  };
}
async function upsertRecord(modelName, keyField, record) {
  const tableName = await findTableForModel(modelName, UNIQUE_ID);
  if (!tableName) {
    console.error(`Skipping ${modelName} because no table was found.`);
    return;
  }
  let skipIfEmpty = [];
  if (modelName === "Skill") {
    skipIfEmpty = ["resumeId", "companyId", "accomplishmentId"];
  }
  const params = buildUpdateParams(tableName, keyField, record, skipIfEmpty);
  if (!params) {
    console.warn(`Nothing to update for ${modelName} record with key ${record[keyField]}`);
    return;
  }
  try {
    const command = new UpdateCommand(params);
    const result = await documentClient.send(command);
    console.log(`Upserted ${modelName} record:`, JSON.stringify(result.Attributes, null, 2));
  } catch (err) {
    console.error(`Error upserting ${modelName} record:`, err);
  }
}
async function seedData() {
  const filePath = join(__dirname, "..", "resumes", "brady_resume.json");
  console.log('Looking for resume file at:', filePath);
  
  if (!existsSync(filePath)) {
    console.error("Seed file not found:", filePath);
    return;
  }
  
  let data;
  try {
    const content = readFileSync(filePath, "utf8");
    data = JSON.parse(content);
  } catch (error) {
    console.error("Error reading/parsing seed file:", error);
    return;
  }
  const resumeRecord = {
    title: data.title,
    summaryId: data.summaryId,
    contactInformationId: data.contactInformationId,
    educationId: data.educationId,
    experienceId: data.experienceId
  };
  await upsertRecord("Resume", "id", resumeRecord);
  if (data.summary) {
    const summaryRecord = {
      goals: data.summary.goals || "",
      persona: data.summary.persona || "",
      url: data.summary.url || "",
      headshot: data.summary.headshot || "",
      gptResponse: data.summary.gptResponse || "",
      resume: data.summary.resume || ""
    };
    await upsertRecord("Summary", "id", summaryRecord);
  }
  if (data.contactInformation) {
    const contactRecord = {
      name: data.contactInformation.name || "",
      email: data.contactInformation.email || "",
      phone: data.contactInformation.phone || "",
      resume: data.contactInformation.resume || ""
    };
    await upsertRecord("ContactInformation", "id", contactRecord);
    if (Array.isArray(data.contactInformation.references)) {
      for (const ref of data.contactInformation.references) {
        const refRecord = {
          name: ref.name || "",
          phone: ref.phone || "",
          email: ref.email || "",
          contactInformationId: ref.contactInformationId || ""
        };
        await upsertRecord("Reference", "id", refRecord);
      }
    }
  }
  if (data.education) {
    const educationRecord = {
      summary: data.education.summary || "",
      resume: data.education.resume || ""
    };
    await upsertRecord("Education", "id", educationRecord);
    if (Array.isArray(data.education.schools)) {
      for (const school of data.education.schools) {
        const schoolRecord = {
          name: school.name || "",
          educationId: school.educationId || ""
        };
        await upsertRecord("School", "id", schoolRecord);
        if (Array.isArray(school.degrees)) {
          for (const degree of school.degrees) {
            const degreeRecord = {
              major: degree.major || "",
              startYear: degree.startYear || "",
              endYear: degree.endYear || "",
              schoolId: degree.schoolId || ""
            };
            await upsertRecord("Degree", "id", degreeRecord);
          }
        }
      }
    }
  }
  if (data.experience) {
    const experienceRecord = {
      title: data.experience.title || "",
      text: data.experience.text || "",
      gptResponse: data.experience.gptResponse || "",
      resume: data.experience.resume || ""
    };
    await upsertRecord("Experience", "id", experienceRecord);
    if (Array.isArray(data.experience.companies)) {
      for (const company of data.experience.companies) {
        const companyRecord = {
          name: company.name || "",
          role: company.role || "",
          startDate: company.startDate || "",
          endDate: company.endDate || "",
          title: company.title || "",
          gptResponse: company.gptResponse || "",
          experienceId: company.experienceId || ""
        };
        await upsertRecord("Company", "id", companyRecord);
        if (Array.isArray(company.engagements)) {
          for (const engagement of company.engagements) {
            const engagementRecord = {
              client: engagement.client || "",
              startDate: engagement.startDate || "",
              endDate: engagement.endDate || "",
              gptResponse: engagement.gptResponse || "",
              companyId: engagement.companyId || ""
            };
            await upsertRecord("Engagement", "id", engagementRecord);
          }
        }
        if (Array.isArray(company.accomplishments)) {
          for (const accomplishment of company.accomplishments) {
            const accomplishmentRecord = {
              title: accomplishment.title || "",
              description: accomplishment.description || "",
              link: accomplishment.link || "",
              companyId: accomplishment.companyId || "",
              engagementId: accomplishment.engagementId || ""
            };
            await upsertRecord("Accomplishment", "id", accomplishmentRecord);
          }
        }
      }
    }
  }
  if (Array.isArray(data.skills)) {
    for (const skill of data.skills) {
      const skillRecord = {
        title: skill.title || "",
        link: skill.link || "",
        resumeId: data.resumeId || "",
        companyId: skill.companyId || "",
        accomplishmentId: skill.accomplishmentId || ""
      };
      await upsertRecord("Skill", "id", skillRecord);
    }
  }
}
seedData();
