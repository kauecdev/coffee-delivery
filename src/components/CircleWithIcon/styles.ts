import { ComponentProps } from 'react'
import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

interface CircleWithIconContainerProps extends ComponentProps<'div'> {
  $iconBackgroundColor: keyof typeof defaultTheme
}

export const CircleWithIconContainer = styled.span<CircleWithIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 999px;
  background-color: ${(props) => props.theme[props.$iconBackgroundColor]};
  color: ${(props) => props.theme.background};
`
