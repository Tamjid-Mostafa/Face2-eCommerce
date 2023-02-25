import Head from 'next/head'
import { Inter } from '@next/font/google'
import Meta from '@/components/layout/meta'
import { FindUs, HeroBanner, HomeCollection, Layout, Product } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ meta }) {
  return (
    <Layout>
      <Meta {...meta} />
      <main>
        <HeroBanner />
        <HomeCollection></HomeCollection>
        <Product></Product>
        <FindUs></FindUs>
      </main >
    </Layout >
  )
}
