import {
  uploadFileRequest,
  uploadFileSuccess,
  uploadFileFailure,
} from './actions'
import { toast } from 'react-toastify'
import { storage } from '../../services/firebase'
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  StorageError,
  UploadTaskSnapshot,
} from '@firebase/storage'

export const uploadFileThunkAction =
  (file: any, callback: (responseUrl: string) => void) =>
  async (dispatch: any) => {
    dispatch(uploadFileRequest())
    if (!file) return
    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
      },
      (err: StorageError) => {
        toast.error(err.message)
        dispatch(uploadFileFailure(err.message))
      },
      async () => {
        const responseUrl = await getDownloadURL(uploadTask.snapshot.ref)
        callback(responseUrl)
        dispatch(uploadFileSuccess(responseUrl))
      }
    )
  }
