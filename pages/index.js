import { Inter } from '@next/font/google'
import Meta from '@/components/layout/meta'
import {
  HeroBanner,
  HomeWaistcoat,
  Layout,
  Product,
  FindUs,
  NewsLetter,
  WaistcoatHome,
} from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ meta }) {
  return (
    <>
      <Meta {...meta} />
      <main>
        <HeroBanner />
        <div className="px-[2px]">
          <Product />
          {/* <FindUs></FindUs>
        <NewsLetter /> */}
          <HomeWaistcoat />
          <WaistcoatHome />
        </div>
      </main>
    </>
  )
}
