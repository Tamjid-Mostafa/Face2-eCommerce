import React from 'react'
import Head from 'next/head'

import Footer from './Footer'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <div className="layout">
            <Head>
                <title>Face2-Leading Clothing Brand</title>
            </Head>
            {router.pathname !== '/404' && (
                <header>
                    <Navbar />
                </header>
            )}
            <main className="main-container">{children}</main>
            {router.pathname !== '/404' && (
                <footer>
                    <Footer />
                </footer>
            )}
        </div>
    )
}

export default Layout
