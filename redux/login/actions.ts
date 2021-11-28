import { AUTH_ACTIONS, LoginResponse } from './types'

export const loginRequest = () => {
  return {
    type: AUTH_ACTIONS.LOGIN_REQUEST,
  }
}

export const loginSuccess = (data: LoginResponse) => {
  return {
    data,
    type: AUTH_ACTIONS.LOGIN_SUCCESS,
  }
}

export const loginFailure = (error: string) => {
  return {
    error,
    type: AUTH_ACTIONS.LOGIN_FAILURE,
  }
}
