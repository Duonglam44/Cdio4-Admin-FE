export enum CHAPTER_ACTIONS {
  UPDATE_CHAPTER_REQUEST = 'chapter-management/UPDATE_CHAPTER_REQUEST',
  UPDATE_CHAPTER_SUCCESS = 'chapter-management/UPDATE_CHAPTER_SUCCESS',
  UPDATE_CHAPTER_FAILURE = 'chapter-management/UPDATE_CHAPTER_FAILURE',
  DELETE_CHAPTER_REQUEST = 'chapter-management/DELETE_CHAPTER_REQUEST',
  DELETE_CHAPTER_SUCCESS = 'chapter-management/DELETE_CHAPTER_SUCCESS',
  DELETE_CHAPTER_FAILURE = 'chapter-management/DELETE_CHAPTER_FAILURE',
  GET_CHAPTER_REQUEST = 'chapter-management/GET_CHAPTER_REQUEST',
  GET_CHAPTER_SUCCESS = 'chapter-management/GET_CHAPTER_SUCCESS',
  GET_CHAPTER_FAILURE = 'chapter-management/GET_CHAPTER_FAILURE',
}

export type ChapterDetailsData = {
  _id: string
  courseId?: {
    _id: string
    title: string
    description: string
    author: {
      _id: string
      email: string
      firstName: string
      lastName: string
    }
  }
  status: number
  lessons: LessonOverviewData[]
  number?: number
  title: string
  slug: string
  description?: string
  createdAt: string
  updatedAt: string
  __v: 0
}

export type LessonOverviewData = {
  _id: string
  title: string
  url?: string
  status: number
  attachments: AttachmentDetailData[]
  tests: TestDetailData[]
  comments: CommentDetailData[]
  createdAt: string
  updatedAt: string
  slug: string
  chapter?: string
  __v: number
}

export type AttachmentDetailData = {
  _id: string
  number?: number
  title: string
  description?: string
  url: string
  status: number
  lesson?: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type TestDetailData = {
  number?: number
  title: string
  description?: string
  slug: string
  questions: [
    {
      question: string
      a: string
      b: string
      c?: string
      d?: string
      e?: string
      answer: string
    }
  ]
  status: number
  lesson?: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type CommentDetailData = {
  content: string
  user?: string
  lesson?: string
  status: number
  dateTime: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type UpdateChapterPayload = {
  id: string
  title?: string
  description?: string
  slug?: string
  status?: number
}
