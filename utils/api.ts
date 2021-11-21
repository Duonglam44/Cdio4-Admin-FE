import axios, { Method } from 'axios'

interface ApiDataType {
  path?: string
  method: Method
  params?: object
  data?: object
  headers?: { [key: string]: string }
  errorHandler?: (error: any) => void
  needThrowError?: boolean
}

const handleThrowError = (
  error: any,
  errorHandler: any,
  needThrowError: any,
) => {
  if (needThrowError) {
    throw error
  }

  if (errorHandler && typeof errorHandler === 'function') {
    errorHandler(error)
  }

  return
}

export const api = async ({
  path,
  method,
  params,
  headers,
  errorHandler,
  data,
  needThrowError,
}: ApiDataType) => {
  try {
    const token = localStorage.getItem('access_token')
    if (!token && !headers) {
      return Promise.reject({ message: 'Missing token' })
    }

    const paramsAxios = {
      method,
      params,
      data,
      url: `http://localhost:5000${path}`,
      headers: headers || {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    const result = await axios(paramsAxios)

    return result
  } catch (error) {
    handleThrowError(error, errorHandler, needThrowError)
  }
}
