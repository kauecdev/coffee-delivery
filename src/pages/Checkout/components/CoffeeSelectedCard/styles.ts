import styled from 'styled-components'

export const CoffeeSelectedCardContainer = styled.article`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: 100%;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  header aside {
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
  }

  footer {
    display: flex;
    gap: 0.5rem;
  }
`
