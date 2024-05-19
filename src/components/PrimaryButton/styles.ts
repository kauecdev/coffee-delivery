import styled from 'styled-components'

export const Button = styled.button`
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  font-size: 0.875rem;
  font-weight: bold;

  width: 100%;
  padding: 0.75rem 45px;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
