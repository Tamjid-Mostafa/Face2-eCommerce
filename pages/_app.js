import { Layout } from '@/components'
import '@/styles/globals.css'
import { ManagedUIContext } from '@/components/ui/context'
import { useEffect } from 'react'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import AuthProvider from '@/context/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <AuthProvider>
            <ManagedUIContext>
              <Layout>
                <Component {...pageProps} />
                <ToastContainer />
              </Layout>
            </ManagedUIContext>
          </AuthProvider>
        </AnimatePresence>
      </LazyMotion>
    </>
  )
}
