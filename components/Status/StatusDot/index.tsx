import { AllStatus, StatusColor } from '@config/constant'
import React, { Fragment } from 'react'

interface Props {
  status?: number
}

const StatusDot = ({ status }: Props) => {
  let color
  switch (status) {
    case AllStatus.ACTIVE:
      color = StatusColor.ACTIVE
      break
    case AllStatus.INACTIVE:
      color = StatusColor.INACTIVE
      break
    case AllStatus.PENDING:
      color = StatusColor.PENDING
      break
    case AllStatus.BANNED:
      color = StatusColor.BANNED
      break
    case AllStatus.DRAFT:
      color = StatusColor.DRAFT
      break

    default:
      color = '#9c9c9c'
      break
  }
  const styles = { backgroundColor: color }

  return color ? (
    <Fragment>
      <span className='cmp-status-dot' style={styles} />
    </Fragment>
  ) : null
}

export default StatusDot
