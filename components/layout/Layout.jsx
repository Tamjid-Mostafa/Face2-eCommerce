import React from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Face2-Leading Clothing Brand</title>
            </Head>
            <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-100">
                {router.pathname !== '/404' && (
                    <header className=''>
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
        </>
    )
}

export default Layout
