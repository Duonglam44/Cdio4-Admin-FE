export const API_URL = 'https://guru-academy-api.herokuapp.com/'
export const API_URL_V1 = 'https://guru-academy-api.herokuapp.com/api/v1'

export enum UserStatus {
  INACTIVE = 0,
  ACTIVE = 1,
  PENDING = 2,
  BANNED = 10,
}

export enum CommonStatus {
  INACTIVE = 0,
  ACTIVE = 1,
}

export enum CourseStatus {
  INACTIVE = 0,
  ACTIVE = 1,
  PENDING = 2,
  DRAFT = 20,
}

export const UserRole = {
  ROOT: {
    id: 0,
    name: 'root',
  },
  ADMIN: {
    id: 1,
    name: 'admin',
  },
  LEARNER: {
    id: 2,
    name: 'learner',
  },
  TEACHER: {
    id: 3,
    name: 'teacher',
  },
}
