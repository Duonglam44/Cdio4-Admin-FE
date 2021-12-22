import { api } from '../../utils/api'
import { toast } from 'react-toastify'
import {
  deleteCategoryFailure,
  deleteCategoryRequest,
  deleteCategorySuccess,
  getCategoryFailure,
  getCategoryRequest,
  getCategoryManagementFailure,
  getCategoryManagementRequest,
  getCategoryManagementSuccess,
  getCategorySuccess,
  updateCategoryFailure,
  updateCategoryRequest,
  updateCategorySuccess,
} from './actions'
import { CategoryDetailsResponse, CategoryManagementResponse } from './types'

//call login api
export const getCategoryManagementThunkAction =
  (query: URLSearchParams) => async (dispatch: any) => {
    dispatch(getCategoryManagementRequest())
    try {
      const response = (await api({
        tokenRequired: true,
        path: `/course-categories${query ? `?${query}` : ''}`,
        method: 'GET',
      })) as CategoryManagementResponse

      const transformedResponse = {
        ...response,
        categorys: response.categorys.map(category => ({
          ...category,
          totalTopic: category.topic.length,
        })),
      }
      dispatch(getCategoryManagementSuccess(transformedResponse))
    } catch (error: any) {
      toast.error(error?.message || error || 'Fetch data failed!')
      dispatch(getCategoryManagementFailure(error))
    }
  }

export const getCategoryDetailsThunkAction =
  (id: string) => async (dispatch: any) => {
    dispatch(getCategoryRequest())

    try {
      const response = (await api({
        tokenRequired: true,
        path: `/courses-categories/${id}?sort=date`,
        method: 'GET',
      })) as CategoryDetailsResponse

      dispatch(getCategorySuccess(response))
    } catch (error: any) {
      toast.error(error?.message || error || 'Fetch data failed!')
      dispatch(getCategoryFailure(error))
    }
  }
