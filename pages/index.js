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
  HomePanjabi,
  HomeBannerTwo,
  HomeBannerThree,
  HomeBannerFour,
  HomeLuxurySandals,
  HomeLuxuryShoes,
} from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ meta }) {
  return (
    <>
      <Meta {...meta} />
      <main>
        <HeroBanner />
        <div className="px-[2px]">
          <HomePanjabi />
          <Product />
          {/* <FindUs></FindUs>
        <NewsLetter /> */}
          <HomeBannerTwo />
          <HomeWaistcoat />
          <WaistcoatHome />
          <HomeBannerThree />
          <HomeLuxurySandals />
          <HomeLuxuryShoes />
          <HomeBannerFour />
        </div>
      </main>
    </>
  )
}
