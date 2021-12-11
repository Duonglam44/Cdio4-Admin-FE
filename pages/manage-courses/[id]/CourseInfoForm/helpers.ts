import { CourseStatus } from '@config/constant'
import {
  CreateAccountPayload,
  UpdateAccountPayload,
} from '@redux/accounts/types'
import * as Yup from 'yup'

export const CourseFormSchema = Yup.object().shape({
  id: Yup.string().optional(),
  title: Yup.string().required('Title is required'),
  slug: Yup.string().required('Slug is required'),
  categoryId: Yup.string().required('Category ID is required'),
  topicId: Yup.string().required('Topic ID is required'),
  tags: Yup.mixed().optional(),
  description: Yup.string().optional(),
  imageUrl: Yup.mixed().optional(),
  status: Yup.mixed().required('Status is required'),
  price: Yup.number().required('Price is required').min(0),
  discount: Yup.number().required('Discount is required').min(0).default(0),
})

export type CourseInfoFormType = {
  id: string
  title: string
  slug: string
  categoryId: string
  topicId: string
  tags: string
  description: string
  imageUrl: string
  price: number
  discount: number
  status: number
}

// export const getUpdateCoursePayload = (
//   formValues: CourseInfoFormType
// ): UpdateAccountPayload => {
//   return {
//     userId: formValues.id,
//     firstName: formValues.firstName,
//     lastName: formValues.lastName,
//     dateOfBirth: formValues.dateOfBirth,
//     address: {
//       street: formValues.street,
//       city: formValues.city,
//       country: formValues.country,
//     },
//     role: formValues.roleId,
//     description: formValues.description,
//     imageUrl: formValues.imageUrl,
//     socialLinks: {
//       facebook: formValues.facebook,
//       twitter: formValues.twitter,
//       instagram: formValues.instagram,
//       linkedIn: formValues.linkedIn,
//       github: formValues.github,
//     },
//     status: formValues.status,
//     phoneNumber: formValues.phoneNumber,
//   }
// }

// export const getCreateAccountPayload = (
//   formValues: AccountFormType
// ): CreateAccountPayload => {
//   return {
//     email: formValues.email,
//     newPassword: formValues.newPassword,
//     firstName: formValues.firstName,
//     lastName: formValues.lastName,
//     dateOfBirth: formValues.dateOfBirth,
//     address: {
//       street: formValues.street,
//       city: formValues.city,
//       country: formValues.country,
//     },
//     role: formValues.roleId,
//     description: formValues.description,
//     imageUrl: formValues.imageUrl,
//     socialLinks: {
//       facebook: formValues.facebook,
//       twitter: formValues.twitter,
//       instagram: formValues.instagram,
//       linkedIn: formValues.linkedIn,
//       github: formValues.github,
//     },
//     status: formValues.status,
//     phoneNumber: formValues.phoneNumber,
//   }
// }

// export const roleOptions = [
//   { label: 'Admin', value: UserRole.ADMIN.id },
//   { label: 'Teacher', value: UserRole.TEACHER.id },
//   { label: 'Learner', value: UserRole.LEARNER.id },
// ]

export const statusOptions = [
  { label: 'Inactive', value: CourseStatus.INACTIVE },
  { label: 'Active', value: CourseStatus.ACTIVE },
  { label: 'Pending', value: CourseStatus.PENDING },
  { label: 'Draft', value: CourseStatus.DRAFT },
]
