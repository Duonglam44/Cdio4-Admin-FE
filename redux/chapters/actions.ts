import { CHAPTER_ACTIONS, ChapterDetailsData } from './types'

//-------------------getChapter-------------------
export const getChapterRequest = () => {
  return {
    type: CHAPTER_ACTIONS.GET_CHAPTER_REQUEST,
  }
}
export const getChapterSuccess = (payload: ChapterDetailsData) => {
  return {
    payload,
    type: CHAPTER_ACTIONS.GET_CHAPTER_SUCCESS,
  }
}
export const getChapterFailure = (error: string) => {
  return {
    error,
    type: CHAPTER_ACTIONS.GET_CHAPTER_FAILURE,
  }
}
//-------------------updateChapter-------------------
export const updateChapterRequest = () => {
  return {
    type: CHAPTER_ACTIONS.UPDATE_CHAPTER_REQUEST,
  }
}
export const updateChapterSuccess = (payload: ChapterDetailsData) => {
  return {
    payload,
    type: CHAPTER_ACTIONS.UPDATE_CHAPTER_SUCCESS,
  }
}
export const updateChapterFailure = (error: string) => {
  return {
    error,
    type: CHAPTER_ACTIONS.UPDATE_CHAPTER_FAILURE,
  }
}

//-------------------deleteChapter-------------------
export const deleteChapterRequest = () => {
  return {
    type: CHAPTER_ACTIONS.DELETE_CHAPTER_REQUEST,
  }
}
export const deleteChapterSuccess = (payload: ChapterDetailsData) => {
  return {
    payload,
    type: CHAPTER_ACTIONS.DELETE_CHAPTER_SUCCESS,
  }
}
export const deleteChapterFailure = (error: string) => {
  return {
    error,
    type: CHAPTER_ACTIONS.DELETE_CHAPTER_FAILURE,
  }
}
