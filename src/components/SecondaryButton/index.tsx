import { ComponentProps } from 'react'
import { Button } from './styles'

interface SecondaryButtonProps extends ComponentProps<'button'> {}

export function SecondaryButton({ children, ...props }: SecondaryButtonProps) {
  return <Button {...props}>{children}</Button>
}
