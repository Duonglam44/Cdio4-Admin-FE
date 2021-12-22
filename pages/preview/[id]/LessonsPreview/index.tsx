/* eslint-disable react-hooks/exhaustive-deps */
// tslint:disable ter-func-call-spacing
import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { Button, Grid } from '@material-ui/core'
import {
  AttachmentDetailData,
  LessonOverviewData,
  TestDetailData,
} from '@redux/chapters/types'
import { Callback, ChapterContentType } from '@utils/types'
import { BiBook, BiEdit } from 'react-icons/bi'
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineFileText,
} from 'react-icons/ai'
import StatusDot from '@components/Status/StatusDot'

interface Props {
  lessonsData: LessonOverviewData[] | undefined
  className?: string
  showContentPreview?: boolean
  label?: string
  onSave?: Callback
  maxHeightSidebar?: number | string
  currentTypeFromChapters?: ChapterContentType
  currentLessonDataFromChapters?: LessonOverviewData
  currentTestDataFromChapters?: TestDetailData
  currentAttachmentDataFromChapters?: AttachmentDetailData
  onChange?: (
    type: ChapterContentType | null,
    value: TestDetailData | AttachmentDetailData | LessonOverviewData | null
  ) => void
}

const LessonsPreview = ({
  lessonsData,
  className,
  showContentPreview = false,
  label = 'Preview',
  maxHeightSidebar = 'auto',
  currentTypeFromChapters,
  currentLessonDataFromChapters,
  currentTestDataFromChapters,
  currentAttachmentDataFromChapters,
  onSave = () => {
    return
  },
  onChange,
}: Props) => {
  const [currentType, setCurrentType] = useState<ChapterContentType | null>(
    'lesson'
  )
  const [lessons, setLessons] = useState<LessonOverviewData[]>(
    lessonsData || []
  )
  const [currentLessonData, setCurrentLessonData] =
    useState<LessonOverviewData | null>(
      showContentPreview ? lessonsData?.[0] || null : null
    )
  const [currentTestData, setCurrentTestData] = useState<TestDetailData | null>(
    null
  )
  const [currentAttachmentData, setCurrentAttachmentData] =
    useState<AttachmentDetailData | null>(null)
  const [showEditLessonModal, setShowEditLessonModal] = useState<boolean>(false)
  const [selectedLessonDate, setSelectedLessonData] =
    useState<LessonOverviewData | null>(null)

  useEffect(() => {
    setLessons(lessonsData ? lessonsData : [])
  }, [lessonsData])

  useEffect(() => {
    if (!currentTypeFromChapters) return
    setCurrentType(currentTypeFromChapters)
  }, [currentTypeFromChapters])

  useEffect(() => {
    if (!currentLessonDataFromChapters) return
    setCurrentLessonData(currentLessonDataFromChapters)
    setCurrentTestData(null)
    setCurrentAttachmentData(null)
  }, [currentLessonDataFromChapters])

  useEffect(() => {
    if (!currentTestDataFromChapters) return
    setCurrentTestData(currentTestDataFromChapters)
    setCurrentAttachmentData(null)
    setCurrentLessonData(null)
  }, [currentTestDataFromChapters])

  useEffect(() => {
    if (!currentAttachmentDataFromChapters) return
    setCurrentAttachmentData(currentAttachmentDataFromChapters)
    setCurrentLessonData(null)
    setCurrentTestData(null)
  }, [currentAttachmentDataFromChapters])

  if (!lessonsData) {
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

  const handleLessonClick = (lessonData: LessonOverviewData | null) => {
    if (!lessonData) {
      setCurrentLessonData(null)
      setCurrentType(null)
    }

    setCurrentLessonData(lessonData)
    setCurrentType('lesson')

    if (!onChange) return
    onChange('lesson', lessonData)
  }

  const handleMoveUp = (index: number) => {
    if (index === 0) {
      return
    }

    const newLessons = [...lessons]
    const temp = newLessons[index - 1]
    newLessons[index - 1] = newLessons[index]
    newLessons[index] = temp

    setLessons(newLessons)
  }

  const handleMoveDown = (index: number) => {
    if (index === lessons.length - 1) {
      return
    }

    const newLessons = [...lessons]
    const temp = newLessons[index + 1]
    newLessons[index + 1] = newLessons[index]
    newLessons[index] = temp

    setLessons(newLessons)
  }

  const handleOpenEditLessonModal = (lessonData: LessonOverviewData) => {
    setSelectedLessonData(lessonData)
    setShowEditLessonModal(true)
  }

  const handleTestClick = (testData: TestDetailData) => {
    setCurrentTestData(testData)
    setCurrentType('test')

    if (!onChange) return
    onChange('test', testData)
  }

  const handleAttachmentClick = (attachmentData: AttachmentDetailData) => {
    setCurrentAttachmentData(attachmentData)
    setCurrentType('attachment')

    if (!onChange) return
    onChange('attachment', attachmentData)
  }

  const contentPreview =
    currentType === 'lesson' && currentLessonData ? (
      <video width='100%' controls src={currentLessonData?.url} />
    ) : (
      <p>No Data</p>
    )

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        className={cn(className, 'page-course-detail__course-info--content')}
      >
        <Grid container spacing={3}>
          {showContentPreview && (
            <Grid item xs={12} sm={12}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12}>
                  <h4 className='page-course-detail__title'>{label}</h4>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sm={12}
            className='page-chapter-detail__lesson-preview'
          >
            <Grid container spacing={3}>
              {showContentPreview && (
                <Grid item xs={12} sm={7}>
                  {contentPreview}
                </Grid>
              )}
              <Grid
                item
                xs={12}
                sm={showContentPreview ? 5 : 12}
                className='page-chapter-detail__lesson-preview--sidebar'
              >
                <Grid container spacing={2} alignItems='center'>
                  <Grid item xs={10}>
                    <h4 className='ml-8'>Lessons Content</h4>
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
                  <Grid
                    item
                    xs={12}
                    style={{ maxHeight: maxHeightSidebar, overflow: 'auto' }}
                  >
                    {lessons?.map((lesson, index) => (
                      <Grid
                        container
                        key={lesson._id}
                        className={cn(
                          'page-chapter-detail__lesson-preview--sidebar__lesson',
                          lesson._id === currentLessonData?._id
                            ? 'page-chapter-detail__lesson-preview--sidebar__lesson-active'
                            : ''
                        )}
                        direction='row'
                        alignItems='center'
                      >
                        <Grid item xs={9}>
                          <StatusDot status={lesson?.status} />
                          <button
                            className='my-8 button-text-no-color'
                            onClick={() => handleLessonClick(lesson)}
                          >{`${index + 1}. ${lesson.title}`}</button>
                        </Grid>
                        <Grid item xs={1}>
                          {index !== 0 ? (
                            <AiOutlineArrowUp
                              size={16}
                              className='page-chapter-detail__lesson-preview--sidebar__icon'
                              onClick={() => handleMoveUp(index)}
                            />
                          ) : null}
                        </Grid>
                        <Grid item xs={1}>
                          {index !== lessons.length - 1 ? (
                            <AiOutlineArrowDown
                              size={16}
                              className='page-chapter-detail__lesson-preview--sidebar__icon'
                              onClick={() => handleMoveDown(index)}
                            />
                          ) : null}
                        </Grid>
                        <Grid item xs={1}>
                          <BiEdit
                            size={20}
                            className='page-chapter-detail__lesson-preview--sidebar__icon'
                            onClick={() => handleOpenEditLessonModal(lesson)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          {lesson.tests &&
                            lesson.tests.length > 0 &&
                            lesson.tests.map((test, idx) => (
                              <Grid
                                container
                                direction='row'
                                alignItems='center'
                                justifyContent='space-between'
                                key={test._id}
                                className={cn(
                                  'page-chapter-detail__lesson-preview--sidebar__lesson',
                                  'page-chapter-detail__lesson-preview--sidebar__lesson-item',
                                  test._id === currentTestData?._id
                                    ? 'page-chapter-detail__lesson-preview--sidebar__lesson-item-active'
                                    : ''
                                )}
                                onClick={() => handleTestClick(test)}
                                style={{
                                  cursor: 'pointer',
                                }}
                              >
                                <Grid item xs={1}>
                                  <BiBook
                                    size={18}
                                    style={{
                                      cursor: 'pointer',
                                    }}
                                    className='mt-8'
                                  />
                                </Grid>
                                <Grid item xs={10}>
                                  <p className='button-text-no-color'>
                                    {test.title}
                                  </p>
                                </Grid>
                                <Grid item xs={1}>
                                  {/* <BiEdit
                                    size={20}
                                    className='page-chapter-detail__lesson-preview--sidebar__icon'
                                    onClick={() =>
                                      handleOpenEditLessonModal(lesson)
                                    }
                                  /> */}
                                  <StatusDot status={test?.status} />
                                </Grid>
                              </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={12}>
                          {lesson.attachments &&
                            lesson.attachments.length > 0 &&
                            lesson.attachments.map((attachment, idx) => (
                              <Grid
                                container
                                direction='row'
                                alignItems='center'
                                justifyContent='space-between'
                                key={attachment._id}
                                className={cn(
                                  'page-chapter-detail__lesson-preview--sidebar__lesson',
                                  'page-chapter-detail__lesson-preview--sidebar__lesson-item',
                                  attachment._id === currentAttachmentData?._id
                                    ? 'page-chapter-detail__lesson-preview--sidebar__lesson-item-active'
                                    : ''
                                )}
                                onClick={() =>
                                  handleAttachmentClick(attachment)
                                }
                                style={{
                                  cursor: 'pointer',
                                }}
                              >
                                <Grid item xs={1}>
                                  <AiOutlineFileText
                                    size={18}
                                    style={{
                                      cursor: 'pointer',
                                    }}
                                    className='mt-8'
                                  />
                                </Grid>
                                <Grid item xs={10}>
                                  <p className='button-text-no-color'>
                                    {attachment.title}
                                  </p>
                                </Grid>
                                <Grid item xs={1}>
                                  {/* <BiEdit
                                    size={20}
                                    className='page-chapter-detail__lesson-preview--sidebar__icon'
                                    onClick={() =>
                                      handleOpenEditLessonModal(lesson)
                                    }
                                  /> */}
                                  <StatusDot status={attachment?.status} />
                                </Grid>
                              </Grid>
                            ))}
                        </Grid>
                      </Grid>
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

export default LessonsPreview
