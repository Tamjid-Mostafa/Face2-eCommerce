import Head from 'next/head'
import { Inter } from '@next/font/google'
import Meta from '@/components/layout/meta'
import { HeroBanner, Layout } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ meta }) {
  return (
    <Layout>
      <Meta {...meta} />
      <main>
        <HeroBanner />
      </main>
    </Layout>
  )
}
