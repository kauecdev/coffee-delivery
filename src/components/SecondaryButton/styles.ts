import styled from 'styled-components'

export const Button = styled.button`
  text-transform: uppercase;
  background-color: ${(props) => props.theme['base-button']};
  font-size: 0.75rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
