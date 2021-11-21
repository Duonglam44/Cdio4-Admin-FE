
import React, { useEffect, useState } from 'react'
import { CssBaseline } from '@material-ui/core'
import { RootStateOrAny, useSelector } from 'react-redux'
import Auth from '../auth/auth'

interface ILayout {
  withoutPaths: string[],
  publicPages: string[]
}

const Layout: React.FC<ILayout> = ({ children, withoutPaths, publicPages }) => {
  const path = window.location.pathname
  const userID = useSelector((state: RootStateOrAny) => state?.userInfo?.userID)

  if (withoutPaths.includes(path)) {
    return <>{children}</>
  }

  if (path.includes('/login') || path.includes('/access_denied')) {
    return (
      <div className='main-layout'>
        {children}
      </div>
    )
  }

  return (
    <Auth publicPages={publicPages} >
      <div className='main-layout'>
        <CssBaseline />
          <div className='main-layout--children'>
            {
              !userID ? (
                <div className='main-layout-loading'>
                  loading...
                </div>
              ) :
                children
            }
          </div>
      </div>
    </Auth>
  )
}

export default Layout
