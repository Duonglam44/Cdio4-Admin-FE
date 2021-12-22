import { CategoryManagementState } from './../types'
import { CATEGORY_ACTIONS } from './types'

const initialState: CategoryManagementState = {
  categorys: [],
  error: '',
  loading: false,
  totalCategory: 0,
  // currentCategory: null,
}

// tslint:disable-next-line: cyclomatic-complexity
export const categoryManagement = (
  state = initialState,
  action: any
): CategoryManagementState => {
  switch (action.type) {
    //-----------get category management-----------------
    case CATEGORY_ACTIONS.GET_CATEGORY_MANAGEMENT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CATEGORY_ACTIONS.GET_CATEGORY_MANAGEMENT_SUCCESS:
      return {
        ...state,
        categorys: action.payload.category,
        totalCategory: action.payload.totalCategory,
        loading: false,
        error: '',
      }
    case CATEGORY_ACTIONS.GET_CATEGORY_MANAGEMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    //-----------get category-----------------
    case CATEGORY_ACTIONS.GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CATEGORY_ACTIONS.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case CATEGORY_ACTIONS.GET_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    //-----------update course-----------------
    case CATEGORY_ACTIONS.UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CATEGORY_ACTIONS.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case CATEGORY_ACTIONS.UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    //-----------delete course-----------------
    case CATEGORY_ACTIONS.DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CATEGORY_ACTIONS.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case CATEGORY_ACTIONS.DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
