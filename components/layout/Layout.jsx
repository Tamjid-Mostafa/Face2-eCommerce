import React from 'react'

import { useRouter } from 'next/router'
import Footer from '../Footer'
import Meta from './meta'
import { Navbar } from '..'

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
