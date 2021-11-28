import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { checkAccessable, getJwt, tokenKey } from '../../utils/auth'
import { LoaderBall } from '@components/common'

type Token = string | null

const Auth: React.FC<{ children: any; publicPages: string[] }> = ({
  children,
  publicPages,
}) => {
  const path = window.location.pathname
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    void checkLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const checkLogin = async () => {
    const token: Token = getJwt()
    setLoading(false)

    if (token && checkAccessable(token)) return

    localStorage.removeItem(tokenKey)
    await router.replace('/login')
  }

  if (loading) {
    return <LoaderBall showInMiddleOfPage />
  }

  return <>{children}</>
}

export default Auth
