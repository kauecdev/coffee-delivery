import {
  BenefitItemContainer,
  BenefitsContainer,
  HomeIntroContainer,
  TitleContainer,
} from './styles'
import coffeeCup from '../../assets/coffee-cup.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

export function Home() {
  return (
    <main>
      <HomeIntroContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <BenefitsContainer>
            <BenefitItemContainer iconBackgroundColor="yellow-dark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <p>Compra simples e segura</p>
            </BenefitItemContainer>
            <BenefitItemContainer iconBackgroundColor="base-text">
              <span>
                <Package size={16} weight="fill" />
              </span>
              <p>Embalagem mantém o café intacto</p>
            </BenefitItemContainer>
            <BenefitItemContainer iconBackgroundColor="yellow">
              <span>
                <Timer size={16} weight="fill" />
              </span>
              <p>Entrega rápida e rastreada</p>
            </BenefitItemContainer>
            <BenefitItemContainer iconBackgroundColor="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              <p>O café chega fresquinho até você</p>
            </BenefitItemContainer>
          </BenefitsContainer>
        </TitleContainer>
        <img src={coffeeCup} alt="" />
      </HomeIntroContainer>
    </main>
  )
}
