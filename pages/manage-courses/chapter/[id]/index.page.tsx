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
import { Grid } from '@material-ui/core'
import { getChapterDetailsThunkAction } from '@redux/chapters/thunks'
import ChapterInfo from './components/ChapterInfo'
import ModalMain from '@components/common/Modal'
import ChapterInfoForm from './components/ChapterInfoForm'
import LessonsInfo from './components/LessonsInfo'

const ChapterDetail: NextPage<Props> = ({}) => {
  const router = useRouter()

  const { id, n } = router.query
  const chapterId = id as string
  const chapterNumber = parseInt(n as string, 0)

  const dispatch = useDispatch()
  const chapterState = useSelector(
    (state: RootState) => state.chapterManagement
  )

  const selectedChapter = chapterState.chapter

  const [expanded, setExpanded] = useState<number>(1)
  const [showChapterInfoModal, setShowChapterInfoModal] =
    useState<boolean>(false)

  const handleAccordionChange = (panel: number) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : 0)
  }

  const handleEditChapterInfoClick = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.stopPropagation()
    setShowChapterInfoModal(true)
  }

  const handleCloseChapterInfoModal = () => {
    setShowChapterInfoModal(false)
  }

  useEffect(() => {
    dispatch(getChapterDetailsThunkAction(chapterId))
  }, [dispatch, chapterId])

  return (
    <Fragment>
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
              {/* Modals */}
              {showChapterInfoModal && (
                <ModalMain
                  open={showChapterInfoModal}
                  onClose={handleCloseChapterInfoModal}
                  width={600}
                  height={350}
                  position='flex-start-center'
                  preventBackdropClick
                  label={'Course Detail'}
                >
                  <ChapterInfoForm
                    selectedChapter={selectedChapter}
                    onClose={handleCloseChapterInfoModal}
                  />
                </ModalMain>
              )}
              <Grid container spacing={3} className='page-chapter-detail'>
                <Grid item xs={12} sm={12}>
                  <ChapterInfo
                    chapterData={selectedChapter}
                    chapterNumber={chapterNumber}
                    className='page-chapter-detail__chapter-info'
                    onEdit={handleEditChapterInfoClick}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <LessonsInfo
                    lessonsData={selectedChapter?.lessons}
                    className='page-chapter-detail__chapter-info'
                  />
                </Grid>
              </Grid>
            </Fragment>
          )}
        </PageWithHeader>
      </PageWithSidebar>
    </Fragment>
  )
}

type Props = {}

export default ChapterDetail
