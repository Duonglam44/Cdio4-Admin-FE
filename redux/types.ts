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
  learningCourses?: string[]
  notifications: NotificationsData[]
  createdAt: string
  updatedAt: string
  error: string
  loading: boolean
  token: string
  isLoggedIn: boolean
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
