import type { NextPage } from 'next'
import Head from 'next/head'

import PageWithSidebar from '@components/layout/PageWithSidebar'
import PageWithHeader from '@components/header'

const Home: NextPage = () => {
  return (
    <div className='page__home'>
      <Head>
        <title>GuruAcademy ADMIN</title>
        <meta name='description' content='Welcome to GuruAcademy ADMIN' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <PageWithSidebar>
          <PageWithHeader showSearchBar>
            <h3 className='text-center my-36'>Welcome to GuruAcademy ADMIN</h3>
          </PageWithHeader>
        </PageWithSidebar>
      </main>
    </div>
  )
}

export default Home
