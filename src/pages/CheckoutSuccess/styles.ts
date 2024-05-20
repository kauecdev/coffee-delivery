import styled from 'styled-components'

export const CheckoutSuccessContainer = styled.main`
  padding: 5rem 0;
  display: flex;
  align-items: flex-end;
  gap: 6.375rem;

  > div {
    width: 50%;
  }

  > div h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
  }

  > div > p {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    width: 50%;
  }
`

export const DeliveryDetailsContainer = styled.section`
  background:
    linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow} 0%,
        ${(props) => props.theme.purple} 100%
      )
      border-box;
  border: 1px solid transparent;

  padding: 2.5rem;
  margin: 2.5rem 0 0;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-size: 1rem;
  }
`
