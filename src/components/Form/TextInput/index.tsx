import { ComponentProps } from 'react'
import { CustomInputContainer } from './styles'

type gridAreaType =
  | 'cep'
  | 'street'
  | 'number'
  | 'complement'
  | 'neighborhood'
  | 'city'
  | 'state'

interface TextInputProps extends ComponentProps<'input'> {
  gridArea: gridAreaType
  mRef?: React.Ref<HTMLInputElement> | null
  isInvalid?: boolean
}

export function TextInput({
  gridArea,
  isInvalid = false,
  required,
  mRef,
  ...props
}: TextInputProps) {
  return (
    <CustomInputContainer
      data-invalid={isInvalid}
      style={{ gridArea }}
      aria-required={required}
    >
      <input ref={mRef} {...props} />
    </CustomInputContainer>
  )
}
