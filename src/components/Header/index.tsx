import {
  ActionsContainer,
  ChartLink,
  HeaderContainer,
  LocationContainer,
} from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Teresina, PI
        </LocationContainer>
        <ChartLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>2</span>
        </ChartLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
