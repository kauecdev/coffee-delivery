import { ReactNode } from 'react'
import { CircleWithIconContainer } from './styles'
import { defaultTheme } from '../../styles/themes/default'

interface CircleWithIconProps {
  circleColor: keyof typeof defaultTheme
  children: ReactNode
}

export function CircleWithIcon({ circleColor, children }: CircleWithIconProps) {
  return (
    <CircleWithIconContainer $iconBackgroundColor={circleColor}>
      {children}
    </CircleWithIconContainer>
  )
}
