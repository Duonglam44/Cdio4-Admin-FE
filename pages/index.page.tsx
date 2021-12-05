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
          <PageWithHeader>
            <h1>Welcome to GuruAcademy ADMIN</h1>
          </PageWithHeader>
        </PageWithSidebar>
      </main>
    </div>
  )
}

export default Home
