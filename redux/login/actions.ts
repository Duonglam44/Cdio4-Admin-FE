import { AUTH_ACTIONS } from './types'

export const loginRequest = () => {
  return {
    type: AUTH_ACTIONS.LOGIN_REQUEST,
  }
}

export const loginSuccess = (data) => {
  return {
    data,
    type: AUTH_ACTIONS.LOGIN_SUCCESS,
  }
}

export const loginFailure = (error) => {
  return {
    error,
    type: AUTH_ACTIONS.LOGIN_FAILURE,
  }
}
