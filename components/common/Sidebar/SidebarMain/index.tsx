import React from 'react'
import Link from 'next/link'
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from '@components/react-pro-sidebar/dist'
import Image from 'next/image'
import {
  MdOutlineSpaceDashboard,
  MdOutlineManageAccounts,
  MdOutlineLibraryBooks,
  MdOutlineNotificationsNone,
  MdOutlineTopic,
  MdCategory,
} from 'react-icons/md'
import { BiMenuAltLeft, BiUserCircle } from 'react-icons/bi'

import LogoImg from '@public/images/logo.png'
import RoundIconButton from '@components/common/Button/RoundButton'

const SidebarMain: React.FC<Props> = ({
  isCollapsed = false,
  onClickCollapsed,
  ...props
}) => {
  return (
    <>
      <ProSidebar
        collapsed={isCollapsed}
        collapsedWidth={80}
        className='sidebar__main'
      >
        <SidebarHeader className='sidebar__main--header'>
          <div className='mt-20 mb-12 justify-space-between'>
            <Link href='/' passHref>
              <a>
                <Image
                  src={LogoImg}
                  alt='GuruAcademy'
                  width={150}
                  height={50}
                  objectFit='contain'
                />
              </a>
            </Link>

            {!isCollapsed && (
              <RoundIconButton
                className='btn__hover'
                width='40px'
                height='40px'
                margin='0 4px'
              >
                <BiMenuAltLeft size={20} onClick={onClickCollapsed} />
              </RoundIconButton>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent className='sidebar__main--content'>
          <Menu iconShape='circle' className='sidebar__main--content__menu'>
            {isCollapsed && (
              <MenuItem
                icon={<BiMenuAltLeft size={20} />}
                onClick={onClickCollapsed}
              />
            )}
            <MenuItem icon={<MdOutlineSpaceDashboard size={20} />}>
              <Link href='/'>Dashboard</Link>
            </MenuItem>
            <SubMenu
              title='Accounts'
              icon={<MdOutlineManageAccounts size={20} />}
            >
              <MenuItem>
                <Link href='/manage-accounts'>All</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/manage-accounts/admin'>Root & Admin</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/manage-accounts/teacher'>Teacher</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/manage-accounts/learner'>Learner</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu title='Courses' icon={<MdOutlineLibraryBooks size={20} />}>
              <MenuItem>
                <Link href='/manage-courses'>All</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/manage-courses/lessons'>Lessons</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/manage-courses/tests'>Tests</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/manage-courses/feedbacks'>Feedbacks</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/manage-courses/comments'>Comments</Link>
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<MdCategory size={20} />}>
              <Link href='/manage-category'>Categories</Link>
            </MenuItem>
            <MenuItem icon={<MdOutlineTopic size={20} />}>
              <Link href='/manage-topic'>Topics</Link>
            </MenuItem>
          </Menu>
          <Menu iconShape='circle' className='sidebar__main--content__profile'>
            <MenuItem icon={<MdOutlineNotificationsNone size={20} />}>
              <Link href='/notifications'>Notifications</Link>
            </MenuItem>
            <MenuItem icon={<BiUserCircle size={20} />}>
              <Link href='/profile'>Profile</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter className='sidebar__main--footer'>
          <div className='text-center'>
            <p>v1.0.0</p>
          </div>
        </SidebarFooter>
      </ProSidebar>
      {props.children}
    </>
  )
}

type Props = {
  isCollapsed: boolean
  onClickCollapsed: () => void
}

export default SidebarMain
