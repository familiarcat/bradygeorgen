#!/usr/bin/env node
/**
 * seedData.js
 *
 * This script seeds data for all Amplify Gen 2 models by reading a single JSON file
 * from the 'resumes' folder (brady_resume.json). The JSON file should contain your Resume record
 * with nested objects/arrays for Summary, ContactInformation (with References), Education (with Schools and Degrees),
 * Experience (with Companies, and within them, Engagements and Accomplishments), and top-level Skills.
 *
 * For any record missing its primary key ("id"), a new UUID is generated.
 * ExpressionAttributeNames are used to escape reserved words.
 *
 * For models such as Skill, if key attributes (e.g. resumeId, companyId, accomplishmentId)
 * are empty, they will be omitted from the update expression to avoid updating a secondary index key with an empty string.
 *
 * Inline AWS credentials are used for demonstration purposes.
 */

const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, UpdateCommand } = require("@aws-sdk/lib-dynamodb");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");


// You can then use these variables as needed, for example:
console.log('AWS Access Key ID:', process.env.AWS_ACCESS_KEY_ID);
console.log('AWS Region:', process.env.AWS_SECRET_ACCESS_KEY);

// The unique Amplify-generated UID present in all table names.
const UNIQUE_ID = process.env.UNIQUE_ID || "hdyfgeedrbf35evnbglhyco6de";

// === MODEL DEFINITIONS ===
// Each model uses "id" as its primary key.
const models = [
  { name: "Resume", keyField: "id" },
  { name: "Summary", keyField: "id" },
  { name: "ContactInformation", keyField: "id" },
  { name: "Reference", keyField: "id" },
  { name: "Education", keyField: "id" },
  { name: "School", keyField: "id" },
  { name: "Degree", keyField: "id" },
  { name: "Experience", keyField: "id" },
  { name: "Company", keyField: "id" },
  { name: "Engagement", keyField: "id" },
  { name: "Accomplishment", keyField: "id" },
  { name: "Skill", keyField: "id" }
];

// === CREATE DYNAMODB CLIENTS ===
const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
const documentClient = DynamoDBDocumentClient.from(client);

/**
 * findTableForModel:
 * Lists DynamoDB tables and returns the table name that includes both
 * the given model name and the unique identifier.
 */
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

/**
 * buildUpdateParams:
 * Given a table name, a primary key field, and a record, constructs parameters for an UpdateCommand.
 *
 * If the record is missing its key, a new UUID is generated.
 * ExpressionAttributeNames are used to escape reserved words.
 * If the model is passed a list of attributes to skip when empty, those attributes will not be included.
 */
function buildUpdateParams(tableName, keyField, record, skipIfEmpty = []) {
  if (!record[keyField]) {
    record[keyField] = crypto.randomUUID();
    console.log(`Auto-generated ${keyField}: ${record[keyField]}`);
  }
  const key = { [keyField]: record[keyField] };
  const attributes = { ...record };
  delete attributes[keyField];

  const updateExprParts = [];
  const exprAttrValues = {};
  const exprAttrNames = {};
  for (const attr in attributes) {
    // If this attribute is in the skip list and its value is empty, do not update it.
    if (skipIfEmpty.includes(attr) && (!attributes[attr] || attributes[attr] === "")) {
      continue;
    }
    const attrPlaceholder = "#" + attr;
    const valuePlaceholder = ":" + attr;
    updateExprParts.push(`${attrPlaceholder} = ${valuePlaceholder}`);
    exprAttrNames[attrPlaceholder] = attr;
    exprAttrValues[valuePlaceholder] = attributes[attr];
  }
  if (updateExprParts.length === 0) {
    // Nothing to update.
    return null;
  }
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

/**
 * upsertRecord:
 * For a given model and record, finds the correct table and upserts the record.
 * For models like Skill, certain attributes (e.g. resumeId, companyId, accomplishmentId)
 * are skipped if empty to avoid sending empty strings for key attributes.
 */
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

/**
 * seedData:
 * Reads the single JSON file (resumes/brady_resume.json) and seeds data for all models.
 */
async function seedData() {
  const filePath = path.join(__dirname, "resumes", "brady_resume.json");
  if (!fs.existsSync(filePath)) {
    console.error("Seed file not found:", filePath);
    return;
  }
  let data;
  try {
    const content = fs.readFileSync(filePath, "utf8");
    data = JSON.parse(content);
  } catch (error) {
    console.error("Error reading/parsing seed file:", error);
    return;
  }
  
  // --- Seed Resume ---
  const resumeRecord = {
    title: data.title,
    summaryId: data.summaryId,
    contactInformationId: data.contactInformationId,
    educationId: data.educationId,
    experienceId: data.experienceId
  };
  await upsertRecord("Resume", "id", resumeRecord);
  
  // --- Seed Summary ---
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
  
  // --- Seed ContactInformation and References ---
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
  
  // --- Seed Education, Schools, and Degrees ---
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
  
  // --- Seed Experience, Companies, Engagements, and Accomplishments ---
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
  
  // --- Seed Skills ---
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
