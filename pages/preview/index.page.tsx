/* eslint-disable react-hooks/exhaustive-deps */
import PageWithHeader from '@components/header'
import PageWithSidebar from '@components/layout/PageWithSidebar'
import { Fragment, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/rootReducer'
import { LoaderBall } from '@components/common'
import { useRouter } from 'next/router'
import ChaptersPreview from './[id]/ChaptersPreview'
import { getCourseDetailsThunkAction } from '@redux/courses/thunks'

const ChapterDetail: NextPage<Props> = ({}) => {
  const router = useRouter()

  const { id } = router.query

  const dispatch = useDispatch()
  const courseState = useSelector((state: RootState) => state.coursesManagement)
  const courseData = courseState?.currentCourse

  useEffect(() => {
    dispatch(getCourseDetailsThunkAction(id as string))
  }, [dispatch, id])

  return (
    <Fragment>
      <Head>
        <title>{`${courseData?.title} Preview` || 'Course Preview'}</title>
        <meta name='description' content='Manage course to GuruAcademy ADMIN' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWithSidebar>
        <PageWithHeader title='Chapter Detail'>
          {courseState.loading ? (
            <LoaderBall />
          ) : (
            <Fragment>
              <ChaptersPreview chaptersData={courseData?.chapters} />
            </Fragment>
          )}
        </PageWithHeader>
      </PageWithSidebar>
    </Fragment>
  )
}

type Props = {}

export default ChapterDetail
