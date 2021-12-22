export enum CATEGORY_ACTIONS {
  GET_CATEGORY_MANAGEMENT_REQUEST = 'category-management/GET_CATEGORY_MANAGEMENT_REQUEST',
  GET_CATEGORY_MANAGEMENT_SUCCESS = 'category-management/GET_CATEGORY_MANAGEMENT_SUCCESS',
  GET_CATEGORY_MANAGEMENT_FAILURE = 'category-management/GET_CATEGORY_MANAGEMENT_FAILURE',
  UPDATE_CATEGORY_REQUEST = 'category-management/UPDATE_CATEGORY_REQUEST',
  UPDATE_CATEGORY_SUCCESS = 'category-management/UPDATE_CATEGORY_SUCCESS',
  UPDATE_CATEGORY_FAILURE = 'category-management/UPDATE_CATEGORY_FAILURE',
  DELETE_CATEGORY_REQUEST = 'category-management/DELETE_CATEGORY_REQUEST',
  DELETE_CATEGORY_SUCCESS = 'category-management/DELETE_CATEGORY_SUCCESS',
  DELETE_CATEGORY_FAILURE = 'category-management/DELETE_CATEGORY_FAILURE',
  GET_CATEGORY_REQUEST = 'category-management/GET_CATEGORY_REQUEST',
  GET_CATEGORY_SUCCESS = 'category-management/GET_CATEGORY_SUCCESS',
  GET_CATEGORY_FAILURE = 'category-management/GET_CATEGORY_FAILURE',
}

export interface CategoryOverviewData {
  _id: string
  title: string
  topic: string[]
  status: number
  discountPercent: number
  slug: string
  __v: number
}

export type CategoryManagementResponse = {
  categorys: CategoryOverviewData[]
  totalCategorys: number
}

export type topicDetailData = {
  _id: string
  title: string
  courseCategoryId: {
    _id: string
    title: string
    status: number
    discountPercent: number
    slug: string
    __v: number
  }
  status: number
  discountPercent: number
  slug: string
  __v: number
}

export type CategoryDetailData = {
  _id: string
  title: string
  slug: string
  Status: number
  discountPercent: number
  topic: string[]
  __v: number
}

export type CategoryDetailsResponse = {
  category: CategoryDetailData
}
