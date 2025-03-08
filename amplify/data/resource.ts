import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
const schema = a.schema({
  Summary: a.model({
    id: a.id(),
    goals: a.string(),
    persona: a.string(),
    url: a.string(),
    headshot: a.string(),
    gptResponse: a.string(),
    resume: a.string(),
    resumes: a.hasMany('Resume', 'summaryId')
  }).authorization(allow => allow.publicApiKey()),
  ContactInformation: a.model({
    id: a.id(),
    name: a.string(),
    email: a.string(),
    phone: a.string(),
    resume: a.string(),
    references: a.hasMany('Reference', 'contactInformationId'),
    resumes: a.hasMany('Resume', 'contactInformationId')
  }).authorization(allow => allow.publicApiKey()),
  Reference: a.model({
    id: a.id(),
    name: a.string(),
    phone: a.string(),
    email: a.string(),
    contactInformationId: a.string(),
    contactInformation: a.belongsTo('ContactInformation', 'contactInformationId')
  }).authorization(allow => allow.publicApiKey()),
  Education: a.model({
    id: a.id(),
    summary: a.string(),
    resume: a.string(),
    schools: a.hasMany('School', 'educationId'),
    resumes: a.hasMany('Resume', 'educationId')
  }).authorization(allow => allow.publicApiKey()),
  School: a.model({
    id: a.id(),
    name: a.string(),
    educationId: a.string(),
    education: a.belongsTo('Education', 'educationId'),
    degrees: a.hasMany('Degree', 'schoolId')
  }).authorization(allow => allow.publicApiKey()),
  Degree: a.model({
    id: a.id(),
    major: a.string(),
    startYear: a.string(),
    endYear: a.string(),
    schoolId: a.string(),
    school: a.belongsTo('School', 'schoolId')
  }).authorization(allow => allow.publicApiKey()),
  Experience: a.model({
    id: a.id(),
    positions: a.hasMany('Position', 'experienceId'),
    resumes: a.hasMany('Resume', 'experienceId')
  }).authorization(allow => allow.publicApiKey()),
  Position: a.model({
    id: a.id(),
    title: a.string(),
    company: a.string(),
    startDate: a.string(),
    endDate: a.string(),
    experienceId: a.string(),
    experience: a.belongsTo('Experience', 'experienceId')
  }).authorization(allow => allow.publicApiKey()),
  Skill: a.model({
    id: a.id(),
    title: a.string(),
    link: a.string(),
    resumeId: a.string(),
    resume: a.belongsTo('Resume', 'resumeId')
  }).authorization(allow => allow.publicApiKey()),
  Resume: a.model({
    id: a.id(),
    title: a.string(),
    summaryId: a.string(),
    summary: a.belongsTo('Summary', 'summaryId'),
    contactInformationId: a.string(),
    contactInformation: a.belongsTo('ContactInformation', 'contactInformationId'),
    educationId: a.string(),
    education: a.belongsTo('Education', 'educationId'),
    experienceId: a.string(),
    experience: a.belongsTo('Experience', 'experienceId'),
    skills: a.hasMany('Skill', 'resumeId')
  }).authorization(allow => allow.publicApiKey())
});
export const data = defineData({
  schema,
  authorizationModes: { defaultAuthorizationMode: 'apiKey', apiKeyAuthorizationMode: { expiresInDays: 30 } },
});
