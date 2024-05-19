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
}

export function TextInput({ gridArea, required, ...props }: TextInputProps) {
  return (
    <CustomInputContainer style={{ gridArea }} aria-required={required}>
      <input {...props} />
    </CustomInputContainer>
  )
}
