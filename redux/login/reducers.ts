import { LoginActions } from './types'
import { GetUserData } from './actions'
import { UserInfo } from './../../types'
import { api } from '../../utils/api'

const initialState: UserInfo = {
  _id: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  address: '',
  email: '',
  role: {},
  teachingCourses: [],
  notifications: [],
  learningCourses: [],
  createdAt: '',
}

export const userInfo = (state = initialState, action: any) => {
  switch (action.type) {
    case LoginActions.LOGIN:
      return {
        ...state,
        value: action.token,
      }
    case LoginActions.LOGOUT:
      return {
        ...state,
        value: '',
      }
    case LoginActions.GET_USER_DATA:
      return {
        ...state,
        ...action?.payload,
      }
    default:
      return state
  }
}

export const GetUserDataThunkAction =
  (token: string | null) => async (dispatch: any) => {
    try {
      if (!token) {
        return
      }

      const res = await api({
        path: '',
        method: 'GET',
        needThrowError: false,
        errorHandler: (error) => {
          throw new error('InValid Token')
        },
      })

      dispatch(GetUserData({ ...res }))
    } catch (error: any) {
      if (error?.message === 'invalidToken') {
        throw error
      }

      return
    }
  }
