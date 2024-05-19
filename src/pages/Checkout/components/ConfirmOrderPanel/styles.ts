import styled from 'styled-components'

export const ConfirmOrderPanelContainer = styled.aside`
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`

export const PriceDetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1.5rem 0;

  span {
    display: flex;
    font-size: 0.875rem;
    justify-content: space-between;
  }

  span:last-of-type {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
