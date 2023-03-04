import { Inter } from '@next/font/google'
import Meta from '@/components/layout/meta'
import { HeroBanner, HomeCollection, HomeWaistcoat, Layout, Product, FindUs, NewsLetter, HomeCollectionTwo, WaistcoatHome } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ meta }) {
  return (
    <>
      <Meta {...meta} />
      <main>
        <HeroBanner />
        <HomeCollection />

        <Product></Product>
        <HomeCollectionTwo></HomeCollectionTwo>
        {/* <FindUs></FindUs>
        <NewsLetter /> */}
        <HomeWaistcoat />
        <WaistcoatHome />
      </main >
    </ >
  )
}
