import { colors } from '@material-ui/core'
import { Callback } from '@utils/types'
import { E164Number } from 'libphonenumber-js/types'
import { Fragment } from 'react'
import PhoneInputWithCountrySelect, {
  Props as PhoneInputProps,
} from 'react-phone-number-input'

const PhoneInput: React.FC<Props> = ({
  label,
  labelClassName,
  onChange = () => {
    return
  },
  onBlur = (): void => {
    return
  },
  name,
  ...props
}) => {
  const handleChange = (value: E164Number | undefined) => {
    onChange(name, value?.toString())
  }

  const handleBlur = () => {
    onBlur(name, true)
  }

  return (
    <Fragment>
      <p
        style={{
          color: colors.grey[700],
          fontSize: '12.5px',
        }}
        className={labelClassName}
      >
        {label}
      </p>
      <PhoneInputWithCountrySelect
        {...props}
        className={`cmp-phone-input--content ${props.className}`}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Fragment>
  )
}

type BasePhoneInputProps = Pick<
  PhoneInputProps,
  Exclude<keyof PhoneInputProps, 'onChange' | 'onBlur'>
>

type Props = {
  label?: string
  labelClassName?: string
  name: string
  onChange?: Callback
  onBlur?: Callback
} & BasePhoneInputProps

export default PhoneInput
