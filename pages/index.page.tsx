import type { NextPage } from 'next'
import Head from 'next/head'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { AiFillAccountBook, AiFillAlipayCircle } from 'react-icons/ai'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GuruAcademy ADMIN</title>
        <meta name='description' content='Welcome to GuruAcademy ADMIN' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <ProSidebar>
          <Menu iconShape='circle'>
            <MenuItem icon={<AiFillAccountBook />}>Dashboard</MenuItem>
            <SubMenu title='Account Management' icon={<AiFillAlipayCircle />}>
              <MenuItem>Root & Admin</MenuItem>
              <MenuItem>Teacher</MenuItem>
              <MenuItem>Learner</MenuItem>
            </SubMenu>
            <SubMenu title='Course Management' icon={<AiFillAlipayCircle />}>
              <MenuItem>Root & Admin</MenuItem>
              <MenuItem>Teacher</MenuItem>
              <MenuItem>Learner</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
        ;
      </main>
    </div>
  )
}

export default Home
