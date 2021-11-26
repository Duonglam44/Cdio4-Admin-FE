const tokenKey = 'Guru-admin-auth'

export function loginWithJwt(jwt: string) {
  localStorage.setItem(tokenKey, jwt)
}

export function logout() {
  localStorage.removeItem(tokenKey)
}

export function getJwt() {
  return localStorage.getItem(tokenKey)
}
