import { useContext } from 'react'
import { PrimaryButton } from '../../../../components/PrimaryButton'
import { CoffeeSelectedCard } from '../CoffeeSelectedCard'
import { ConfirmOrderPanelContainer, PriceDetailsSection } from './styles'
import { CartContext } from '../../../../contexts/CartContext'

export function ConfirmOrderPanel() {
  const { cart } = useContext(CartContext)

  const deliveryTax = 3.5

  const totalItemsPrice = cart.reduce(
    (previousValue, currentItem) =>
      (previousValue += currentItem.price * currentItem.quantity),
    0,
  )

  const totalPrice = deliveryTax + totalItemsPrice

  return (
    <ConfirmOrderPanelContainer>
      {cart.map((coffee) => (
        <CoffeeSelectedCard key={coffee.id} coffee={coffee} />
      ))}
      <PriceDetailsSection>
        <span>
          Total de itens{' '}
          <aside>
            {totalItemsPrice.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </aside>
        </span>
        <span>
          Entrega{' '}
          <aside>
            {deliveryTax.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </aside>
        </span>
        <span>
          Total{' '}
          <aside>
            {totalPrice.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </aside>
        </span>
      </PriceDetailsSection>
      <PrimaryButton type="submit" form="order">
        Confirmar Pedido
      </PrimaryButton>
    </ConfirmOrderPanelContainer>
  )
}
