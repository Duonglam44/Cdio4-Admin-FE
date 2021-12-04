export enum ACCOUNT_ACTIONS {
  GET_ACCOUNTS_MANAGEMENT_REQUEST = 'GET_ACCOUNTS_MANAGEMENT_REQUEST',
  GET_ACCOUNTS_MANAGEMENT_SUCCESS = 'GET_ACCOUNTS_MANAGEMENT_SUCCESS',
  GET_ACCOUNTS_MANAGEMENT_FAILURE = 'GET_ACCOUNTS_MANAGEMENT_FAILURE',
}

export type AccountManagementResponse = {
  users: [
    {
      socialLinks: {
        facebook?: string
        twitter?: string
        instagram?: string
        linkedin?: string
        github?: string
      }
      address: {
        street?: string
        city?: string
        country?: string
      }
      role: {
        id: number
        name: 'teacher' | 'learner' | 'admin' | 'root'
      }
      _id: string
      email?: string
      firstName?: string
      lastName?: string
      dateOfBirth?: string
      description?: string
      status?: number
      createdAt?: string
      updatedAt?: string
      totalLearningCourses: number
      totalTeachingCourses: number
    }
  ]
  totalUsers: number
}
