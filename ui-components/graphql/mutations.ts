/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccomplishment = /* GraphQL */ `
  mutation CreateAccomplishment(
    $condition: ModelAccomplishmentConditionInput
    $input: CreateAccomplishmentInput!
  ) {
    createAccomplishment(condition: $condition, input: $input) {
      company {
        createdAt
        endDate
        experienceId
        gptResponse
        id
        name
        role
        startDate
        title
        updatedAt
        __typename
      }
      companyId
      createdAt
      description
      engagement {
        client
        companyId
        createdAt
        endDate
        gptResponse
        id
        startDate
        updatedAt
        __typename
      }
      engagementId
      id
      link
      skills {
        nextToken
        __typename
      }
      title
      updatedAt
      __typename
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $condition: ModelCompanyConditionInput
    $input: CreateCompanyInput!
  ) {
    createCompany(condition: $condition, input: $input) {
      accomplishments {
        nextToken
        __typename
      }
      createdAt
      endDate
      engagements {
        nextToken
        __typename
      }
      experience {
        createdAt
        gptResponse
        id
        text
        title
        updatedAt
        __typename
      }
      experienceId
      gptResponse
      id
      name
      role
      skills {
        nextToken
        __typename
      }
      startDate
      title
      updatedAt
      __typename
    }
  }
`;
export const createContactInformation = /* GraphQL */ `
  mutation CreateContactInformation(
    $condition: ModelContactInformationConditionInput
    $input: CreateContactInformationInput!
  ) {
    createContactInformation(condition: $condition, input: $input) {
      createdAt
      email
      id
      name
      phone
      references {
        nextToken
        __typename
      }
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const createDegree = /* GraphQL */ `
  mutation CreateDegree(
    $condition: ModelDegreeConditionInput
    $input: CreateDegreeInput!
  ) {
    createDegree(condition: $condition, input: $input) {
      createdAt
      endYear
      id
      major
      school {
        createdAt
        educationId
        id
        name
        updatedAt
        __typename
      }
      schoolId
      startYear
      updatedAt
      __typename
    }
  }
`;
export const createEducation = /* GraphQL */ `
  mutation CreateEducation(
    $condition: ModelEducationConditionInput
    $input: CreateEducationInput!
  ) {
    createEducation(condition: $condition, input: $input) {
      createdAt
      id
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      schools {
        nextToken
        __typename
      }
      summary
      updatedAt
      __typename
    }
  }
`;
export const createEngagement = /* GraphQL */ `
  mutation CreateEngagement(
    $condition: ModelEngagementConditionInput
    $input: CreateEngagementInput!
  ) {
    createEngagement(condition: $condition, input: $input) {
      accomplishments {
        nextToken
        __typename
      }
      client
      company {
        createdAt
        endDate
        experienceId
        gptResponse
        id
        name
        role
        startDate
        title
        updatedAt
        __typename
      }
      companyId
      createdAt
      endDate
      gptResponse
      id
      startDate
      updatedAt
      __typename
    }
  }
`;
export const createExperience = /* GraphQL */ `
  mutation CreateExperience(
    $condition: ModelExperienceConditionInput
    $input: CreateExperienceInput!
  ) {
    createExperience(condition: $condition, input: $input) {
      companies {
        nextToken
        __typename
      }
      createdAt
      gptResponse
      id
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      text
      title
      updatedAt
      __typename
    }
  }
`;
export const createReference = /* GraphQL */ `
  mutation CreateReference(
    $condition: ModelReferenceConditionInput
    $input: CreateReferenceInput!
  ) {
    createReference(condition: $condition, input: $input) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      contactInformationId
      createdAt
      email
      id
      name
      phone
      updatedAt
      __typename
    }
  }
`;
export const createResume = /* GraphQL */ `
  mutation CreateResume(
    $condition: ModelResumeConditionInput
    $input: CreateResumeInput!
  ) {
    createResume(condition: $condition, input: $input) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      contactInformationId
      createdAt
      education {
        createdAt
        id
        summary
        updatedAt
        __typename
      }
      educationId
      experience {
        createdAt
        gptResponse
        id
        text
        title
        updatedAt
        __typename
      }
      experienceId
      id
      skills {
        nextToken
        __typename
      }
      summary {
        createdAt
        goals
        gptResponse
        headshot
        id
        persona
        updatedAt
        url
        __typename
      }
      summaryId
      title
      updatedAt
      __typename
    }
  }
