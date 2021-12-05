import moment from 'moment'
import { nanoid } from 'nanoid'

import { CourseStatus, UserStatus } from '../config/constant'

export const getAccountStatusText = (statusId: number) => {
  switch (statusId) {
    case UserStatus.ACTIVE:
      return 'Active'
    case UserStatus.PENDING:
      return 'Pending'
    case UserStatus.INACTIVE:
      return 'Inactive'
    case UserStatus.BANNED:
      return 'Banned'
    default:
      return 'Unknown'
  }
}

export const getCourseStatusText = (statusId: number) => {
  switch (statusId) {
    case CourseStatus.ACTIVE:
      return 'Active'
    case CourseStatus.PENDING:
      return 'Pending'
    case CourseStatus.INACTIVE:
      return 'Inactive'
    case CourseStatus.DRAFT:
      return 'Draft'
    default:
      return 'Unknown'
  }
}

export const formatDateForForm = (date: Date | string | undefined) => {
  return moment(date).format('yyyy-MM-DD')
}

export const formatDateFromApi = (date: Date | string | undefined) => {
  return moment(date).format('DD-MM-YYYY')
}

export const isEmpty = (value: any): boolean =>
  value === undefined ||
  value === null ||
  // tslint:disable-next-line: use-isnan
  value === NaN ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value === '') ||
  (Array.isArray(value) && value.length === 0)

export const isNumeric = (num: any) => {
  return !isNaN(num)
}

export const getRandomId = (): string => nanoid()
