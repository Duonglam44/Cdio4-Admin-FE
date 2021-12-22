import ModalMain from '@components/common/Modal'
import ViewItem from '@components/common/ViewItem'
import { Button } from '@material-ui/core'
import { Grid } from '@mui/material'
import ChapterInfoForm from '@pages/manage-courses/chapter/[id]/components/ChapterInfoForm'
import { LessonOverviewData } from '@redux/chapters/types'
import { formatDateFromApi, getStatusText } from '@utils/helpers'
import React, { Fragment, useState } from 'react'

interface Props {
  lessonData: LessonOverviewData | null
}

const LessonPreview = ({ lessonData }: Props) => {
  const [showChapterInfoModal, setShowChapterInfoModal] =
    useState<boolean>(false)

  if (!lessonData) {
    return <p>No Data</p>
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

  return (
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
            selectedChapter={null}
            onClose={handleCloseChapterInfoModal}
          />
        </ModalMain>
      )}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <video width='100%' controls src={lessonData?.url} />
        </Grid>
        <Grid item xs={12} my={2}>
          <div className='justify-space-between'>
            <h4>Lesson Information</h4>
            <Button
              variant='outlined'
              className='has-text-primary '
              onClick={handleEditChapterInfoClick}
            >
              Edit
            </Button>
          </div>
        </Grid>
        <Fragment>
          <Grid item xs={12} md={6}>
            <ViewItem label='Title' value={lessonData?.title} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ViewItem label='ID' value={lessonData?._id} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ViewItem label='Slug' value={lessonData?.slug} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ViewItem
              label='Status'
              value={getStatusText(lessonData?.status)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ViewItem
              label='Created At'
              value={formatDateFromApi(lessonData?.createdAt)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ViewItem
              label='Updated At'
              value={formatDateFromApi(lessonData?.updatedAt)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <ViewItem label='Description' value={lessonData?.description} />
          </Grid>
        </Fragment>
      </Grid>
    </Fragment>
  )
}

export default LessonPreview
