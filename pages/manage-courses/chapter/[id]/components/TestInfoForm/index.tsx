import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/rootReducer'
import { Button, Grid, TextField } from '@material-ui/core'
import { FormikErrors, FormikTouched, useFormik } from 'formik'
import { formatDateFromApi } from '@utils/helpers'
import Select from '@components/common/Select'
import {
  getUpdateTestPayload,
  statusOptions,
  TestFormSchema,
  TestInfoFormType,
} from './helpers'
import View from '@components/common/View'
import { LoaderBall } from '@components/common'
import { updateTestDetailsThunkAction } from '@redux/chapters/thunks'
import { useState } from 'react'
import ConfirmModal from '@components/ConfirmModal'
import { useRouter } from 'next/router'
import { TestDetailData, TestQuestionData } from '@redux/chapters/types'

// tslint:disable-next-line: cyclomatic-complexity
const TestInfoForm: NextPage<Props> = ({
  selectedTest,
  lessonId,
  redirectUrl,
  onClose,
}) => {
  const dispatch = useDispatch()
  const chapterState = useSelector(
    (state: RootState) => state.chapterManagement
  )
  const router = useRouter()
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] =
    useState<boolean>(false)

  const initialValues: TestInfoFormType = {
    id: selectedTest?._id || '',
    title: selectedTest?.title || '',
    description: selectedTest?.description || '',
    status: selectedTest?.status ?? 1,
    slug: selectedTest?.slug || '',
    questions: selectedTest?.questions || [],
  }

  const handleSubmit = (values: any) => {
    const payload = getUpdateTestPayload(values)
    dispatch(
      updateTestDetailsThunkAction(payload, () => {
        onClose()
      })
    )
  }

  const formik = useFormik({
    initialValues,
    validationSchema: TestFormSchema,
    onSubmit: handleSubmit,
  })

  const handleShowConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(true)
  }

  const handleCloseConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(false)
  }

  const handleDeleteLesson = () => {
    if (!selectedTest || !selectedTest?._id) return
    // dispatch(
    //   deleteChapterThunkAction(
    //     { lessonId, chapterId: selectedTest._id },
    //     async () => {
    //       if (redirectUrl) {
    //         await router.push(redirectUrl)
    //       }

    //       onClose()
    //     }
    //   )
    // )
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container className='modal-main__body' spacing={3}>
        <Grid item md={12} className='modal-main__body--item'>
          <Grid container spacing={3}>
            <Grid item md={6} className='modal-main__body--item'>
              <TextField
                label='Title *'
                type='text'
                {...formik.getFieldProps('title')}
                error={!!formik.errors.title && !!formik.touched.title}
                helperText={
                  !!formik.errors.title && !!formik.touched.title
                    ? formik.errors.title
                    : ''
                }
                fullWidth
              />
            </Grid>
            <Grid item md={6} className='modal-main__body--item'>
              <TextField
                label='Slug *'
                {...formik.getFieldProps('slug')}
                error={!!formik.errors.slug && !!formik.touched.slug}
                helperText={
                  !!formik.errors.slug && !!formik.touched.slug
                    ? formik.errors.slug
                    : ''
                }
                fullWidth
              />
            </Grid>
            <Grid item md={6} className='modal-main__body--item'>
              <TextField
                label='Test ID'
                value={formik.values.id}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item md={6} className='modal-main__body--item'>
              <Select
                options={statusOptions}
                label={'Status *'}
                placeholder={'Select'}
                errorMessage={formik.touched.status ? formik.errors.status : ''}
                {...formik.getFieldProps('status')}
                onChange={formik.setFieldValue}
                onBlur={formik.setFieldTouched}
              />
            </Grid>
            <Grid item xs={12} md={6} className='modal-main__body--item'>
              <TextField
                label='Created Date'
                type='text'
                value={formatDateFromApi(selectedTest?.createdAt) || '--'}
                disabled
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} className='modal-main__body--item'>
              <TextField
                label='Updated Date'
                type='text'
                value={formatDateFromApi(selectedTest?.updatedAt) || '--'}
                disabled
                fullWidth
              />
            </Grid>
            <Grid item md={12} className='modal-main__body--item'>
              <TextField
                label='Description'
                type='text'
                {...formik.getFieldProps('description')}
                error={
                  !!formik.errors.description && !!formik.touched.description
                }
                helperText={
                  !!formik.errors.description && !!formik.touched.description
                    ? formik.errors.description
                    : ''
                }
                fullWidth
                multiline
              />
            </Grid>
            <Grid item md={12} className='modal-main__body--item'>
              <h5>Questions</h5>
            </Grid>
            {formik.values.questions.map((question, index) => {
              // tslint:disable-next-line: cyclomatic-complexity
              const questionTouch = formik.touched.questions?.[
                index
              ] as FormikTouched<TestQuestionData>
              const questionErrors = formik.errors.questions?.[
                index
              ] as FormikErrors<TestQuestionData>

              return (
                <Grid item md={6} key={`question-${index}`}>
                  <Grid container spacing={3}>
                    <Grid item md={12}>
                      <TextField
                        label={`Question ${index + 1}`}
                        type='text'
                        {...formik.getFieldProps(
                          `questions[${index}].question`
                        )}
                        error={
                          !!questionErrors?.question &&
                          !!questionTouch?.question
                        }
                        helperText={
                          !!questionErrors?.question &&
                          !!questionTouch?.question
                            ? questionErrors?.question
                            : ''
                        }
                        fullWidth
                        multiline
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextField
                        label={'A'}
                        type='text'
                        {...formik.getFieldProps(`questions[${index}].a`)}
                        error={!!questionErrors?.a && !!questionTouch?.a}
                        helperText={
                          !!questionErrors?.a && !!questionTouch?.a
                            ? questionErrors?.a
                            : ''
                        }
                        fullWidth
                        multiline
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextField
                        label={'B'}
                        type='text'
                        {...formik.getFieldProps(`questions[${index}].b`)}
                        error={!!questionErrors?.b && !!questionTouch?.b}
                        helperText={
                          !!questionErrors?.b && !!questionTouch?.b
                            ? questionErrors?.b
                            : ''
                        }
                        fullWidth
                        multiline
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextField
                        label={'C'}
                        type='text'
                        {...formik.getFieldProps(`questions[${index}].c`)}
                        error={!!questionErrors?.c && !!questionTouch?.c}
                        helperText={
                          !!questionErrors?.c && !!questionTouch?.c
                            ? questionErrors?.c
                            : ''
                        }
                        fullWidth
                        multiline
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextField
                        label={'D'}
                        type='text'
                        {...formik.getFieldProps(`questions[${index}].d`)}
                        error={!!questionErrors?.d && !!questionTouch?.d}
                        helperText={
                          !!questionErrors?.d && !!questionTouch?.d
                            ? questionErrors?.d
                            : ''
                        }
                        fullWidth
                        multiline
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextField
                        label={'E'}
                        type='text'
                        {...formik.getFieldProps(`questions[${index}].e`)}
                        error={!!questionErrors?.e && !!questionTouch?.e}
                        helperText={
                          !!questionErrors?.e && !!questionTouch?.e
                            ? questionErrors?.e
                            : ''
                        }
                        fullWidth
                        multiline
                      />
                    </Grid>
                    <Grid item md={12}>
                      <TextField
                        label={'Answer'}
                        type='text'
                        {...formik.getFieldProps(`questions[${index}].answer`)}
                        error={
                          !!questionErrors?.answer && !!questionTouch?.answer
                        }
                        helperText={
                          !!questionErrors?.answer && !!questionTouch?.answer
                            ? questionErrors?.answer
                            : ''
                        }
                        fullWidth
                        multiline
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
      <ConfirmModal
        open={showConfirmDeleteModal}
        onClose={handleCloseConfirmDeleteModal}
        loading={chapterState.lessonLoading}
        onCancel={handleCloseConfirmDeleteModal}
        height={120}
        content={
          <p>
            {'Are you sure you want to delete the course '}
            <b>{`"${selectedTest?.title}"`}</b> {' ?'}
          </p>
        }
        onConfirm={handleDeleteLesson}
        position='justify-center'
        type='danger'
      />
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        className='modal-main__footer mt-20'
        style={{
          position: 'absolute',
          bottom: 20,
          width: '92%',
        }}
      >
        <View isRow>
          <Button
            variant='outlined'
            className='has-text-danger'
            style={{ marginRight: '15px' }}
            onClick={handleShowConfirmDeleteModal}
          >
            Delete
          </Button>
        </View>
        <Button variant='contained' type='submit' color='primary'>
          {chapterState.loading && !showConfirmDeleteModal ? (
            <LoaderBall
              color1='#ffffff'
              color2='#eeeeee'
              color3='#ffffff'
              color4='#eeeeee'
              color5='#ffffff'
              height={18}
            />
          ) : (
            'Save'
          )}
        </Button>
      </Grid>
    </form>
  )
}

type Props = {
  selectedTest: TestDetailData
  lessonId?: string | null | undefined
  redirectUrl?: string
  onClose: () => void
}

export default TestInfoForm
