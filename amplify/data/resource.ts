import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Resume: a.model({
    id: a.id(), // auto-generated primary key
    title: a.string(),
    summaryId: a.string(),
    summary: a.belongsTo("Summary", "summaryId"),
    contactInformationId: a.string(),
    contactInformation: a.belongsTo("ContactInformation", "contactInformationId"),
    educationId: a.string(),
    education: a.belongsTo("Education", "educationId"),
    experienceId: a.string(),
    experience: a.belongsTo("Experience", "experienceId"),
    skills: a.hasMany("Skill", "resumeId")
  }),
  Summary: a.model({
    id: a.id(),
    goals: a.string(),
    persona: a.string(),
    url: a.string(),
    headshot: a.string(),
    gptResponse: a.string(),
    resume: a.hasOne("Resume", "summaryId")
  }),
  ContactInformation: a.model({
    id: a.id(),
    name: a.string(),
    email: a.string(),
    phone: a.string(),
    resume: a.hasOne("Resume", "contactInformationId"),
    references: a.hasMany("Reference", "contactInformationId")
  }),
  Reference: a.model({
    id: a.id(),
    name: a.string(),
    phone: a.string(),
    email: a.string(),
    contactInformationId: a.string(),
    contactInformation: a.belongsTo("ContactInformation", "contactInformationId")
  }),
  Education: a.model({
    id: a.id(),
    summary: a.string(),
    resume: a.hasOne("Resume", "educationId"),
    schools: a.hasMany("School", "educationId")
  }),
  School: a.model({
    id: a.id(),
    name: a.string(),
    educationId: a.string(),
    education: a.belongsTo("Education", "educationId"),
    degrees: a.hasMany("Degree", "schoolId")
  }),
  Degree: a.model({
    id: a.id(),
    major: a.string(),
    startYear: a.string(),
    endYear: a.string(),
    schoolId: a.string(),
    school: a.belongsTo("School", "schoolId")
  }),
  Experience: a.model({
    id: a.id(),
    title: a.string(),
    text: a.string(),
    gptResponse: a.string(),
    resume: a.hasOne("Resume", "experienceId"),
    companies: a.hasMany("Company", "experienceId")
  }),
  Company: a.model({
    id: a.id(),
    name: a.string(),
    role: a.string(),
    startDate: a.string(),
    endDate: a.string(),
    title: a.string(),
    gptResponse: a.string(),
    experienceId: a.string(),
    experience: a.belongsTo("Experience", "experienceId"),
    skills: a.hasMany("Skill", "companyId"),
    engagements: a.hasMany("Engagement", "companyId"),
    accomplishments: a.hasMany("Accomplishment", "companyId")
  }),
  Engagement: a.model({
    id: a.id(),
    client: a.string(),
    startDate: a.string(),
    endDate: a.string(),
    gptResponse: a.string(),
    companyId: a.string(),
    company: a.belongsTo("Company", "companyId"),
    accomplishments: a.hasMany("Accomplishment", "engagementId")
  }),
  Accomplishment: a.model({
    id: a.id(),
    title: a.string(),
    description: a.string(),
    link: a.string(),
    companyId: a.string(),
    company: a.belongsTo("Company", "companyId"),
    engagementId: a.string(),
    engagement: a.belongsTo("Engagement", "engagementId"),
    skills: a.hasMany("Skill", "accomplishmentId")
  }),
  Skill: a.model({
    id: a.id(),
    title: a.string(),
    link: a.string(),
    resumeId: a.string(),
    resume: a.belongsTo("Resume", "resumeId"),
    companyId: a.string(),
    company: a.belongsTo("Company", "companyId"),
    accomplishmentId: a.string(),
    accomplishment: a.belongsTo("Accomplishment", "accomplishmentId")
  })
}).authorization((allow) => [allow.publicApiKey()]);

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  },
});
