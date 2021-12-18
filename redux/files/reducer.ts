import { FilesState } from '../types'
import { UploadFile } from './types'

const initialState: FilesState = {
  loading: null!,
  uploadLoading: null!,
  uploadedUrl: '',
}

export const filesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UploadFile.UPLOAD_REQUEST:
      return {
        ...state,
        uploadLoading: action.uploadLoading,
      }
    case UploadFile.UPLOAD_SUCCESS:
      return {
        ...state,
        uploadLoading: action.uploadLoading,
        uploadedUrl: action.uploadedUrl,
      }
    case UploadFile.UPLOAD_FAILURE:
      return {
        ...state,
        uploadLoading: action.uploadLoading,
      }
    default:
      return state
  }
}
