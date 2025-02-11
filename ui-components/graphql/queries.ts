/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccomplishment = /* GraphQL */ `
  query GetAccomplishment($id: ID!) {
    getAccomplishment(id: $id) {
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
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const getContactInformation = /* GraphQL */ `
  query GetContactInformation($id: ID!) {
    getContactInformation(id: $id) {
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
export const getDegree = /* GraphQL */ `
  query GetDegree($id: ID!) {
    getDegree(id: $id) {
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
export const getEducation = /* GraphQL */ `
  query GetEducation($id: ID!) {
    getEducation(id: $id) {
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
export const getEngagement = /* GraphQL */ `
  query GetEngagement($id: ID!) {
    getEngagement(id: $id) {
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
export const getExperience = /* GraphQL */ `
  query GetExperience($id: ID!) {
    getExperience(id: $id) {
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
export const getReference = /* GraphQL */ `
  query GetReference($id: ID!) {
    getReference(id: $id) {
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
export const getResume = /* GraphQL */ `
  query GetResume($id: ID!) {
    getResume(id: $id) {
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
export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
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
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
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
export const getSummary = /* GraphQL */ `
  query GetSummary($id: ID!) {
    getSummary(id: $id) {
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
export const listAccomplishments = /* GraphQL */ `
  query ListAccomplishments(
    $filter: ModelAccomplishmentFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccomplishments(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompanies(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listContactInformations = /* GraphQL */ `
  query ListContactInformations(
    $filter: ModelContactInformationFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContactInformations(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listDegrees = /* GraphQL */ `
  query ListDegrees(
    $filter: ModelDegreeFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDegrees(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        endYear
        id
        major
        schoolId
        startYear
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listEducations = /* GraphQL */ `
  query ListEducations(
    $filter: ModelEducationFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEducations(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        summary
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listEngagements = /* GraphQL */ `
  query ListEngagements(
    $filter: ModelEngagementFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEngagements(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listExperiences = /* GraphQL */ `
  query ListExperiences(
    $filter: ModelExperienceFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listExperiences(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        gptResponse
        id
        text
        title
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listReferences = /* GraphQL */ `
  query ListReferences(
    $filter: ModelReferenceFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReferences(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        contactInformationId
        createdAt
        email
        id
        name
        phone
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listResumes = /* GraphQL */ `
  query ListResumes(
    $filter: ModelResumeFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listResumes(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSchools(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        educationId
        id
        name
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSkills(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        accomplishmentId
        companyId
        createdAt
        id
        link
        resumeId
        title
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSummaries = /* GraphQL */ `
  query ListSummaries(
    $filter: ModelSummaryFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSummaries(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
