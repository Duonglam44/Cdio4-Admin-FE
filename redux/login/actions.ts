import { LoginActions } from './types'

export const Login = (value: string) => {
  return {
    type: LoginActions.LOGIN,
    token: value,
  }
}

export const Logout = (value: string) => {
  return {
    type: LoginActions.LOGOUT,
  }
}

export const GetUserData = (res: any) => {
  return {
    type: LoginActions.GET_USER_DATA,
    payload: res,
  }
}
