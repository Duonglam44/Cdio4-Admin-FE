import type { NextPage } from 'next'
import Head from 'next/head'
import { useFormik } from 'formik'
import Image from 'next/image'
import Grid from '@mui/material/Grid'

import { loginThunkAction } from '../../redux/login/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/rootReducer'
import { LoginData } from '../../redux/login/types'
import { loginSchema } from './helpers'
import { LoaderBall } from '@components/common'
import LoginImage from '@public/images/loginBg.jpg'
import './styles.scss'

const Login: NextPage = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state: RootState) => state.userInfo)

  const initialValues: LoginData = {
    email: '',
    password: '',
  }

  const handleSubmit = (values) => {
    dispatch(loginThunkAction(values))
  }

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  })

  return (
    <div>
      <Head>
        <title>Login ADMIN.</title>
        <meta name='description' content='Login to GuruAcademy ADMIN' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='center-page'>
        <Grid
          className='section__card'
          container
          md={8}
          sm={8}
          xs={11}
          direction='row'
          maxHeight='80vh'
        >
          <Grid
            item
            width={'40%'}
            overflow='hidden'
            className='page__login--image-container'
          >
            <Image
              src={LoginImage}
              alt='bg login'
              objectFit='cover'
              className='page__login--image'
            />
          </Grid>
          <Grid item padding={7}>
            <Grid item mb={5}>
              <h2>Login</h2>
              <p>Guru Academy ADMIN.</p>
            </Grid>
            <Grid item>
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.errors.email &&
                  formik.touched.email &&
                  formik.errors.email}
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.errors.password &&
                  formik.touched.password &&
                  formik.errors.password}
                {userInfo.error && !userInfo.loading && <p>{userInfo.error}</p>}
                {userInfo.loading && <LoaderBall />}
                <button type='submit'>Submit</button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}

export default Login
