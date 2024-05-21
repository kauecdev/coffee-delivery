import { ComponentProps } from 'react'
import { PaymentSelectInputContainer } from './styles'

interface PaymentSelectInputProps extends ComponentProps<'input'> {
  isSelected: boolean
  mRef?: React.Ref<HTMLInputElement> | null
}

export function PaymentSelectInput({
  isSelected,
  children,
  mRef,
  ...props
}: PaymentSelectInputProps) {
  return (
    <PaymentSelectInputContainer data-selected={isSelected}>
      <input type="radio" ref={mRef} {...props} />
      <div>{children}</div>
    </PaymentSelectInputContainer>
  )
}
