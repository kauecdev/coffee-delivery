import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import motoby from '../../assets/motoboy.svg'
import { CircleWithIcon } from '../../components/CircleWithIcon'
import { CheckoutSuccessContainer, DeliveryDetailsContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useParams } from 'react-router-dom'

const PaymentMethodLabel = {
  CREDIT_CARD: 'Cartão de Crédito',
  DEBIT_CARD: 'Cartão de Débito',
  MONEY: 'Dinheiro',
}

export function CheckoutSuccess() {
  const { orders } = useContext(CartContext)

  const { id } = useParams()

  const currentOrder = orders.find((order) => String(order.id) === id)

  return (
    <CheckoutSuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <DeliveryDetailsContainer>
          <div>
            <CircleWithIcon circleColor="purple">
              <MapPin size={16} weight="fill" />
            </CircleWithIcon>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {currentOrder?.street}, {currentOrder?.number}
                </strong>
              </p>
              <p>
                {currentOrder?.neighborhood} - {currentOrder?.city},{' '}
                {currentOrder?.state}
              </p>
            </div>
          </div>

          <div>
            <CircleWithIcon circleColor="yellow">
              <Timer size={16} weight="fill" />
            </CircleWithIcon>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>

          <div>
            <CircleWithIcon circleColor="yellow-dark">
              <CurrencyDollar size={16} />
            </CircleWithIcon>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>
                  {currentOrder &&
                    PaymentMethodLabel[currentOrder?.paymentMethod]}
                </strong>
              </p>
            </div>
          </div>
        </DeliveryDetailsContainer>
      </div>
      <img src={motoby} alt="" />
    </CheckoutSuccessContainer>
  )
}
