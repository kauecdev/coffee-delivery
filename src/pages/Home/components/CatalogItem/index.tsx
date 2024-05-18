import { useState } from 'react'
import { QuantityInput } from '../../../../components/Form/QuantityInput'
import { CatalogItemType } from '../../../../data/catalog'
import {
  AddToCartButton,
  CatalogItemActionsContainer,
  CatalogItemContainer,
  Currency,
  Price,
  Tag,
  TagsContainer,
} from './styles'
import { ShoppingCartSimple } from '@phosphor-icons/react'

interface CatalogItemProps {
  catalogItem: CatalogItemType
}

export function CatalogItem({ catalogItem }: CatalogItemProps) {
  const [quantity, setQuantity] = useState(1)

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity((currentQuantity) => currentQuantity - 1)
    }
  }

  function handleIncrementQuantity() {
    setQuantity((currentQuantity) => currentQuantity + 1)
  }

  return (
    <CatalogItemContainer>
      <img src={catalogItem.imgUrl} alt="" />
      <TagsContainer>
        {catalogItem.tags.map((tag) => (
          <Tag key={tag}>{tag.toUpperCase()}</Tag>
        ))}
      </TagsContainer>
      <h4>{catalogItem.name}</h4>
      <p>{catalogItem.description}</p>
      <footer>
        <span>
          <Currency>R$</Currency> <Price>{catalogItem.price.toFixed(2)}</Price>
        </span>
        <CatalogItemActionsContainer>
          <QuantityInput
            quantity={quantity}
            decrementQuantity={handleDecrementQuantity}
            incrementQuantity={handleIncrementQuantity}
          />
          <AddToCartButton onClick={() => null}>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCartButton>
        </CatalogItemActionsContainer>
      </footer>
    </CatalogItemContainer>
  )
}
