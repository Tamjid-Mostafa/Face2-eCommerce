import { Inter } from '@next/font/google'
import Meta from '@/components/layout/meta'
import LoadingDots from '@/components/ui/LoadingDots'
import dynamic from 'next/dynamic'
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
  // const Loading = () => (
  //   <div className="flex h-80 w-80 items-center justify-center p-3 text-center">
  //     <LoadingDots />
  //   </div>
  // )

  // const dynamicProps = {
  //   loading: Loading,
  // }
  // const HeroBanner = dynamic(() => import('@/components/HeroBanner'), {
  //   ...dynamicProps,
  //   ssr: false,
  // })
  // const HomePanjabi = dynamic(() => import('@/components/HomePanjabi'), {
  //   ...dynamicProps,
  //   ssr: false,
  // })
  // const Product = dynamic(() => import('@/components/Product'), {
  //   ...dynamicProps,
  //   ssr: false,
  // })
  // const HomeBannerTwo = dynamic(() => import('@/components/HomeBannerTwo'), {
  //   ...dynamicProps,
  //   ssr: false,
  // })
  // const HomeWaistcoat = dynamic(() => import('@/components/HomeWaistcoat'), {
  //   ...dynamicProps,
  //   ssr: false,
  // })

  // const HomeBannerThree = dynamic(
  //   () => import('@/components/HomeBannerThree'),
  //   {
  //     ...dynamicProps,
  //     ssr: false,
  //   }
  // )
  // const HomeLuxurySandals = dynamic(
  //   () => import('@/components/HomeLuxurySandals'),
  //   {
  //     ...dynamicProps,
  //     ssr: false,
  //   }
  // )
  // const HomeLuxuryShoes = dynamic(
  //   () => import('@/components/HomeLuxuryShoes'),
  //   {
  //     ...dynamicProps,
  //     ssr: false,
  //   }
  // )
  // const WaistcoatHome = dynamic(() => import('@/components/WaistcoatHome'), {
  //   ...dynamicProps,
  //   ssr: false,
  // })
  // const HomeBannerFour = dynamic(() => import('@/components/HomeBannerFour'), {
  //   ...dynamicProps,
  //   ssr: false,
  // })
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
          <WaistcoatHome />
          <HomeBannerFour />
        </div>
      </main>
    </>
  )
}
