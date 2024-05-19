import { ComponentProps } from 'react'
import { PaymentSelectInputContainer } from './styles'

interface PaymentSelectInputProps extends ComponentProps<'input'> {
  isSelected: boolean
}

export function PaymentSelectInput({
  isSelected,
  children,
  ...props
}: PaymentSelectInputProps) {
  return (
    <PaymentSelectInputContainer data-selected={isSelected}>
      <input type="radio" {...props} />
      <div>{children}</div>
    </PaymentSelectInputContainer>
  )
}
