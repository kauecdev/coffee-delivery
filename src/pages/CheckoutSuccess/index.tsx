import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import motoby from '../../assets/motoboy.svg'
import { CircleWithIcon } from '../../components/CircleWithIcon'
import { CheckoutSuccessContainer, DeliveryDetailsContainer } from './styles'

export function CheckoutSuccess() {
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
                Entrega em <strong>Rua João XXVIII, 1132</strong>
              </p>
              <p>Jockey - Teresina, PI</p>
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
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </div>
        </DeliveryDetailsContainer>
      </div>
      <img src={motoby} alt="" />
    </CheckoutSuccessContainer>
  )
}
