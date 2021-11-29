import { NotificationsData } from '@redux/types'

export enum AUTH_ACTIONS {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE = 'LOGOUT_FAILURE',
  GET_USER_DATA_REQUEST = 'GET_USER_DATA_REQUEST',
  GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS',
  GET_USER_DATA_FAILURE = 'GET_USER_DATA_FAILURE',
}

export type LoginData = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  userId: string
}

export type AllDataUserResponse = {
  user: {
    address: {
      street: string
      city: string
      country: string
    }
    role: {
      id: number
      name: string
    }
    _id: string
    email: string
    firstName: string
    lastName: string
    dateOfBirth: string | Date
    status: number
    notifications: NotificationsData[]
    createdAt: string | Date
    updatedAt: string | Date
  }
}
