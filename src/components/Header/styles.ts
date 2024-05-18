import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 0 2rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const ChartLink = styled(NavLink)`
  cursor: pointer;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.5rem;

  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  span {
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    padding: 0.175rem 0.4145rem;
    border-radius: 999px;
    font-size: 0.75rem;
    text-align: center;

    position: absolute;
    top: calc(-45% + 0.5rem);
    right: calc(-45% + 0.5rem);
  }
`
