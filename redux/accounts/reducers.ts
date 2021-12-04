import { AccountManagementState } from './../types'
import { ACCOUNT_ACTIONS } from './types'

const initialState: AccountManagementState = {
  users: [],
  error: '',
  loading: false,
  totalUsers: 0,
}

export const accountsManagement = (
  state = initialState,
  action: any
): AccountManagementState => {
  switch (action.type) {
    /***** login ******/
    case ACCOUNT_ACTIONS.GET_ACCOUNTS_MANAGEMENT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ACCOUNT_ACTIONS.GET_ACCOUNTS_MANAGEMENT_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        totalUsers: action.payload.totalUsers,
        loading: false,
        error: '',
      }
    case ACCOUNT_ACTIONS.GET_ACCOUNTS_MANAGEMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