`;
export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $condition: ModelSchoolConditionInput
    $input: CreateSchoolInput!
  ) {
    createSchool(condition: $condition, input: $input) {
      createdAt
      degrees {
        nextToken
        __typename
      }
      education {
        createdAt
        id
        summary
        updatedAt
        __typename
      }
      educationId
      id
      name
      updatedAt
      __typename
    }
  }
`;
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $condition: ModelSkillConditionInput
    $input: CreateSkillInput!
  ) {
    createSkill(condition: $condition, input: $input) {
      accomplishment {
        companyId
        createdAt
        description
        engagementId
        id
        link
        title
        updatedAt
        __typename
      }
      accomplishmentId
      company {
        createdAt
        endDate
        experienceId
        gptResponse
        id
        name
        role
        startDate
        title
        updatedAt
        __typename
      }
      companyId
      createdAt
      id
      link
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      resumeId
      title
      updatedAt
      __typename
    }
  }
`;
export const createSummary = /* GraphQL */ `
  mutation CreateSummary(
    $condition: ModelSummaryConditionInput
    $input: CreateSummaryInput!
  ) {
    createSummary(condition: $condition, input: $input) {
      createdAt
      goals
      gptResponse
      headshot
      id
      persona
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      updatedAt
      url
      __typename
    }
  }
