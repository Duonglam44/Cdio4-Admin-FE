import React, { useEffect, useState, useMemo } from 'react';
import type { NextPage } from 'next';
import { AlignType } from 'rc-table/lib/interface';
import { useRouter } from 'next/router';
import { COUNT_PER_PAGE } from '@config/constant';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { getCategoryManagementThunkAction } from '@redux/category/thunks';
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
  const categoryState = useSelector(
    (state: RootState) => state.categoryManagement
  );

  const totalPage = Math.ceil(categoryState.totalCategory / COUNT_PER_PAGE);
  const categoryData = categoryState.categorys.map(category => ({
    ...category,
    totalTopics: category.totalTopic,
  }));

  useEffect(() => {
    dispatch(getCategoryManagementThunkAction(query));
  }, [dispatch, query]);
  const handleRowClick = async (record: any, index) => {
    // setSelectedCourseId(record._id)
    await router.push(`/manage-category/${record._id}`);
  };

  return (
    <div className='page-course-management'>
      <Head>
        <title>Manage Category</title>
        <meta
          name='description'
          content='Manage category to GuruAcademy ADMIN'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWithSidebar>
        <PageWithHeader title='Category Management'>
          {categoryState.loading ? (
            <LoaderBall />
          ) : (
            <Table
              tableLayout='auto'
              scroll={{ y: 'calc(100vh - 310px)' }}
              rowKey={record => record._id}
              columns={columns}
              data={categoryData}
              onRow={(record, index) => ({
                onClick: () => handleRowClick(record, index),
                style: {
                  cursor: 'pointer',
                },
              })}
              footer={_ => (
                <PaginationLink totalPage={totalPage} count={COUNT_PER_PAGE} />
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
