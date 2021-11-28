import { DecodedTokenData } from '../types'
import jwtDecode from 'jwt-decode'
import { UserRole, UserStatus } from '@config/constant'

export const tokenKey = 'Guru-admin-auth'

export const isRootOrAdmin = (roleId: number) =>
  roleId === UserRole.ADMIN.id || roleId === UserRole.ROOT.id

export const accessableStatus = (userStatus: number) =>
  userStatus === UserStatus.ACTIVE

export const checkAccessable = (jwt) => {
  const decoded: DecodedTokenData = jwtDecode(jwt)

  return isRootOrAdmin(decoded.role.id) && accessableStatus(decoded.status)
}

export function loginWithJwt(jwt: string) {
  const decoded: DecodedTokenData = jwtDecode(jwt)

  if (!checkAccessable(jwt)) {
    throw new Error(
      'Access denied! Please try another account or contact us for support!'
    )
  }

  localStorage.setItem('roleId', decoded.role.id.toString())
  localStorage.setItem('role', decoded.role.name.toString())
  localStorage.setItem(tokenKey, jwt)
}

export function logout() {
  localStorage.removeItem(tokenKey)
  localStorage.removeItem('roleId')
  localStorage.removeItem('role')
}

export function getJwt() {
  return localStorage.getItem(tokenKey)
}

export function getRoleId() {
  return localStorage.getItem('roleId')
}
