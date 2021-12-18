import { UploadFile } from './types'

export const uploadFileRequest = () => {
  return {
    type: UploadFile.UPLOAD_REQUEST,
  }
}
export const uploadFileSuccess = payload => {
  return {
    payload,
    type: UploadFile.UPLOAD_SUCCESS,
  }
}
export const uploadFileFailure = (error: string) => {
  return {
    error,
    type: UploadFile.UPLOAD_FAILURE,
  }
}
