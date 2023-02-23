import { FADE_IN_ANIMATION_SETTINGS } from '@/lib/constants'
import useScroll from '@/lib/hooks/use-scroll'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const scrolled = useScroll(50)
    return (
        <>
            {/* <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" /> */}
            <div
                className={`fixed top-0 w-full ${scrolled
                    ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
                    : "bg-white/0"
                    } z-30 transition-all`}
            >
                <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
                    <Link href="/" className="flex items-center font-display text-2xl">
                        <Image
                            src="/logo.png"
                            alt="face2.com.bd logo"
                            width="80"
                            height="80"
                            className="mr-2 rounded-sm"
                        />
                        <div className=''>
                            <p className='text-2xl font-bold text-primary'>face2.com.bd</p>
                            <p className='font-poppins text-sm font-semibold text-gray-700'>YOUR FASHION OUR CONCERN</p>
                        </div>
                    </Link>
                    <div>
                        <AnimatePresence>

                            <motion.button
                                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                                onClick={() => setShowDemoModal(true)}
                                {...FADE_IN_ANIMATION_SETTINGS}
                            >
                                Sign In
                            </motion.button>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar