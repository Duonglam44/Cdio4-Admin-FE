/* eslint-disable react-hooks/exhaustive-deps */
import PageWithHeader from '@components/header'
import PageWithSidebar from '@components/layout/PageWithSidebar'
import { useMemo, Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/rootReducer'
import { LoaderBall } from '@components/common'
import { useRouter } from 'next/router'
import { Grid } from '@material-ui/core'

const CourseDetail: NextPage<Props> = ({}) => {
  const query = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  )

  const router = useRouter()

  const { id } = router.query

  const dispatch = useDispatch()
  const courseState = useSelector((state: RootState) => state.coursesManagement)

  const selectedCourse = courseState.courses.find(course => course._id === id)

  // console.log(selectedCourse)

  return (
    <div className='page-course-detail'>
      <Head>
        <title>Manage Account</title>
        <meta
          name='description'
          content='Manage account to GuruAcademy ADMIN'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWithSidebar>
        <PageWithHeader title='Account Management'>
          {courseState.loading ? (
            <LoaderBall />
          ) : (
            <Fragment>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h4>Course Information</h4>
                </Grid>
                <Grid item xs={12} />
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h4>Chapters</h4>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h4>Feedbacks</h4>
                </Grid>
              </Grid>
            </Fragment>
          )}
        </PageWithHeader>
      </PageWithSidebar>
    </div>
  )
}

type Props = {}

export default CourseDetail
