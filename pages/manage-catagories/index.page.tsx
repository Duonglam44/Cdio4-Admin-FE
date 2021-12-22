import React, { useEffect, useState, useMemo } from 'react';
import type { NextPage } from 'next';
import { AlignType } from 'rc-table/lib/interface';
import { useRouter } from 'next/router';
import { COUNT_PER_PAGE } from '@config/constant';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { getCategoriesThunkAction } from '@redux/categories/thunks';
import Head from 'next/head';
import Table from 'rc-table';
import PageWithSidebar from '@components/layout/PageWithSidebar';
import PageWithHeader from '@components/header';
import { LoaderBall } from '@components/common';
import PaginationLink from '@components/PaginationLink';

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    width: 150,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: 200,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    align: 'center' as AlignType,
  },
  {
    title: 'Discount Percent',
    dataIndex: 'discount',
    key: 'discount',
    width: 100,
    align: 'center' as AlignType,
  },
  {
    title: 'Topic',
    dataIndex: 'topic',
    key: 'topic',
    width: 200,
    align: 'center' as AlignType,
  },
  {
    title: 'Total Topic',
    dataIndex: 'totalTopic',
    key: 'totalTopic',
    width: 200,
    align: 'center' as AlignType,
  },
];

const ManageCategory: NextPage<Props> = ({}) => {
  const query = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const router = useRouter();
  const { page, count } = router.query;
  if (!page) query.set('page', '1');
  if (!count) query.set('count', COUNT_PER_PAGE.toString());
  const dispatch = useDispatch();
  const categoriesState = useSelector(
    (state: RootState) => state.categoriesManagement
  );

//   const totalPage = Math.ceil(categoriesState.categories / COUNT_PER_PAGE);
  const categoriesData = categoriesState.categories.map(category => ({
    ...category,
  }));

  useEffect(() => {
    dispatch(getCategoriesThunkAction());
  }, [dispatch, query]);
  const handleRowClick = async (record: any, index) => {
    // setSelectedCourseId(record._id)
    await router.push(`/manage-categories/${record._id}`);
  };

  return (
    <div className='page-course-management'>
      <Head>
        <title>Manage Categories</title>
        <meta
          name='description'
          content='Manage categories to GuruAcademy ADMIN'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWithSidebar>
        <PageWithHeader title='Categories Management'>
          {categoriesState.loading ? (
            <LoaderBall />
          ) : (
            <Table
              tableLayout='auto'
              scroll={{ y: 'calc(100vh - 310px)' }}
              rowKey={record => record._id}
              columns={columns}
              data={categoriesData}
              onRow={(record, index) => ({
                onClick: () => handleRowClick(record, index),
                style: {
                  cursor: 'pointer',
                },
              })}
              footer={_ => (
                <PaginationLink totalPage={1} count={COUNT_PER_PAGE} />
              )}
            />
          )}
        </PageWithHeader>
      </PageWithSidebar>
    </div>
  );
};
type Props = {};
export default ManageCategory;
