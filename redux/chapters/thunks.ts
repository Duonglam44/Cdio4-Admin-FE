import { api } from '../../utils/api'
import { toast } from 'react-toastify'
import {
  deleteChapterFailure,
  deleteChapterRequest,
  deleteChapterSuccess,
  getChapterFailure,
  getChapterRequest,
  getChapterSuccess,
  updateChapterFailure,
  updateChapterRequest,
  updateChapterSuccess,
  updateLessonFailure,
  updateLessonRequest,
  updateLessonSuccess,
} from './actions'
import {
  ChapterDetailResponse,
  ChapterDetailsData,
  UpdateChapterPayload,
  UpdateLessonPayload,
} from './types'
import { Callback } from '@utils/types'
import { getCourseDetailsThunkAction } from '@redux/courses/thunks'

export const getChapterDetailsThunkAction =
  (id: string) => async (dispatch: any) => {
    dispatch(getChapterRequest())

    try {
      const response = (await api({
        tokenRequired: true,
        path: `/chapters/${id}`,
        method: 'GET',
      })) as ChapterDetailsData

      dispatch(getChapterSuccess(response))
    } catch (error: any) {
      toast.error(error?.message || error || 'Fetch data failed!')
      dispatch(getChapterFailure(error))
    }
  }

export const updateChapterDetailsThunkAction =
  (payload: UpdateChapterPayload, callback: Callback) =>
  async (dispatch: any) => {
    dispatch(updateChapterRequest())

    try {
      const response = (await api({
        tokenRequired: true,
        path: `/chapters/${payload.id}`,
        method: 'PUT',
        data: payload,
      })) as ChapterDetailResponse

      dispatch(updateChapterSuccess(response.chapter))
      toast.success('Chapter updated successfully!')
      callback()
      dispatch(getChapterDetailsThunkAction(payload.id))
      if (!response?.chapter?.courseId) return
      dispatch(getCourseDetailsThunkAction(response.chapter.courseId as string))
    } catch (error: any) {
      toast.error(error?.message || error || 'Update data failed!')
      dispatch(updateChapterFailure(error))
    }
  }

export const deleteChapterThunkAction =
  (payload: { chapterId: string; courseId: string }, callback: Callback) =>
  async (dispatch: any) => {
    dispatch(deleteChapterRequest())

    try {
      const response = (await api({
        tokenRequired: true,
        path: `/chapters/${payload.chapterId}`,
        method: 'DELETE',
      })) as any

      dispatch(deleteChapterSuccess(response))
      toast.success('Chapter deleted successfully!')
      callback()
      dispatch(getCourseDetailsThunkAction(payload.courseId))
    } catch (error: any) {
      toast.error(error?.message || error || 'Delete data failed!')
      dispatch(deleteChapterFailure(error))
    }
  }

export const updateLessonDetailsThunkAction =
  (payload: UpdateLessonPayload, callback: Callback) =>
  async (dispatch: any) => {
    dispatch(updateLessonRequest())

    try {
      const response = (await api({
        tokenRequired: true,
        path: `/lessons/${payload.id}`,
        method: 'PUT',
        data: payload,
      })) as any

      dispatch(updateLessonSuccess(response))
      toast.success('Lesson updated successfully!')
      callback()
      if (payload?.chapterId) {
        return dispatch(getChapterDetailsThunkAction(payload.chapterId))
      }
      if (payload?.courseId) {
        dispatch(getCourseDetailsThunkAction(payload.courseId))
      }
    } catch (error: any) {
      toast.error(error?.message || error || 'Update data failed!')
      dispatch(updateLessonFailure(error))
    }
  }
