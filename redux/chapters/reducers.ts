import { ChapterManagementState } from './../types'
import { CHAPTER_ACTIONS } from './types'

const initialState: ChapterManagementState = {
  chapter: null,
  error: '',
  loading: false,
}

// tslint:disable-next-line: cyclomatic-complexity
export const chapterManagement = (
  state = initialState,
  action: any
): ChapterManagementState => {
  switch (action.type) {
    //-----------get chapter-----------------
    case CHAPTER_ACTIONS.GET_CHAPTER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CHAPTER_ACTIONS.GET_CHAPTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        chapter: action.payload.chapter,
      }
    case CHAPTER_ACTIONS.GET_CHAPTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    //-----------update chapter-----------------
    case CHAPTER_ACTIONS.UPDATE_CHAPTER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CHAPTER_ACTIONS.UPDATE_CHAPTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case CHAPTER_ACTIONS.UPDATE_CHAPTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    //-----------delete chapter-----------------
    case CHAPTER_ACTIONS.DELETE_CHAPTER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CHAPTER_ACTIONS.DELETE_CHAPTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case CHAPTER_ACTIONS.DELETE_CHAPTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
