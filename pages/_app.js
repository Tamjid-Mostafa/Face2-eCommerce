import { Layout } from '@/components'
import '@/styles/globals.css'
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'

const sfPro = localFont({
  src: '../styles/SF-Pro-Display-Medium.otf',
  variable: '--font-sf',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={(sfPro.variable, inter.variable)}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
