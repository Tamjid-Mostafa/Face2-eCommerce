import { Layout } from '@/components'
import '@/styles/globals.css'
import { ManagedUIContext } from '@/components/ui/context'
import { useEffect } from 'react'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <ManagedUIContext>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ManagedUIContext>
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}
