import {
  CATEGORY_ACTIONS,
  CategoryManagementResponse,
  CategoryDetailsResponse,
} from './types'

//-------------------getCategoryManagement-------------------
export const getCategoryManagementRequest = () => {
  return {
    type: CATEGORY_ACTIONS.GET_CATEGORY_MANAGEMENT_REQUEST,
  }
}
export const getCategoryManagementSuccess = (
  payload: CategoryManagementResponse
) => {
  return {
    payload,
    type: CATEGORY_ACTIONS.GET_CATEGORY_MANAGEMENT_SUCCESS,
  }
}
export const getCategoryManagementFailure = (error: string) => {
  return {
    error,
    type: CATEGORY_ACTIONS.GET_CATEGORY_MANAGEMENT_FAILURE,
  }
}
//-------------------getCategory-------------------
export const getCategoryRequest = () => {
  return {
    type: CATEGORY_ACTIONS.GET_CATEGORY_REQUEST,
  }
}
export const getCategorySuccess = (payload: CategoryDetailsResponse) => {
  return {
    payload,
    type: CATEGORY_ACTIONS.GET_CATEGORY_SUCCESS,
  }
}
export const getCategoryFailure = (error: string) => {
  return {
    error,
    type: CATEGORY_ACTIONS.GET_CATEGORY_FAILURE,
  }
}
//-------------------updateCategory-------------------
export const updateCategoryRequest = () => {
  return {
    type: CATEGORY_ACTIONS.UPDATE_CATEGORY_REQUEST,
  }
}
export const updateCategorySuccess = (payload: CategoryDetailsResponse) => {
  return {
    payload,
    type: CATEGORY_ACTIONS.UPDATE_CATEGORY_SUCCESS,
  }
}
export const updateCategoryFailure = (error: string) => {
  return {
    error,
    type: CATEGORY_ACTIONS.UPDATE_CATEGORY_FAILURE,
  }
}

//-------------------deleteCategory-------------------
export const deleteCategoryRequest = () => {
  return {
    type: CATEGORY_ACTIONS.DELETE_CATEGORY_REQUEST,
  }
}
export const deleteCategorySuccess = (payload: CategoryDetailsResponse) => {
  return {
    payload,
    type: CATEGORY_ACTIONS.DELETE_CATEGORY_SUCCESS,
  }
}
export const deleteCategoryFailure = (error: string) => {
  return {
    error,
    type: CATEGORY_ACTIONS.DELETE_CATEGORY_FAILURE,
  }
}
