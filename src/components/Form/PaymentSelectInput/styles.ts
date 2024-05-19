import styled from 'styled-components'

export const PaymentSelectInputContainer = styled.label`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  align-content: center;
  justify-items: center;
  padding: 1rem;
  line-height: 1rem;

  background-color: ${(props) => props.theme['base-button']};

  input {
    all: unset;
  }

  > div {
    display: flex;
    align-content: center;
    justify-items: center;
    gap: 0.75rem;
    text-transform: uppercase;
  }

  > div span {
    text-wrap: nowrap;
    font-size: 0.75rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  &[data-selected='true'] {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
