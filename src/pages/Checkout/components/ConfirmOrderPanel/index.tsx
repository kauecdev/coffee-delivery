import { PrimaryButton } from '../../../../components/PrimaryButton'
import { CatalogItemType, catalogData } from '../../../../data/catalog'
import { CoffeeSelectedCard } from '../CoffeeSelectedCard'
import { ConfirmOrderPanelContainer, PriceDetailsSection } from './styles'

export function ConfirmOrderPanel() {
  const coffees: CatalogItemType[] = catalogData.filter((item) => item.id === 1)

  return (
    <ConfirmOrderPanelContainer>
      {coffees.map((coffee) => (
        <CoffeeSelectedCard key={coffee.id} coffee={coffee} />
      ))}
      <PriceDetailsSection>
        <span>
          Total de itens <aside>R$ 29,70</aside>
        </span>
        <span>
          Entrega <aside>R$ 3,50</aside>
        </span>
        <span>
          Total <aside>R$ 33,20</aside>
        </span>
      </PriceDetailsSection>
      <PrimaryButton>Confirmar Pedido</PrimaryButton>
    </ConfirmOrderPanelContainer>
  )
}
