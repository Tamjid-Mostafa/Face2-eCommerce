import React from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Header from '../Header'
import Meta from './meta'
import { useSignInModal } from '../sign-in-modal'

const Layout = ({ children, meta }) => {
    const router = useRouter()

    return (
        <div className='overflow-hidden relative'>
            <Meta {...meta} />
            <>
                {router.pathname !== '/404' && (
                    <Navbar />
                )}
                {children}
                {router.pathname !== '/404' && (
                    <Footer />

                )}
            </>
        </div>
    )
}

export default Layout
