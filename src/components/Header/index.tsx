import {
  ActionsContainer,
  ChartLink,
  HeaderContainer,
  LocationContainer,
} from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(CartContext)

  const cartItemsAmount = cart.reduce((previous, current) => {
    return (previous += current.quantity)
  }, 0)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Teresina, PI
        </LocationContainer>
        <ChartLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          {cartItemsAmount > 0 && <span>{cartItemsAmount}</span>}
        </ChartLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
