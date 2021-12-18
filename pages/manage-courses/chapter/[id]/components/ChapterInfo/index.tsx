import React from 'react'
import ViewItem from '@components/common/ViewItem'
import { Grid } from '@material-ui/core'
import { ChapterDetailsData } from '@redux/chapters/types'
import { formatDateFromApi, getCourseStatusText } from '@utils/helpers'
import View from '@components/common/View'

interface Props {
  chapterData: ChapterDetailsData | null
  chapterNumber: number | string | null
}

const ChapterInfo = ({ chapterData, chapterNumber }: Props) => {
  if (!chapterData) {
    return (
      <Grid item xs={12} className='page-course-detail__course-info--content'>
        <p>No data</p>
      </Grid>
    )
  }

  return (
    <Grid container>
      <Grid item xs={12} className='page-course-detail__course-info--content'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <ViewItem
              className='page-course-detail__course-info--item'
              label={`Chapter ${chapterNumber || chapterData?.number || '--'}`}
              value={chapterData?.title}
              boldValue
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ViewItem
              className='page-course-detail__course-info--item'
              label='ID'
              value={chapterData?._id}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ViewItem
              className='page-course-detail__course-info--item'
              label='Slug'
              value={chapterData?.slug}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <ViewItem
              className='page-course-detail__course-info--item'
              label='Created Date'
              value={formatDateFromApi(chapterData?.createdAt)}
            />
          </Grid>
          <Grid item xs={12} sm={1}>
            <ViewItem
              className='page-course-detail__course-info--item'
              label='Status'
              value={getCourseStatusText(chapterData?.status)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ChapterInfo
