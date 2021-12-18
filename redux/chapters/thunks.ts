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
import { ChapterDetailsData } from './types'

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

// export const updateChapterDetailsThunkAction =
//   (
//     payload: UpdateChapterPayload,
//     previousQueryUrl: URLSearchParams,
//     callback: Callback
//   ) =>
//   async (dispatch: any) => {
//     dispatch(updateChapterRequest())

//     try {
//       const response = (await api({
//         tokenRequired: true,
//         path: '/admin/users/profile',
//         method: 'POST',
//         data: payload,
//       })) as ChapterDetailsData

//       dispatch(updateChapterSuccess(response))
//       toast.success('Chapter updated successfully!')
//       callback()
//       dispatch(getChaptersManagementThunkAction(previousQueryUrl))
//     } catch (error: any) {
//       toast.error(error?.message || error || 'Update data failed!')
//       dispatch(updateChapterFailure(error))
//     }
//   }

// export const deleteChapterThunkAction =
//   (userId: string, previousQueryUrl: URLSearchParams, callback: Callback) =>
//   async (dispatch: any) => {
//     dispatch(deleteChapterRequest())

//     try {
//       const response = (await api({
//         tokenRequired: true,
//         path: `/admin/users/${userId}`,
//         method: 'DELETE',
//       })) as any

//       dispatch(deleteChapterSuccess(response))
//       toast.success('Chapter deleted successfully!')
//       callback()
//       dispatch(getChaptersManagementThunkAction(previousQueryUrl))
//     } catch (error: any) {
//       toast.error(error?.message || error || 'Delete data failed!')
//       dispatch(deleteChapterFailure(error))
//     }
//   }
