import Grid from '@mui/material/Grid'
import { InputAdornment, TextField } from '@material-ui/core'
import { IoMdSearch } from 'react-icons/io'

import AvatarImg from '@public/images/icon.png'
import { Avatar } from '@components/common'
import { MdOutlineNotificationsNone } from 'react-icons/md'

const PageWithHeader: React.FC<Props> = ({
  children,
  title = 'Dashboard',
  pagePosition = 'on-top-page',
  ...props
}) => {
  return (
    <Grid container className={pagePosition}>
      <Grid className='section__card ' item md={11} sm={10} xs={11}>
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
                <div className='input-card page__home--search'>
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
          <Grid item md={5}>
            <Grid container alignItems='center' justifyContent='flex-end'>
              <Grid item md={3} display='flex' justifyContent='flex-end'>
                <div className='page__home--notification-active'>
                  <MdOutlineNotificationsNone size={30} />
                </div>
              </Grid>
              <Grid item md={6} className='page__home--profile'>
                <Avatar
                  src={AvatarImg}
                  alt='avatar user'
                  className='page__home--profile-avatar'
                />
                <h4 className='page__home--profile-username'>Admin Guru</h4>
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
