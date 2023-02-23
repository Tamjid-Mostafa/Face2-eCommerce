import React from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <div className="">
            <Head>
                <title>Face2-Leading Clothing Brand</title>
            </Head>
            {router.pathname !== '/404' && (
                <header>
                    <Navbar />
                </header>
            )}
            <main className="">{children}</main>
            {router.pathname !== '/404' && (
                <footer>
                    <Footer />
                </footer>
            )}
        </div>
    )
}

export default Layout
