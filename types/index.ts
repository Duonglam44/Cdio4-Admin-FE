import { isRootOrAdmin } from './../.history/utils/auth_20211127195924'
export interface UserInfo {
  _id: string
  firstName: string
  lastName: string
  dateOfBirth?: string
  address?: string
  email: string
  role?: {
    id: number | null
    name: 'root' | 'admin' | 'teacher' | 'learner' | ''
  }
  status?: number
  teachingCourses: string[]
  notifications: string[]
  learningCourses?: string[]
  createdAt: string
  error: string
  loading: boolean
  token: string
  isLoggedIn: boolean
}

export interface DecodedTokenData {
  email: string
  exp: number
  iat: number
  role: {
    id: number
    name: 'root' | 'admin' | 'teacher' | 'learner'
  }
  status: number
  userId: string
}
