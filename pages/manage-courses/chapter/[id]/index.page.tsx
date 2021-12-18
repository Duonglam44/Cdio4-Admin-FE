/* eslint-disable react-hooks/exhaustive-deps */
import PageWithHeader from '@components/header'
import PageWithSidebar from '@components/layout/PageWithSidebar'
import { Fragment, useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/rootReducer'
import { LoaderBall } from '@components/common'
import { useRouter } from 'next/router'
import { Button, Grid } from '@material-ui/core'
import { getChapterDetailsThunkAction } from '@redux/chapters/thunks'
import ChapterInfo from './components/ChapterInfo'

const ChapterDetail: NextPage<Props> = ({}) => {
  const router = useRouter()

  const { id, num } = router.query

  const dispatch = useDispatch()
  const chapterState = useSelector(
    (state: RootState) => state.chapterManagement
  )

  const selectedChapter = chapterState.chapter

  const [expanded, setExpanded] = useState<number>(1)
  const [showCourseInfoModal, setShowCourseInfoModal] = useState<boolean>(false)

  const handleAccordionChange = (panel: number) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : 0)
  }

  const handleEditClickCourseInfo = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.stopPropagation()
    setShowCourseInfoModal(true)
  }

  console.log(`selectedChapter`, selectedChapter)

  useEffect(() => {
    dispatch(getChapterDetailsThunkAction(id as string))
  }, [dispatch, id])

  return (
    <div className='page-course-detail'>
      <Head>
        <title>{selectedChapter?.title || 'Course Detail'}</title>
        <meta name='description' content='Manage course to GuruAcademy ADMIN' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWithSidebar>
        <PageWithHeader title='Chapter Detail'>
          {chapterState.loading ? (
            <LoaderBall />
          ) : (
            <Fragment>
              <Grid
                container
                spacing={3}
                className='page-chapter-detail__chapter-info'
              >
                <ChapterInfo
                  chapterData={selectedChapter}
                  chapterNumber={num as any}
                />
              </Grid>
            </Fragment>
          )}
        </PageWithHeader>
      </PageWithSidebar>
    </div>
  )
}

type Props = {}

export default ChapterDetail
