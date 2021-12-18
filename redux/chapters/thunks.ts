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
} from './actions'
import { ChapterDetailsData, UpdateChapterPayload } from './types'
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
      })) as ChapterDetailsData

      dispatch(updateChapterSuccess(response))
      toast.success('Chapter updated successfully!')
      callback()
      dispatch(getChapterDetailsThunkAction(payload.id))
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
