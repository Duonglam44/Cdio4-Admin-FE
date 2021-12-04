import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/rootReducer'
import { Button, Grid, TextField } from '@material-ui/core'
import { MdClose } from 'react-icons/md'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'
import { formatDateForForm } from '@utils/helpers'
import PhoneInputWithCountrySelect from 'react-phone-number-input'
import PhoneInput from '@components/common/PhoneInput'

type AccountFormType = {
  id: string
  firstName: string
  lastName: string
  email: string
  street: string
  city: string
  country: string
  dateOfBirth: string | Date
  phoneNumber: string
  description: string
  imageUrl: string
  role: number
  facebook: string
  twitter: string
  instagram: string
  linkedin: string
  github: string
  status: number
  newPassword: string
  confirmPassword: string
}

const AccountFormSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  street: Yup.string().optional(),
  city: Yup.string().optional(),
  country: Yup.string().optional(),
  dateOfBirth: Yup.string().optional(),
  phoneNumber: Yup.string().optional(),
  description: Yup.string().optional(),
  imageUrl: Yup.string().optional(),
  role: Yup.number().required('Role is required'),
  facebook: Yup.string().optional(),
  twitter: Yup.string().optional(),
  instagram: Yup.string().optional(),
  linkedin: Yup.string().optional(),
  github: Yup.string().optional(),
  status: Yup.number().required('Status is required'),
  newPassword: Yup.string().when('id', {
    is: (id: string) => id === '',
    then: Yup.string().required('Password is required'),
    otherwise: Yup.string().optional(),
  }),
  confirmPassword: Yup.string().when('id', {
    is: (id: string) => id === '',
    then: Yup.string().required('Confirm password is required'),
    otherwise: Yup.string().optional(),
  }),
})

// tslint:disable-next-line: cyclomatic-complexity
const AccountForm: NextPage<Props> = ({ onClose, accountId }) => {
  const dispatch = useDispatch()
  const accountsState = useSelector(
    (state: RootState) => state.accountsManagement
  )

  const selectedAccount = accountsState.users.find(
    user => user._id === accountId
  )

  const initialValues: AccountFormType = {
    id: selectedAccount?._id || '',
    firstName: selectedAccount?.firstName || '',
    lastName: selectedAccount?.lastName || '',
    email: selectedAccount?.email || '',
    street: selectedAccount?.address?.street || '',
    city: selectedAccount?.address?.city || '',
    country: selectedAccount?.address?.country || '',
    dateOfBirth: formatDateForForm(selectedAccount?.dateOfBirth) || '',
    phoneNumber: selectedAccount?.phoneNumber || '',
    description: selectedAccount?.description || '',
    imageUrl: selectedAccount?.imageUrl || '',
    role: selectedAccount?.role?.id || 0,
    facebook: selectedAccount?.socialLinks?.facebook || '',
    twitter: selectedAccount?.socialLinks?.twitter || '',
    instagram: selectedAccount?.socialLinks?.instagram || '',
    linkedin: selectedAccount?.socialLinks?.linkedin || '',
    github: selectedAccount?.socialLinks?.github || '',
    status: selectedAccount?.status || 0,
    newPassword: '',
    confirmPassword: '',
  }

  const handleSubmit = values => {
    //  dispatch(loginThunkAction(values))
  }

  const formik = useFormik({
    initialValues,
    validationSchema: AccountFormSchema,
    onSubmit: handleSubmit,
  })

  console.log(formik.values)

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        className='modal-main__header mb-20'
      >
        <h4 className='text-is-20'>Account Detail</h4>
        <MdClose size={20} cursor='pointer' onClick={onClose} />
      </Grid>
      <Grid container className='modal-main__body' spacing={5}>
        <Grid item md={6} className='modal-main__body--item'>
          <TextField
            id='outlined-error-helper-text-1'
            label='Email'
            type='email'
            {...formik.getFieldProps('email')}
            error={!!formik.errors.email && !!formik.touched.email}
            helperText={
              !!formik.errors.email && !!formik.touched.email
                ? formik.errors.email
                : ''
            }
            fullWidth
          />
        </Grid>
        <Grid item md={6} className='modal-main__body--item'>
          <TextField
            id='outlined-error-helper-text-2'
            label='First Name'
            type='text'
            {...formik.getFieldProps('firstName')}
            error={!!formik.errors.firstName && !!formik.touched.firstName}
            helperText={
              !!formik.errors.firstName && !!formik.touched.firstName
                ? formik.errors.firstName
                : ''
            }
            fullWidth
          />
        </Grid>
        <Grid item md={6} className='modal-main__body--item'>
          <TextField
            id='outlined-error-helper-text-2'
            label='Last Name'
            type='text'
            {...formik.getFieldProps('lastName')}
            error={!!formik.errors.lastName && !!formik.touched.lastName}
            helperText={
              !!formik.errors.lastName && !!formik.touched.lastName
                ? formik.errors.lastName
                : ''
            }
            fullWidth
          />
        </Grid>
        <Grid item md={6} className='modal-main__body--item'>
          <TextField
            label='Day of Birth'
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
            {...formik.getFieldProps('dateOfBirth')}
            error={!!formik.errors.dateOfBirth && !!formik.touched.dateOfBirth}
            helperText={
              !!formik.errors.dateOfBirth && !!formik.touched.dateOfBirth
                ? formik.errors.dateOfBirth
                : ''
            }
            fullWidth
          />
        </Grid>
        <Grid item md={6} className='modal-main__body--item'>
          <PhoneInput
            label='Phone Number'
            placeholder='Phone Number'
            {...formik.getFieldProps('phoneNumber')}
            onChange={formik.setFieldValue}
            defaultCountry='VN'
          />
        </Grid>
        <Grid item md={6} className='modal-main__body--item'>
          <TextField
            id='outlined-error-helper-text-2'
            label='First Name'
            type='firstName'
            name='firstName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            error={!!formik.errors.firstName && !!formik.touched.firstName}
            helperText={
              !!formik.errors.firstName && !!formik.touched.firstName
                ? formik.errors.firstName
                : ''
            }
            fullWidth
          />
        </Grid>
        <Grid item md={6} className='modal-main__body--item'>
          <TextField
            id='outlined-error-helper-text-2'
            label='First Name'
            type='firstName'
            name='firstName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            error={!!formik.errors.firstName && !!formik.touched.firstName}
            helperText={
              !!formik.errors.firstName && !!formik.touched.firstName
                ? formik.errors.firstName
                : ''
            }
            fullWidth
          />
        </Grid>
        <Grid item md={6} className='modal-main__body--item'>
          <TextField
            id='outlined-error-helper-text-2'
            label='First Name'
            type='firstName'
            name='firstName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            error={!!formik.errors.firstName && !!formik.touched.firstName}
            helperText={
              !!formik.errors.firstName && !!formik.touched.firstName
                ? formik.errors.firstName
                : ''
            }
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        className='modal-main__footer mt-20'
      >
        <Button variant='outlined' className='has-text-danger'>
          Delete
        </Button>
        <Button variant='contained' color='primary'>
          Save
        </Button>
      </Grid>
    </form>
  )
}

type Props = {
  accountId: string
  onClose: () => void
}

export default AccountForm
