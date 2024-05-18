import { ComponentProps } from 'react'
import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HomeIntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 5.75rem 0;
`

export const TitleContainer = styled.div`
  h1 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    max-width: 36.75rem;
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 2.5rem;
  margin-top: 4.125rem;
`

interface BenefitItemContainerProps extends ComponentProps<'div'> {
  iconBackgroundColor: keyof typeof defaultTheme
}

export const BenefitItemContainer = styled.div<BenefitItemContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme[props.iconBackgroundColor]};
    color: ${(props) => props.theme.background};
  }

  p {
    font-size: 1rem;
    text-wrap: nowrap;
  }
`