`;
export const deleteAccomplishment = /* GraphQL */ `
  mutation DeleteAccomplishment(
    $condition: ModelAccomplishmentConditionInput
    $input: DeleteAccomplishmentInput!
  ) {
    deleteAccomplishment(condition: $condition, input: $input) {
      company {
        createdAt
        endDate
        experienceId
        gptResponse
        id
        name
        role
        startDate
        title
        updatedAt
        __typename
      }
      companyId
      createdAt
      description
      engagement {
        client
        companyId
        createdAt
        endDate
        gptResponse
        id
        startDate
        updatedAt
        __typename
      }
      engagementId
      id
      link
      skills {
        nextToken
        __typename
      }
      title
      updatedAt
      __typename
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $condition: ModelCompanyConditionInput
    $input: DeleteCompanyInput!
  ) {
    deleteCompany(condition: $condition, input: $input) {
      accomplishments {
        nextToken
        __typename
      }
      createdAt
      endDate
      engagements {
        nextToken
        __typename
      }
      experience {
        createdAt
        gptResponse
        id
        text
        title
        updatedAt
        __typename
      }
      experienceId
      gptResponse
      id
      name
      role
      skills {
        nextToken
        __typename
      }
      startDate
      title
      updatedAt
      __typename
    }
  }
`;
export const deleteContactInformation = /* GraphQL */ `
  mutation DeleteContactInformation(
    $condition: ModelContactInformationConditionInput
    $input: DeleteContactInformationInput!
  ) {
    deleteContactInformation(condition: $condition, input: $input) {
      createdAt
      email
      id
      name
      phone
      references {
        nextToken
        __typename
      }
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const deleteDegree = /* GraphQL */ `
  mutation DeleteDegree(
    $condition: ModelDegreeConditionInput
    $input: DeleteDegreeInput!
  ) {
    deleteDegree(condition: $condition, input: $input) {
      createdAt
      endYear
      id
      major
      school {
        createdAt
        educationId
        id
        name
        updatedAt
        __typename
      }
      schoolId
      startYear
      updatedAt
      __typename
    }
  }
`;
export const deleteEducation = /* GraphQL */ `
  mutation DeleteEducation(
    $condition: ModelEducationConditionInput
    $input: DeleteEducationInput!
  ) {
    deleteEducation(condition: $condition, input: $input) {
      createdAt
      id
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      schools {
        nextToken
        __typename
      }
      summary
      updatedAt
      __typename
    }
  }
`;
export const deleteEngagement = /* GraphQL */ `
  mutation DeleteEngagement(
    $condition: ModelEngagementConditionInput
    $input: DeleteEngagementInput!
  ) {
    deleteEngagement(condition: $condition, input: $input) {
      accomplishments {
        nextToken
        __typename
      }
      client
      company {
        createdAt
        endDate
        experienceId
        gptResponse
        id
        name
        role
        startDate
        title
        updatedAt
        __typename
      }
      companyId
      createdAt
      endDate
      gptResponse
      id
      startDate
      updatedAt
      __typename
    }
  }
`;
export const deleteExperience = /* GraphQL */ `
  mutation DeleteExperience(
    $condition: ModelExperienceConditionInput
    $input: DeleteExperienceInput!
  ) {
    deleteExperience(condition: $condition, input: $input) {
      companies {
        nextToken
        __typename
      }
      createdAt
      gptResponse
      id
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      text
      title
      updatedAt
      __typename
    }
  }
`;
export const deleteReference = /* GraphQL */ `
  mutation DeleteReference(
    $condition: ModelReferenceConditionInput
    $input: DeleteReferenceInput!
  ) {
    deleteReference(condition: $condition, input: $input) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      contactInformationId
      createdAt
      email
      id
      name
      phone
      updatedAt
      __typename
    }
  }
`;
export const deleteResume = /* GraphQL */ `
  mutation DeleteResume(
    $condition: ModelResumeConditionInput
    $input: DeleteResumeInput!
  ) {
    deleteResume(condition: $condition, input: $input) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      contactInformationId
      createdAt
      education {
        createdAt
        id
        summary
        updatedAt
        __typename
      }
      educationId
      experience {
        createdAt
        gptResponse
        id
        text
        title
        updatedAt
        __typename
      }
      experienceId
      id
      skills {
        nextToken
        __typename
      }
      summary {
        createdAt
        goals
        gptResponse
        headshot
        id
        persona
        updatedAt
        url
        __typename
      }
      summaryId
      title
      updatedAt
      __typename
    }
  }
`;
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $condition: ModelSchoolConditionInput
    $input: DeleteSchoolInput!
  ) {
    deleteSchool(condition: $condition, input: $input) {
      createdAt
      degrees {
        nextToken
        __typename
      }
      education {
        createdAt
        id
        summary
        updatedAt
        __typename
      }
      educationId
      id
      name
      updatedAt
      __typename
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $condition: ModelSkillConditionInput
    $input: DeleteSkillInput!
  ) {
    deleteSkill(condition: $condition, input: $input) {
      accomplishment {
        companyId
        createdAt
        description
        engagementId
        id
        link
        title
        updatedAt
        __typename
      }
      accomplishmentId
      company {
        createdAt
        endDate
        experienceId
        gptResponse
        id
        name
        role
        startDate
        title
        updatedAt
        __typename
      }
      companyId
      createdAt
      id
      link
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      resumeId
      title
      updatedAt
      __typename
    }
  }
`;
export const deleteSummary = /* GraphQL */ `
  mutation DeleteSummary(
    $condition: ModelSummaryConditionInput
    $input: DeleteSummaryInput!
  ) {
    deleteSummary(condition: $condition, input: $input) {
      createdAt
      goals
      gptResponse
      headshot
      id
      persona
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      updatedAt
      url
      __typename
    }
  }
`;
export const updateAccomplishment = /* GraphQL */ `
  mutation UpdateAccomplishment(
    $condition: ModelAccomplishmentConditionInput
    $input: UpdateAccomplishmentInput!
  ) {
    updateAccomplishment(condition: $condition, input: $input) {
      company {
        createdAt
        endDate
        experienceId
        gptResponse
        id
        name
        role
        startDate
        title
        updatedAt
        __typename
      }
      companyId
      createdAt
      description
      engagement {
        client
        companyId
        createdAt
        endDate
        gptResponse
        id
        startDate
        updatedAt
        __typename
      }
      engagementId
      id
      link
      skills {
        nextToken
        __typename
      }
      title
      updatedAt
      __typename
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $condition: ModelCompanyConditionInput
    $input: UpdateCompanyInput!
  ) {
    updateCompany(condition: $condition, input: $input) {
      accomplishments {
        nextToken
        __typename
      }
      createdAt
      endDate
      engagements {
        nextToken
        __typename
      }
      experience {
        createdAt
        gptResponse
        id
        text
        title
        updatedAt
        __typename
      }
      experienceId
      gptResponse
      id
      name
      role
      skills {
        nextToken
        __typename
      }
      startDate
      title
      updatedAt
      __typename
    }
  }
`;
export const updateContactInformation = /* GraphQL */ `
  mutation UpdateContactInformation(
    $condition: ModelContactInformationConditionInput
    $input: UpdateContactInformationInput!
  ) {
    updateContactInformation(condition: $condition, input: $input) {
      createdAt
      email
      id
      name
      phone
      references {
        nextToken
        __typename
      }
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const updateDegree = /* GraphQL */ `
  mutation UpdateDegree(
    $condition: ModelDegreeConditionInput
    $input: UpdateDegreeInput!
  ) {
    updateDegree(condition: $condition, input: $input) {
      createdAt
      endYear
      id
      major
      school {
        createdAt
        educationId
        id
        name
        updatedAt
        __typename
      }
      schoolId
      startYear
      updatedAt
      __typename
    }
  }
`;
export const updateEducation = /* GraphQL */ `
  mutation UpdateEducation(
    $condition: ModelEducationConditionInput
    $input: UpdateEducationInput!
  ) {
    updateEducation(condition: $condition, input: $input) {
      createdAt
      id
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      schools {
        nextToken
        __typename
      }
      summary
      updatedAt
      __typename
    }
  }
`;
export const updateEngagement = /* GraphQL */ `
  mutation UpdateEngagement(
    $condition: ModelEngagementConditionInput
    $input: UpdateEngagementInput!
  ) {
    updateEngagement(condition: $condition, input: $input) {
      accomplishments {
        nextToken
        __typename
      }
      client
      company {
        createdAt
        endDate
        experienceId
        gptResponse
        id
        name
        role
        startDate
        title
        updatedAt
        __typename
      }
      companyId
      createdAt
      endDate
      gptResponse
      id
      startDate
      updatedAt
      __typename
    }
  }
`;
export const updateExperience = /* GraphQL */ `
  mutation UpdateExperience(
    $condition: ModelExperienceConditionInput
    $input: UpdateExperienceInput!
  ) {
    updateExperience(condition: $condition, input: $input) {
      companies {
        nextToken
        __typename
      }
      createdAt
      gptResponse
      id
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      text
      title
      updatedAt
      __typename
    }
  }
`;
export const updateReference = /* GraphQL */ `
  mutation UpdateReference(
    $condition: ModelReferenceConditionInput
    $input: UpdateReferenceInput!
  ) {
    updateReference(condition: $condition, input: $input) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      contactInformationId
      createdAt
      email
      id
      name
      phone
      updatedAt
      __typename
    }
  }
`;
export const updateResume = /* GraphQL */ `
  mutation UpdateResume(
    $condition: ModelResumeConditionInput
    $input: UpdateResumeInput!
  ) {
    updateResume(condition: $condition, input: $input) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      contactInformationId
      createdAt
      education {
        createdAt
        id
        summary
        updatedAt
        __typename
      }
      educationId
      experience {
        createdAt
        gptResponse
        id
        text
        title
        updatedAt
        __typename
      }
      experienceId
      id
      skills {
        nextToken
        __typename
      }
      summary {
        createdAt
        goals
        gptResponse
        headshot
        id
        persona
        updatedAt
        url
        __typename
      }
      summaryId
      title
      updatedAt
      __typename
    }
  }
`;
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $condition: ModelSchoolConditionInput
    $input: UpdateSchoolInput!
  ) {
    updateSchool(condition: $condition, input: $input) {
      createdAt
      degrees {
        nextToken
        __typename
      }
      education {
        createdAt
        id
        summary
        updatedAt
        __typename
      }
      educationId
      id
      name
      updatedAt
      __typename
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $condition: ModelSkillConditionInput
    $input: UpdateSkillInput!
  ) {
    updateSkill(condition: $condition, input: $input) {
      accomplishment {
        companyId
        createdAt
        description
        engagementId
        id
        link
        title
        updatedAt
        __typename
      }
      accomplishmentId
      company {
        createdAt
        endDate
        experienceId
        gptResponse
        id
        name
        role
        startDate
        title
        updatedAt
        __typename
      }
      companyId
      createdAt
      id
      link
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      resumeId
      title
      updatedAt
      __typename
    }
  }
`;
export const updateSummary = /* GraphQL */ `
  mutation UpdateSummary(
    $condition: ModelSummaryConditionInput
    $input: UpdateSummaryInput!
  ) {
    updateSummary(condition: $condition, input: $input) {
      createdAt
      goals
      gptResponse
      headshot
      id
      persona
      resume {
        contactInformationId
        createdAt
        educationId
        experienceId
        id
        summaryId
        title
        updatedAt
        __typename
      }
      updatedAt
      url
      __typename
    }
  }
`;
