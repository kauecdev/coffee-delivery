import styled from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'
import { ComponentProps } from 'react'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const FormSection = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
`

interface FormHeaderProps extends ComponentProps<'header'> {
  $iconColor: keyof typeof defaultTheme
}

export const FormHeader = styled.header<FormHeaderProps>`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme[props.$iconColor]};
  }

  div p:first-of-type {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div p:last-of-type {
    font-size: 0.875rem;
  }
`

export const FormBody = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  gap: 1rem 0.75rem;
`

export const PaymentSelectContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  > * {
    flex: 1;
  }
`
