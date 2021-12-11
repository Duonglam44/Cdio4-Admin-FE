import { CourseDetailData, CourseOverviewData } from './courses/types'
import { CategoryDetailData } from './categories/types'

export interface UserInfoState {
  _id: string
  firstName: string
  lastName: string
  dateOfBirth?: string
  address?: {
    street?: string
    city?: string
    country?: string
  }
  email: string
  role?: {
    id: number | null
    name: 'root' | 'admin' | 'teacher' | 'learner' | ''
  }
  status?: number
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    github?: string
  }
  phoneNumber?: string
  description?: string
  imageUrl?: string
  teachingCourses?: string[]
  learningCourses?: string[]
  notifications: NotificationsData[]
  createdAt: string
  updatedAt: string
  error: string
  loading: boolean
  token: string
  isLoggedIn: boolean
}

export interface AccountsManagementState {
  users: AccountManagementData[]
  error: string
  loading: boolean
  totalUsers: number
}

export interface CoursesManagementState {
  courses: (CourseOverviewData & {
    totalLearners: number
    totalStreams: number
    totalChapters: number
    totalFeedbacks: number
  })[]
  error: string
  loading: boolean
  totalCourses: number
  currentCourse: CourseDetailData | null
}

export interface CategoriesManagementState {
  categories: CategoryDetailData[]
  error: string
  loading: boolean
}

export interface NotificationsData {
  status: number
  _id: string
  userId: {
    _id: string
    email: string
    firstName: string
    lastName: string
    status: number
  }
  title: string
  content: string
  isSeen: false
  createdAt: string | Date
  updatedAt: string | Date
  __v: 0
}

export interface AccountManagementData {
  _id: string
  address: {
    street: string
    city: string
    country: string
  }
  role: {
    id: number
    name: string
  }
  socialLinks?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    github?: string
  }
  email: string
  firstName: string
  lastName: string
  dateOfBirth: string | Date
  phoneNumber?: string
  description?: string
  imageUrl?: string
  status: number
  totalLearningCourses: number
  totalTeachingCourses: number
  notifications: NotificationsData[]
  createdAt: string | Date
  updatedAt: string | Date
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
  firstName: string
  lastName: string
  imageUrl?: string
}
