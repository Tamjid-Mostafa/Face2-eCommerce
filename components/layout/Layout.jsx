import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../Footer'
import Header from '../Header'
import Meta from './meta'
import { useSignInModal } from '../sign-in-modal'

const Layout = ({ children, meta }) => {
    const router = useRouter()
    const { SignInModal, setShowSignInModal } = useSignInModal()
    return (
        <div className='relative'>
            <Meta {...meta} />
            <SignInModal />
            <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
                {router.pathname !== '/404' && (
                    <Header setShowSignInModal={setShowSignInModal} />
                )}
                {children}
                {router.pathname !== '/404' && (
                    <Footer />

                )}
            </div>
        </div>
    )
}

export default Layout
