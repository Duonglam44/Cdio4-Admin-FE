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
    loginWithJwt(token)
    toast.success('Login successfully!')
    dispatch(loginSuccess(response))
  } catch (error: any) {
    toast.error(error.message || error || 'Login failed!')
    dispatch(loginFailure(error))
  }
}
