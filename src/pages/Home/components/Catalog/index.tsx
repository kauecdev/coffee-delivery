import { catalogData } from '../../../../data/catalog'
import { CatalogItem } from '../CatalogItem'
import { CatalogContainer } from './styles'

export function Catalog() {
  return (
    <CatalogContainer>
      <h3>Nossos cafés</h3>
      <div>
        {catalogData.map((catalogItem) => (
          <CatalogItem key={catalogItem.id} catalogItem={catalogItem} />
        ))}
      </div>
    </CatalogContainer>
  )
}
