import { CoursesManagementState } from './../types'
import { COURSE_ACTIONS } from './types'

const initialState: CoursesManagementState = {
  courses: [],
  error: '',
  loading: false,
  totalCourses: 0,
}

// tslint:disable-next-line: cyclomatic-complexity
export const coursesManagement = (
  state = initialState,
  action: any
): CoursesManagementState => {
  switch (action.type) {
    //-----------get accounts management-----------------
    case COURSE_ACTIONS.GET_COURSES_MANAGEMENT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case COURSE_ACTIONS.GET_COURSES_MANAGEMENT_SUCCESS:
      return {
        ...state,
        courses: action.payload.courses,
        totalCourses: action.payload.totalCourses,
        loading: false,
        error: '',
      }
    case COURSE_ACTIONS.GET_COURSES_MANAGEMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    //-----------update account-----------------
    case COURSE_ACTIONS.UPDATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case COURSE_ACTIONS.UPDATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case COURSE_ACTIONS.UPDATE_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    //-----------delete account-----------------
    case COURSE_ACTIONS.DELETE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case COURSE_ACTIONS.DELETE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case COURSE_ACTIONS.DELETE_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    //-----------create account-----------------
    case COURSE_ACTIONS.CREATE_COURSE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case COURSE_ACTIONS.CREATE_COURSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case COURSE_ACTIONS.CREATE_COURSE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
