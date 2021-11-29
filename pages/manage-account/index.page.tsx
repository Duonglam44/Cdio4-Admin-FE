import type { NextPage } from 'next'
import Head from 'next/head'
import Table from 'rc-table'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 100,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
  },
  {
    title: 'Operations',
    dataIndex: '',
    key: 'operations',
    render: () => <a href='#'>Delete</a>,
  },
]

const data = [
  { name: 'Jack', age: 28, address: 'some where', key: '1' },
  { name: 'Rose', age: 36, address: 'some where', key: '2' },
]

const ManageAccount: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Manage Account</title>
        <meta
          name='description'
          content='Manage account to GuruAcademy ADMIN'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Table columns={columns} data={data} />
      </main>
    </div>
  )
}

export default ManageAccount
