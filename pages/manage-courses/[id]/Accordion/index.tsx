import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Callback } from '@utils/types'

interface Props {
  children: React.ReactNode
  expanded: boolean
  onAccordionChange:
    | ((event: React.ChangeEvent<{}>, expanded: boolean) => void)
    | undefined
  onEdit?: Callback
  label?: string
}

const AccordionSection = ({
  children,
  expanded,
  onAccordionChange,
  onEdit,
  label = 'Title',
}: Props) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onAccordionChange}
      className='page-course-detail__section'
      style={{
        padding: '5px 25px',
        boxShadow: 'none',
        width: '100%',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1bh-content'
        id='panel1bh-header-1'
        style={{ padding: '0' }}
      >
        <Grid item xs={11}>
          <p className='page-course-detail__title'>{label}</p>
        </Grid>
        {onEdit && (
          <Grid item xs={1}>
            <Button
              variant='outlined'
              className='has-text-primary'
              onClick={onEdit}
            >
              Edit
            </Button>
          </Grid>
        )}
      </AccordionSummary>
      <AccordionDetails style={{ padding: '0 0 20px' }}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionSection
