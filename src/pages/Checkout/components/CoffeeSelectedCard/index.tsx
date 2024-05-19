import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../components/Form/QuantityInput'
import { SecondaryButton } from '../../../../components/SecondaryButton'
import { CatalogItemType } from '../../../../data/catalog'
import { CoffeeSelectedCardContainer } from './styles'

interface CoffeeSelectedCardProps {
  coffee: CatalogItemType
}

export function CoffeeSelectedCard({ coffee }: CoffeeSelectedCardProps) {
  function handleDecrementQuantity() {}
  function handleIncrementQuantity() {}

  return (
    <CoffeeSelectedCardContainer>
      <img src={coffee.imgUrl} alt="" />
      <div>
        <header>
          {coffee.name} <aside>R$ {coffee.price.toFixed(2)}</aside>
        </header>
        <footer>
          <QuantityInput
            decrementQuantity={handleDecrementQuantity}
            incrementQuantity={handleIncrementQuantity}
            quantity={coffee.quantity}
          />
          <SecondaryButton>
            <Trash size={16} />
            Remover
          </SecondaryButton>
        </footer>
      </div>
    </CoffeeSelectedCardContainer>
  )
}
