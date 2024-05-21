import styled from 'styled-components'

export const CustomInputContainer = styled.div`
  background-color: ${(props) => props.theme['base-input']};
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  position: relative;

  width: 100%;

  input {
    width: 100%;
    font-size: 0.875rem;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: 0;
    border-radius: 4px;
    padding: 0.75rem;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:has(input:placeholder-shown):after {
    color: ${(props) => props.theme['base-label']};
    content: ${(props) => (!props['aria-required'] ? "'Opcional'" : '')};
    font-style: italic;
    font-size: 0.75rem;
    position: absolute;
    right: 0.75rem;
  }

  &[data-invalid='true'] {
    border: 1px solid ${(props) => props.theme.danger};
  }
`
