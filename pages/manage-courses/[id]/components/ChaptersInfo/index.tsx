import ViewItem from '@components/common/ViewItem'
import { Grid } from '@material-ui/core'
import { CourseDetailData } from '@redux/courses/types'
import { formatDateFromApi, getStatusText } from '@utils/helpers'
import React from 'react'
import { useRouter } from 'next/router'

interface Props {
  data: CourseDetailData['chapters'] | undefined
}

const ChaptersInfo = ({ data }: Props) => {
  const router = useRouter()

  if (!data || !data.length) {
    return (
      <Grid item xs={12} className='page-course-detail__course-info--content'>
        <p>No data</p>
      </Grid>
    )
  }

  const handleChapterClick = async (id: string, chapterNumber: number) => {
    await router.push(`/manage-courses/chapter/${id}?num=${chapterNumber}`)
  }

  return (
    <Grid container>
      <Grid item xs={12} className='page-course-detail__chapter-info--content'>
        {data.map((chapter, index) => (
          <Grid
            container
            spacing={3}
            key={chapter._id || index}
            onClick={() => handleChapterClick(chapter._id, index + 1)}
            className='page-course-detail__chapter-info--item'
            style={{ cursor: 'pointer' }}
          >
            <Grid item xs={3}>
              <ViewItem
                label={`Chapter ${index + 1}`}
                value={chapter.title}
                boldValue
              />
            </Grid>
            <Grid item xs={1}>
              <ViewItem
                label={index === 0 ? 'Lessons' : '--'}
                value={chapter.lessons.length}
              />
            </Grid>
            <Grid item xs={3}>
              <ViewItem label={index === 0 ? 'ID' : '--'} value={chapter._id} />
            </Grid>
            <Grid item xs={3}>
              <ViewItem
                label={index === 0 ? 'Slug' : '--'}
                value={chapter.slug || '(no slug)'}
              />
            </Grid>
            <Grid item xs={1}>
              <ViewItem
                label={index === 0 ? 'Created' : '--'}
                value={formatDateFromApi(chapter.createdAt)}
              />
            </Grid>
            <Grid item xs={1}>
              <ViewItem
                label={index === 0 ? 'Status' : '--'}
                value={getStatusText(chapter.status)}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default ChaptersInfo
