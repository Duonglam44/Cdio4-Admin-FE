import React from 'react'
import '../styles/globals.css'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../redux/store'
import { Provider } from 'react-redux'
import { NoSsr, ThemeProvider } from '@material-ui/core'
import theme from '../styles/theme'
import { SnackbarProvider } from 'notistack'
import Layout from '../components/layout/Layout'

function myApp({ Component, pageProps, store }: any) {
  const getPaths = (paths: string[]) => {
    const newPaths: string[] = []

    paths.map((path) => {
      if (path === '/') {
        newPaths.push(path)

        return
      }
      newPaths.push(path)
    })

    return newPaths
  }

  const publicPages = getPaths([])
  const withoutLayoutPaths = getPaths([])

  const notistackRef = React.createRef<SnackbarProvider>()
  const onClickDismiss = (key: any) => {
    notistackRef?.current?.closeSnackbar(key)
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NoSsr>
          <Layout withoutPaths={withoutLayoutPaths} publicPages={publicPages}>
            <Component {...pageProps} />
          </Layout>
        </NoSsr>
      </ThemeProvider>
    </Provider>
  )
}

export default withRedux(makeStore)(myApp)
