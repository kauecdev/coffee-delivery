import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
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
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 999px;
    font-size: 0.75rem;
    line-height: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: calc(-45% + 0.5rem);
    right: calc(-45% + 0.5rem);
  }
`
