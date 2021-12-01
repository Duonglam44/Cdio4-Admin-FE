import React, { useState, useEffect, forwardRef } from 'react'
import Grid from '@mui/material/Grid'
import {
  Card,
  ClickAwayListener,
  InputAdornment,
  TextField,
} from '@material-ui/core'
import { IoMdSearch } from 'react-icons/io'

import AvatarImg from '@public/images/icon.png'
import { Avatar } from '@components/common'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/rootReducer'
import { getFullName } from '@utils/auth'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import { makeStyles } from '@material-ui/core/styles'

// import Avatar from '@mui/material/Avatar'

const LINES_TO_SHOW = 3

const useStyles = makeStyles({
  container: {
    // maxWidth: 600,
  },
  multiLineEllipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': LINES_TO_SHOW,
    '-webkit-box-orient': 'vertical',
  },
})

const PageWithHeader: React.FC<Props> = ({
  children,
  title = 'Dashboard',
  pagePosition = 'on-top-page',
  ...props
}) => {
  const [search, setSearch] = useState<string>('')
  const [hasNotificationAlert, setHasNotificationAlert] =
    useState<boolean>(false)
  const [showNotificationModal, setShowNotificationModal] =
    useState<boolean>(false)
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false)

  const classes = useStyles()

  const userInfo = useSelector((state: RootState) => state.userInfo)

  const fullName = getFullName() || `${userInfo.firstName} ${userInfo.lastName}`

  const notifications = userInfo.notifications
  const hasUnreadNotification = notifications.some(
    notification => !notification.isSeen
  )

  useEffect(() => {
    hasUnreadNotification
      ? setHasNotificationAlert(true)
      : setHasNotificationAlert(false)
  }, [hasUnreadNotification])

  const handleNotificationClick = () => {
    if (hasNotificationAlert) setHasNotificationAlert(false)
    setShowNotificationModal(prev => !prev)
  }

  const handleOpenNotificationModal = () => {
    setShowNotificationModal(true)
  }

  const handleCloseNotificationModal = () => {
    setShowNotificationModal(false)
  }

  const handleOpenProfileModal = () => {
    setShowProfileModal(true)
  }

  const handleCloseProfileModal = () => {
    setShowProfileModal(false)
  }

  return (
    <Grid container className={pagePosition}>
      <Grid className='section__card' item md={11} sm={10} xs={11}>
        <Grid
          container
          alignItems='center'
          justifyContent='space-between'
          marginBottom={2}
        >
          <Grid item md={7}>
            <Grid container alignItems='center'>
              <Grid item md={3} ml='10px'>
                <h3>{title}</h3>
              </Grid>
              <Grid item md={8}>
                <div className='input-card page__header--search'>
                  <TextField
                    id='input-with-icon-textfield'
                    placeholder='Search'
                    style={{ width: '100%' }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <IoMdSearch />
                        </InputAdornment>
                      ),
                    }}
                    variant='standard'
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Grid container alignItems='center' justifyContent='flex-end'>
              <Grid
                item
                md={3}
                display='flex'
                justifyContent='flex-end'
                position='relative'
              >
                <ClickAwayListener onClickAway={handleCloseNotificationModal}>
                  <Box>
                    <div
                      className={
                        hasNotificationAlert
                          ? 'page__header--notification-active'
                          : 'page__header--notification'
                      }
                      onClick={handleNotificationClick}
                    >
                      <MdOutlineNotificationsNone size={30} />
                    </div>
                    {showNotificationModal ? (
                      <Box right={0} position='absolute'>
                        <Card
                          variant='elevation'
                          className='page__header--notification-modal'
                        >
                          <div className='page__header--notification-modal--header'>
                            <h4>Notifications</h4>
                          </div>
                          <List className='page__header--notification-modal--body'>
                            {notifications.map(notification => (
                              <div key={notification._id}>
                                <ListItem alignItems='flex-start'>
                                  <ListItemAvatar>
                                    <Avatar
                                      src={AvatarImg}
                                      alt='avatar user'
                                      className='page__header--profile-avatar'
                                      size={30}
                                    />
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={notification.title}
                                    className='page__header--notification-modal--content'
                                    secondary={
                                      <React.Fragment>
                                        <Typography
                                          sx={{ display: 'inline' }}
                                          component='span'
                                          variant='subtitle2'
                                          color='text.primary'
                                        >
                                          {`${notification.userId.firstName} ${notification.userId.lastName}`}
                                        </Typography>
                                        <Typography
                                          fontSize={14}
                                          className={classes.multiLineEllipsis}
                                        >{`${notification.content}`}</Typography>
                                      </React.Fragment>
                                    }
                                  />
                                </ListItem>
                                <Divider variant='inset' component='li' />
                              </div>
                            ))}
                          </List>
                        </Card>
                      </Box>
                    ) : null}
                  </Box>
                </ClickAwayListener>
                {/* <ModalMain
                  open={showNotificationModal}
                  onClose={handleCloseNotificationModal}
                  width={'150px'}
                  height={'300px'}
                  className='page__header--notification-modal'
                  position='flex-start-center'
                >
                  <div className='modal-main'>
                    <div className='modal-main__header'>
                      <h3>Modal Header</h3>
                    </div>
                    <div className='modal-main__body'>
                      <div className='modal-main__body--item'>
                        <p>Item</p>
                      </div>
                    </div>
                    <div className='modal-main__footer'>
                      <p>Modal Footer</p>
                    </div>
                  </div>
                </ModalMain> */}
              </Grid>
              <Grid item md={7} className='page__header--profile'>
                <Avatar
                  src={AvatarImg}
                  alt='avatar user'
                  className='page__header--profile-avatar'
                  onClick={handleOpenProfileModal}
                />
                <h4
                  className='page__header--profile-username'
                  onClick={handleOpenProfileModal}
                >
                  {fullName}
                </h4>
                <ClickAwayListener onClickAway={handleCloseProfileModal}>
                  <Box>
                    {showProfileModal ? (
                      <Box right={0} position='absolute'>
                        <Card
                          variant='elevation'
                          className='page__header--profile-modal'
                        >
                          <div className='page__header--profile-modal--header'>
                            <h4>profiles</h4>
                          </div>
                        </Card>
                      </Box>
                    ) : null}
                  </Box>
                </ClickAwayListener>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {children}
      </Grid>
    </Grid>
  )
}

type Props = {
  children?: React.ReactNode
  title?: string
  pagePosition?: 'on-top-page' | 'on-bottom-page' | 'center-page'
}

export default PageWithHeader
