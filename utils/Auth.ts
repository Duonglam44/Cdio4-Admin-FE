import jwtDecode from 'jwt-decode'
const tokenKey = 'Guru-auth'

export function loginWithJwt(jwt: string) {
  localStorage.setItem(tokenKey, jwt)
}

export function logout() {
  localStorage.removeItem(tokenKey)
}

export function getJwt() {
  return localStorage.getItem(tokenKey)
}
