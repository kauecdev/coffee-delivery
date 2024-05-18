import styled from 'styled-components'

export const CatalogItemContainer = styled.article`
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 1.25rem 1.25rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    margin-top: -1.25rem;
  }

  > h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
  }

  > p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    text-align: center;
  }

  > footer {
    width: 100%;
    margin-top: 33px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.25rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 1rem 0;
`

export const Tag = styled.span`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
`

export const Currency = styled.span`
  font-size: 0.875rem;
`

export const Price = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
`

export const CatalogItemActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const AddToCartButton = styled.button`
  cursor: pointer;
  display: flex;
  border: 0;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
`
