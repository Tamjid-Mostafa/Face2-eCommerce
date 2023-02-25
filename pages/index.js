import { Inter } from '@next/font/google'
import Meta from '@/components/layout/meta'
import { HeroBanner, HomeCollection, HomeWaistcoat, Layout, Product, FindUs, NewsLetter } from '@/components'

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
        <FindUs></FindUs>
        <NewsLetter></NewsLetter>
      </main >
    </Layout >
  )
}
