import { api } from '../../utils/api'
import { toast } from 'react-toastify'
import {
  deleteCourseFailure,
  deleteCourseRequest,
  deleteCourseSuccess,
  getCourseFailure,
  getCourseRequest,
  getCoursesManagementFailure,
  getCoursesManagementRequest,
  getCoursesManagementSuccess,
  getCourseSuccess,
  updateCourseFailure,
  updateCourseRequest,
  updateCourseSuccess,
} from './actions'
import { CourseDetailsResponse, CoursesManagementResponse } from './types'

//call login api
export const getCoursesManagementThunkAction =
  (query: URLSearchParams) => async (dispatch: any) => {
    dispatch(getCoursesManagementRequest())

    try {
      const response = (await api({
        tokenRequired: true,
        path: `/courses/all${query ? `?${query}` : ''}`,
        method: 'GET',
      })) as CoursesManagementResponse

      const transformedResponse = {
        ...response,
        courses: response.courses.map(course => ({
          ...course,
          totalLearners: course.learnersDetail.length,
          totalStreams: course.streams.length,
          totalChapters: course.chapters.length,
          totalFeedbacks: course.feedbacks.length,
        })),
      }

      dispatch(getCoursesManagementSuccess(transformedResponse))
    } catch (error: any) {
      toast.error(error?.message || error || 'Fetch data failed!')
      dispatch(getCoursesManagementFailure(error))
    }
  }

export const getCourseDetailsThunkAction =
  (id: string) => async (dispatch: any) => {
    dispatch(getCourseRequest())

    try {
      const response = (await api({
        tokenRequired: true,
        path: `/courses/${id}?sort=date`,
        method: 'GET',
      })) as CourseDetailsResponse

      dispatch(getCourseSuccess(response))
    } catch (error: any) {
      toast.error(error?.message || error || 'Fetch data failed!')
      dispatch(getCourseFailure(error))
    }
  }

// export const updateCourseDetailsThunkAction =
//   (
//     payload: UpdateCoursePayload,
//     previousQueryUrl: URLSearchParams,
//     callback: Callback
//   ) =>
//   async (dispatch: any) => {
//     dispatch(updateCourseRequest())

//     try {
//       const response = (await api({
//         tokenRequired: true,
//         path: '/admin/users/profile',
//         method: 'POST',
//         data: payload,
//       })) as CourseDetailsResponse

//       dispatch(updateCourseSuccess(response))
//       toast.success('Course updated successfully!')
//       callback()
//       dispatch(getCoursesManagementThunkAction(previousQueryUrl))
//     } catch (error: any) {
//       toast.error(error?.message || error || 'Update data failed!')
//       dispatch(updateCourseFailure(error))
//     }
//   }

// export const deleteCourseThunkAction =
//   (userId: string, previousQueryUrl: URLSearchParams, callback: Callback) =>
//   async (dispatch: any) => {
//     dispatch(deleteCourseRequest())

//     try {
//       const response = (await api({
//         tokenRequired: true,
//         path: `/admin/users/${userId}`,
//         method: 'DELETE',
//       })) as any

//       dispatch(deleteCourseSuccess(response))
//       toast.success('Course deleted successfully!')
//       callback()
//       dispatch(getCoursesManagementThunkAction(previousQueryUrl))
//     } catch (error: any) {
//       toast.error(error?.message || error || 'Delete data failed!')
//       dispatch(deleteCourseFailure(error))
//     }
//   }
