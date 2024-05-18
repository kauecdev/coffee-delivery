import { Catalog } from './components/Catalog'
import { HomeIntro } from './components/HomeIntro'

export function Home() {
  return (
    <main>
      <HomeIntro />
      <Catalog />
    </main>
  )
}
