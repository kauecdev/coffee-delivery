import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 2.5rem 0;
  display: flex;
  gap: 2rem;

  > div {
    width: 50%;
  }

  h3 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 15px;
  }
`
