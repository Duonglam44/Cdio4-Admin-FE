import { loginFailure, loginRequest, loginSuccess } from './actions'
import { LoginData, LoginResponse } from './types'
import { api } from '../../utils/api'
import { loginWithJwt } from '../../utils/auth'
import { toast } from 'react-toastify'

//call login api
export const loginThunkAction = (data: LoginData) => async (dispatch) => {
  dispatch(loginRequest())

  try {
    const response = (await api({
      data,
      tokenRequired: false,
      path: '/auth/login',
      method: 'POST',
    })) as LoginResponse

    const token = response.token
    toast.success('Login successfully!')
    loginWithJwt(token)
    dispatch(loginSuccess(token))
  } catch (error: any) {
    toast.error(error || 'Login failed!')
    dispatch(loginFailure(error))
  }
}
