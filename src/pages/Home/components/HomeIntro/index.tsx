import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import {
  BenefitItemContainer,
  BenefitsContainer,
  HomeIntroContainer,
  TitleContainer,
} from './styles'
import coffeeCup from '../../../../assets/coffee-cup.svg'
import { CircleWithIcon } from '../../../../components/CircleWithIcon'

export function HomeIntro() {
  return (
    <HomeIntroContainer>
      <TitleContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <BenefitsContainer>
          <BenefitItemContainer>
            <CircleWithIcon circleColor="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </CircleWithIcon>
            <p>Compra simples e segura</p>
          </BenefitItemContainer>
          <BenefitItemContainer>
            <CircleWithIcon circleColor="base-text">
              <Package size={16} weight="fill" />
            </CircleWithIcon>
            <p>Embalagem mantém o café intacto</p>
          </BenefitItemContainer>
          <BenefitItemContainer>
            <CircleWithIcon circleColor="yellow">
              <Timer size={16} weight="fill" />
            </CircleWithIcon>
            <p>Entrega rápida e rastreada</p>
          </BenefitItemContainer>
          <BenefitItemContainer>
            <CircleWithIcon circleColor="purple">
              <Coffee size={16} weight="fill" />
            </CircleWithIcon>
            <p>O café chega fresquinho até você</p>
          </BenefitItemContainer>
        </BenefitsContainer>
      </TitleContainer>
      <img src={coffeeCup} alt="" />
    </HomeIntroContainer>
  )
}
