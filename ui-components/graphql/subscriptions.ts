/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContactInformation = /* GraphQL */ `
  subscription OnCreateContactInformation(
    $filter: ModelSubscriptionContactInformationFilterInput
  ) {
    onCreateContactInformation(filter: $filter) {
      createdAt
      email
      id
      name
      phone
      references {
        nextToken
        __typename
      }
      resume
      resumes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onCreateDegree = /* GraphQL */ `
  subscription OnCreateDegree($filter: ModelSubscriptionDegreeFilterInput) {
    onCreateDegree(filter: $filter) {
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
export const onCreateEducation = /* GraphQL */ `
  subscription OnCreateEducation(
    $filter: ModelSubscriptionEducationFilterInput
  ) {
    onCreateEducation(filter: $filter) {
      createdAt
      id
      resume
      resumes {
        nextToken
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
export const onCreateExperience = /* GraphQL */ `
  subscription OnCreateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onCreateExperience(filter: $filter) {
      createdAt
      id
      positions {
        nextToken
        __typename
      }
      resumes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onCreatePosition = /* GraphQL */ `
  subscription OnCreatePosition($filter: ModelSubscriptionPositionFilterInput) {
    onCreatePosition(filter: $filter) {
      company
      createdAt
      endDate
      experience {
        createdAt
        id
        updatedAt
        __typename
      }
      experienceId
      id
      startDate
      title
      updatedAt
      __typename
    }
  }
`;
export const onCreateReference = /* GraphQL */ `
  subscription OnCreateReference(
    $filter: ModelSubscriptionReferenceFilterInput
  ) {
    onCreateReference(filter: $filter) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        resume
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
export const onCreateResume = /* GraphQL */ `
  subscription OnCreateResume($filter: ModelSubscriptionResumeFilterInput) {
    onCreateResume(filter: $filter) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        resume
        updatedAt
        __typename
      }
      contactInformationId
      createdAt
      education {
        createdAt
        id
        resume
        summary
        updatedAt
        __typename
      }
      educationId
      experience {
        createdAt
        id
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
        resume
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
export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onCreateSchool(filter: $filter) {
      createdAt
      degrees {
        nextToken
        __typename
      }
      education {
        createdAt
        id
        resume
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onCreateSkill(filter: $filter) {
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
export const onCreateSummary = /* GraphQL */ `
  subscription OnCreateSummary($filter: ModelSubscriptionSummaryFilterInput) {
    onCreateSummary(filter: $filter) {
      createdAt
      goals
      gptResponse
      headshot
      id
      persona
      resume
      resumes {
        nextToken
        __typename
      }
      updatedAt
      url
      __typename
    }
  }
`;
export const onDeleteContactInformation = /* GraphQL */ `
  subscription OnDeleteContactInformation(
    $filter: ModelSubscriptionContactInformationFilterInput
  ) {
    onDeleteContactInformation(filter: $filter) {
      createdAt
      email
      id
      name
      phone
      references {
        nextToken
        __typename
      }
      resume
      resumes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDegree = /* GraphQL */ `
  subscription OnDeleteDegree($filter: ModelSubscriptionDegreeFilterInput) {
    onDeleteDegree(filter: $filter) {
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
export const onDeleteEducation = /* GraphQL */ `
  subscription OnDeleteEducation(
    $filter: ModelSubscriptionEducationFilterInput
  ) {
    onDeleteEducation(filter: $filter) {
      createdAt
      id
      resume
      resumes {
        nextToken
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
export const onDeleteExperience = /* GraphQL */ `
  subscription OnDeleteExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onDeleteExperience(filter: $filter) {
      createdAt
      id
      positions {
        nextToken
        __typename
      }
      resumes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onDeletePosition = /* GraphQL */ `
  subscription OnDeletePosition($filter: ModelSubscriptionPositionFilterInput) {
    onDeletePosition(filter: $filter) {
      company
      createdAt
      endDate
      experience {
        createdAt
        id
        updatedAt
        __typename
      }
      experienceId
      id
      startDate
      title
      updatedAt
      __typename
    }
  }
`;
export const onDeleteReference = /* GraphQL */ `
  subscription OnDeleteReference(
    $filter: ModelSubscriptionReferenceFilterInput
  ) {
    onDeleteReference(filter: $filter) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        resume
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
export const onDeleteResume = /* GraphQL */ `
  subscription OnDeleteResume($filter: ModelSubscriptionResumeFilterInput) {
    onDeleteResume(filter: $filter) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        resume
        updatedAt
        __typename
      }
      contactInformationId
      createdAt
      education {
        createdAt
        id
        resume
        summary
        updatedAt
        __typename
      }
      educationId
      experience {
        createdAt
        id
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
        resume
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onDeleteSchool(filter: $filter) {
      createdAt
      degrees {
        nextToken
        __typename
      }
      education {
        createdAt
        id
        resume
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
    onDeleteSkill(filter: $filter) {
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
export const onDeleteSummary = /* GraphQL */ `
  subscription OnDeleteSummary($filter: ModelSubscriptionSummaryFilterInput) {
    onDeleteSummary(filter: $filter) {
      createdAt
      goals
      gptResponse
      headshot
      id
      persona
      resume
      resumes {
        nextToken
        __typename
      }
      updatedAt
      url
      __typename
    }
  }
`;
export const onUpdateContactInformation = /* GraphQL */ `
  subscription OnUpdateContactInformation(
    $filter: ModelSubscriptionContactInformationFilterInput
  ) {
    onUpdateContactInformation(filter: $filter) {
      createdAt
      email
      id
      name
      phone
      references {
        nextToken
        __typename
      }
      resume
      resumes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDegree = /* GraphQL */ `
  subscription OnUpdateDegree($filter: ModelSubscriptionDegreeFilterInput) {
    onUpdateDegree(filter: $filter) {
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
export const onUpdateEducation = /* GraphQL */ `
  subscription OnUpdateEducation(
    $filter: ModelSubscriptionEducationFilterInput
  ) {
    onUpdateEducation(filter: $filter) {
      createdAt
      id
      resume
      resumes {
        nextToken
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
export const onUpdateExperience = /* GraphQL */ `
  subscription OnUpdateExperience(
    $filter: ModelSubscriptionExperienceFilterInput
  ) {
    onUpdateExperience(filter: $filter) {
      createdAt
      id
      positions {
        nextToken
        __typename
      }
      resumes {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePosition = /* GraphQL */ `
  subscription OnUpdatePosition($filter: ModelSubscriptionPositionFilterInput) {
    onUpdatePosition(filter: $filter) {
      company
      createdAt
      endDate
      experience {
        createdAt
        id
        updatedAt
        __typename
      }
      experienceId
      id
      startDate
      title
      updatedAt
      __typename
    }
  }
`;
export const onUpdateReference = /* GraphQL */ `
  subscription OnUpdateReference(
    $filter: ModelSubscriptionReferenceFilterInput
  ) {
    onUpdateReference(filter: $filter) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        resume
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
export const onUpdateResume = /* GraphQL */ `
  subscription OnUpdateResume($filter: ModelSubscriptionResumeFilterInput) {
    onUpdateResume(filter: $filter) {
      contactInformation {
        createdAt
        email
        id
        name
        phone
        resume
        updatedAt
        __typename
      }
      contactInformationId
      createdAt
      education {
        createdAt
        id
        resume
        summary
        updatedAt
        __typename
      }
      educationId
      experience {
        createdAt
        id
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
        resume
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool($filter: ModelSubscriptionSchoolFilterInput) {
    onUpdateSchool(filter: $filter) {
      createdAt
      degrees {
        nextToken
        __typename
      }
      education {
        createdAt
        id
        resume
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onUpdateSkill(filter: $filter) {
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
export const onUpdateSummary = /* GraphQL */ `
  subscription OnUpdateSummary($filter: ModelSubscriptionSummaryFilterInput) {
    onUpdateSummary(filter: $filter) {
      createdAt
      goals
      gptResponse
      headshot
      id
      persona
      resume
      resumes {
        nextToken
        __typename
      }
      updatedAt
      url
      __typename
    }
  }
`;
