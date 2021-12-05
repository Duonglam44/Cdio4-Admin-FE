export enum COURSE_ACTIONS {
  GET_COURSES_MANAGEMENT_REQUEST = 'courses-management/GET_COURSES_MANAGEMENT_REQUEST',
  GET_COURSES_MANAGEMENT_SUCCESS = 'courses-management/GET_COURSES_MANAGEMENT_SUCCESS',
  GET_COURSES_MANAGEMENT_FAILURE = 'courses-management/GET_COURSES_MANAGEMENT_FAILURE',
  UPDATE_COURSE_REQUEST = 'courses-management/UPDATE_COURSE_REQUEST',
  UPDATE_COURSE_SUCCESS = 'courses-management/UPDATE_COURSE_SUCCESS',
  UPDATE_COURSE_FAILURE = 'courses-management/UPDATE_COURSE_FAILURE',
  DELETE_COURSE_REQUEST = 'courses-management/DELETE_COURSE_REQUEST',
  DELETE_COURSE_SUCCESS = 'courses-management/DELETE_COURSE_SUCCESS',
  DELETE_COURSE_FAILURE = 'courses-management/DELETE_COURSE_FAILURE',
  CREATE_COURSE_REQUEST = 'courses-management/CREATE_COURSE_REQUEST',
  CREATE_COURSE_SUCCESS = 'courses-management/CREATE_COURSE_SUCCESS',
  CREATE_COURSE_FAILURE = 'courses-management/CREATE_COURSE_FAILURE',
}

export interface CourseDetailData {
  _id: string
  title: string
  description: string
  imageUrl: string
  author: {
    _id: string
    email: string
    firstName: string
    lastName: string
  }
  topic: {
    _id: string
    title: string
    courseCategoryId: {
      _id: string
      title: string
      status: number
      discountPercent: number
      slug: string
      __v: number
    }
    status: number
    discountPercent: number
    slug: string
    __v: number
  }
  tags: string[]
  price: number
  discount: number
  status: number
  learnersDetail: string[]
  streams: string[]
  feedbacks: string[]
  chapters: string[]
  createdAt: string
  updatedAt: string
  slug: string
  __v: number
}

export type CoursesManagementResponse = {
  courses: CourseDetailData[]
  totalCourses: number
}

export type CourseDetailsResponse = {
  course: CourseDetailData
}

export type UpdateAccountPayload = {
  userId: string
  // email: 'abc@gmail.com'
  firstName: string
  lastName: string
  dateOfBirth: string | Date
  description: string
  status: number
  phoneNumber: string
  role: number
  socialLinks: {
    facebook: string
    instagram: string
    linkedIn: string
    github: string
    twitter: string
  }
  address: {
    street: string
    city: string
    country: string
  }
  imageUrl: string
}

export type CreateAccountPayload = {
  //  userId: string
  email: string
  newPassword: string
  firstName: string
  lastName: string
  dateOfBirth: string | Date
  description: string
  status: number
  phoneNumber: string
  role: number
  socialLinks: {
    facebook: string
    instagram: string
    linkedIn: string
    github: string
    twitter: string
  }
  address: {
    street: string
    city: string
    country: string
  }
  imageUrl: string
}
