import styled from 'styled-components'

export const CatalogContainer = styled.section`
  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    padding: 1rem 0 54px;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem 2rem;
  }
`
