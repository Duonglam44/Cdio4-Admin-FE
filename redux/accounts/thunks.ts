import { api } from '../../utils/api'
import { toast } from 'react-toastify'
import {
  getAccountManagementFailure,
  getAccountManagementRequest,
  getAccountManagementSuccess,
} from './actions'
import { AccountManagementResponse } from './types'

//call login api
export const getAccountsManagementThunkAction =
  (query: URLSearchParams) => async (dispatch: any) => {
    dispatch(getAccountManagementRequest())

    try {
      const response = (await api({
        tokenRequired: true,
        path: `/admin/users${query ? `?${query}` : ''}`,
        method: 'GET',
      })) as AccountManagementResponse

      dispatch(getAccountManagementSuccess(response))
    } catch (error: any) {
      toast.error(error?.message || error || 'Fetch data failed!')
      dispatch(getAccountManagementFailure(error))
    }
  }
