import { ComponentProps } from 'react'
import { Button } from './styles'

interface PrimaryButtonProps extends ComponentProps<'button'> {}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
  return <Button {...props}>{children}</Button>
}
