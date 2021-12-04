import { ACCOUNT_ACTIONS, AccountManagementResponse } from './types'

export const getAccountManagementRequest = () => {
  return {
    type: ACCOUNT_ACTIONS.GET_ACCOUNTS_MANAGEMENT_REQUEST,
  }
}

export const getAccountManagementSuccess = (
  payload: AccountManagementResponse
) => {
  return {
    payload,
    type: ACCOUNT_ACTIONS.GET_ACCOUNTS_MANAGEMENT_SUCCESS,
  }
}

export const getAccountManagementFailure = (error: string) => {
  return {
    error,
    type: ACCOUNT_ACTIONS.GET_ACCOUNTS_MANAGEMENT_FAILURE,
  }
}
