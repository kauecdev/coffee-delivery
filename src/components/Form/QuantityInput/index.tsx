import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  decrementQuantity: () => void
  incrementQuantity: () => void
}

export function QuantityInput({
  quantity,
  decrementQuantity,
  incrementQuantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  )
}
