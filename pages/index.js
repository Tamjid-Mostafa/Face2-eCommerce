import Head from 'next/head'
import { Inter } from '@next/font/google'
import Meta from '@/components/layout/meta'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ meta }) {
  return (
    <>
      <Meta {...meta} />
      <main>
        <h1 className="text-9xl font-extrabold text-red-600">Hello !</h1>
      </main>
    </>
  )
}
