import { Inter } from '@next/font/google'
import Meta from '@/components/layout/meta'
import { HeroBanner, HomeCollection, HomeCollectionTwo, HomeWaistcoat, Layout, Product } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ meta }) {
  return (
    <Layout>
      <Meta {...meta} />
      <main>
        <HeroBanner />
        <HomeCollection></HomeCollection>
        <HomeWaistcoat></HomeWaistcoat>
        <Product></Product>
        <HomeCollectionTwo></HomeCollectionTwo>
      </main >
    </Layout >
  )
}
