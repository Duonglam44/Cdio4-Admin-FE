import moment from 'moment'
import { UserStatus } from '../config/constant'

export const getAccountStatus = (statusId: number) => {
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

export const formatDateForForm = (date: Date | string | undefined) => {
  return moment(date).format('yyyy-MM-DD')
}
