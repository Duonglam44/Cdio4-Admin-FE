import ViewItem from '@components/common/ViewItem'
import { Divider } from '@material-ui/core'
import { Grid } from '@mui/material'
import { TestDetailData } from '@redux/chapters/types'
import React, { Fragment } from 'react'

interface Props {
  testData: TestDetailData | null
}

const TestPreview = ({ testData }: Props) => {
  if (!testData) {
    return <p>No Data</p>
  }

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={12} md={6}>
          <ViewItem label={'Test title'} value={testData?.title} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ViewItem label={'Description'} value={testData?.description} />
        </Grid>
        <Grid item xs={12} md={12} py={3}>
          <Divider variant='middle' />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {testData?.questions &&
              testData?.questions.length > 0 &&
              testData.questions.map((question, index) => (
                <Grid key={index} item xs={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <ViewItem
                        key={index}
                        label={`Question ${index + 1}`}
                        value={question.question}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <p>{`A. ${question.a}`}</p>
                    </Grid>
                    <Grid item xs={12}>
                      <p>{`B. ${question.b}`}</p>
                    </Grid>
                    {question.c && (
                      <Grid item xs={12}>
                        <p>{`C. ${question.c}`}</p>
                      </Grid>
                    )}
                    {question.d && (
                      <Grid item xs={12}>
                        <p>{`D. ${question.d}`}</p>
                      </Grid>
                    )}
                    {question.e && (
                      <Grid item xs={12}>
                        <p>{`E. ${question.e}`}</p>
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <b>{`Answer: ${question.answer.toUpperCase()}`}</b>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default TestPreview
