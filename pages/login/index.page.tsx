import type { NextPage } from 'next'
import * as Yub from 'yup'
import Head from 'next/head'
import { Formik } from 'formik'

import { loginThunkAction } from '../../redux/login/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/rootReducer'

type FormValue = {
  email: string
  password: string
}

const validationSchema = Yub.object().shape({
  email: Yub.string().required('Email is required!').email('Email is invalid!'),
  password: Yub.string().required('Password is required!'),
})

const Login: NextPage = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state: RootState) => state.userInfo)

  const initialValues: FormValue = {
    email: '',
    password: '',
  }

  const handleSubmit = (values) => {
    dispatch(loginThunkAction(values))
  }

  return (
    <div>
      <Head>
        <title>Login ADMIN.</title>
        <meta name='description' content='Login to GuruAcademy ADMIN' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex'>
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => {
            return (
              <form>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                {userInfo.error && !userInfo.loading && <p>{userInfo.error}</p>}
                <button type='submit'>Submit</button>
              </form>
            )
          }}
        </Formik>
      </main>
    </div>
  )
}

export default Login
