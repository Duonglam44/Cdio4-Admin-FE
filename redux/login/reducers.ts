import { AUTH_ACTIONS } from './types'
// import { GetUserData } from './actions'
import { UserInfo } from './../../types'

const initialState: UserInfo = {
  _id: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  address: '',
  email: '',
  role: {
    id: null,
    name: '',
  },
  teachingCourses: [],
  notifications: [],
  learningCourses: [],
  createdAt: '',
  error: '',
  loading: false,
  token: '',
  isLoggedIn: false,
}

export const userInfo = (state = initialState, action: any) => {
  switch (action.type) {
    /***** login ******/
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        token: 'null',
      }
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.data.token,
        _id: action.data.userId,
        isLoggedIn: true,
        error: '',
      }
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        isLoggedIn: false,
      }
    /***** logout ******/
    case AUTH_ACTIONS.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case AUTH_ACTIONS.LOGOUT_SUCCESS:
      return {
        ...initialState,
      }
    case AUTH_ACTIONS.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    /***** get user data ******/
    case AUTH_ACTIONS.GET_USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}

// export const GetUserDataThunkAction =
//   (token: string | null) => async (dispatch: any) => {
//     try {
//       if (!token) {
//         return;
//       }

//       const res = await api({
//         path: '',
//         method: 'GET',
//         needThrowError: false,
//         errorHandler: (error) => {
//           throw new error('InValid Token');
//         },
//       });

//       dispatch(GetUserData({ ...res }));
//     } catch (error: any) {
//       if (error?.message === 'invalidToken') {
//         throw error;
//       }

//       return;
//     }
//   };
