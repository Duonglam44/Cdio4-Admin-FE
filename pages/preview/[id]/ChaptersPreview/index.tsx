// tslint:disable ter-func-call-spacing
import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { Button, Grid } from '@material-ui/core'
import { LessonOverviewData } from '@redux/chapters/types'
import { Callback, ChapterContentType } from '@utils/types'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import { ChapterOverviewData } from '@redux/courses/types'
import { AccordionMain } from '@components/common'
import LessonsPreview from '../LessonsPreview'

interface Props {
  chaptersData: ChapterOverviewData[] | undefined
  className?: string
  label?: string
  onSave?: Callback
}

const ChaptersPreview = ({
  chaptersData,
  className,
  label = 'Preview',
  onSave = () => {
    return
  },
}: Props) => {
  const [chapters, setChapters] = useState<ChapterOverviewData[]>(
    chaptersData || []
  )
  const [currentType, setCurrentType] = useState<ChapterContentType | null>(
    'lesson'
  )
  const firstLoadLessonUrl =
    chapters && chapters.length > 0 ? chapters?.[0]?.lessons?.[0]?.url : null
  const [currentLessonUrl, setCurrentLessonUrl] = useState<
    string | null | undefined
  >(firstLoadLessonUrl)

  useEffect(() => {
    setChapters(chaptersData ? chaptersData : [])
  }, [chaptersData])

  const contentPreview =
    currentType === 'lesson' && currentLessonUrl ? (
      <video width='100%' controls src={currentLessonUrl} />
    ) : (
      <p>No Data</p>
    )

  const handleMoveUp = (event: any, index: number) => {
    event.stopPropagation()
    if (index === 0) {
      return
    }

    const newChapters = [...chapters]
    const temp = newChapters[index - 1]
    newChapters[index - 1] = newChapters[index]
    newChapters[index] = temp

    setChapters(newChapters)
  }

  const handleMoveDown = (event: any, index: number) => {
    event.stopPropagation()
    if (index === chapters.length - 1) {
      return
    }

    const newChapters = [...chapters]
    const temp = newChapters[index + 1]
    newChapters[index + 1] = newChapters[index]
    newChapters[index] = temp

    setChapters(newChapters)
  }

  const handleLessonsPreviewChange = (
    type: ChapterContentType | null,
    url: string | undefined | null
  ) => {
    setCurrentType(type)
    setCurrentLessonUrl(url)
  }

  const handleOpenEditLessonModal = (lessonData: LessonOverviewData) => {
    // setSelectedLessonData(lessonData)
    // setShowEditLessonModal(true)
  }

  if (!chaptersData) {
    return (
      <Grid
        item
        xs={12}
        className={cn('page-course-detail__course-info--content', className)}
      >
        <p>No data</p>
      </Grid>
    )
  }

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        className={cn(className, 'page-course-detail__course-info--content')}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <h4 className='page-course-detail__title'>{label}</h4>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            className='page-chapter-detail__lesson-preview'
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7}>
                {contentPreview}
              </Grid>
              <Grid
                item
                xs={12}
                sm={5}
                className='page-chapter-detail__lesson-preview--sidebar'
              >
                <Grid container spacing={2} alignItems='center'>
                  <Grid item xs={10}>
                    <h4 className='ml-8'>Chapters</h4>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant='outlined'
                      className='has-text-primary '
                      onClick={onSave}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    {chapters?.map((chapter, index) => (
                      <AccordionMain
                        key={chapter._id}
                        labelNode={
                          <Grid
                            container
                            key={chapter._id}
                            className={cn(
                              'page-chapter-detail__lesson-preview--sidebar__lesson'
                            )}
                            direction='row'
                            alignItems='center'
                          >
                            <Grid item xs={9}>
                              <button className='my-8 button-text-no-color'>{`${
                                index + 1
                              }. ${chapter.title}`}</button>
                            </Grid>
                            <Grid item xs={1}>
                              {index !== 0 ? (
                                <AiOutlineArrowUp
                                  size={16}
                                  className='page-chapter-detail__lesson-preview--sidebar__icon'
                                  onClick={event => handleMoveUp(event, index)}
                                />
                              ) : null}
                            </Grid>
                            <Grid item xs={1}>
                              {index !== chapters.length - 1 ? (
                                <AiOutlineArrowDown
                                  size={16}
                                  className='page-chapter-detail__lesson-preview--sidebar__icon'
                                  onClick={event =>
                                    handleMoveDown(event, index)
                                  }
                                />
                              ) : null}
                            </Grid>
                            <Grid item xs={1}>
                              <BiEdit
                                size={20}
                                className='page-chapter-detail__lesson-preview--sidebar__icon'
                                // onClick={() => handleOpenEditLessonModal(chapter)}
                              />
                            </Grid>
                          </Grid>
                        }
                      >
                        <LessonsPreview
                          lessonsData={chapter.lessons}
                          onChange={handleLessonsPreviewChange}
                        />
                      </AccordionMain>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ChaptersPreview
