import {
    FADE_DOWN_ANIMATION_VARIANTS,
    FADE_IN_ANIMATION_SETTINGS,
    FADE_UP_ANIMATION_VARIANTS,
} from '@/lib/constants'
import useScroll from '@/lib/hooks/use-scroll'
import Tooltip from '@/shared/tooltip'
import { HeartIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import NavMenu from './NavMenu'
import PopCart from '../PopCart'
import { useSignInModal } from '../sign-in-modal'
import ScrollLockNav from './ScrollLockNav'

const Navbar = () => {
    const scrolled = useScroll(200)
    const [search, setSearch] = useState()
    const { SignInModal, setShowSignInModal } = useSignInModal()
    return (
        <div
        // className='fixed top-0 w-full z-30 transition-all'
        ><SignInModal />

            {/*  <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 -z-10" />
            <HeaderMini /> */}
            <div className={`  z-30 transition-all `}>
                <div
                    className={`flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto `}
                >
                    {/* --- Logo Start--- */}
                    <Link href="/" className="flex items-center font-display text-2xl">
                        <Image
                            src="/logo.png"
                            alt="face2.com.bd logo"
                            width="80"
                            height="80"
                            className="mr-2 rounded-sm"
                        />

                        <div className="">
                            <p className="text-2xl font-bold text-primary">face2.com.bd</p>
                            <p className="font-poppins text-sm font-semibold text-gray-700">
                                YOUR FASHION OUR CONCERN
                            </p>
                        </div>
                    </Link>
                    {/* --- Logo End--- */}

                    <div className="relative flex items-center w-2/4">
                        <input
                            type="text"
                            name="search-products"
                            id="search-products"
                            autoComplete="search-products"
                            placeholder="Search Products..."
                            className="focus:outline-none block w-full rounded-full placeholder-gray-500 border bg-gray-100 border-primary pl-12 pr-4 h-12 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary"
                        />
                        <div className="absolute right-1">
                            <button
                                type="submit"
                                className="relative flex h-10 w-10 sm:w-max ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                            >
                                <FaSearch className="relative" />
                            </button>
                        </div>
                    </div>
                    <div>
                        <AnimatePresence>
                            <Tooltip content="Cart">
                                <motion.div {...FADE_IN_ANIMATION_SETTINGS}>
                                    <Link href='/Cart'>
                                        <PopCart />
                                    </Link>
                                </motion.div>

                            </Tooltip>
                        </AnimatePresence>
                    </div>
                    <div className='flex items-center justify-between gap-2'>

                        <AnimatePresence>
                            <Tooltip content="Wish List">
                                <motion.button
                                    onClick={() => setShowSignInModal(true)}
                                    className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none'
                                    {...FADE_IN_ANIMATION_SETTINGS}>
                                    <HeartIcon />
                                </motion.button>
                            </Tooltip>
                        </AnimatePresence>
                    </div>


                </div>
                <div className='bg-primary'>
                    <AnimatePresence>
                        <motion.div
                            className={`flex h-10 max-w-screen-xl items-center justify-between xl:mx-auto`}
                            {...FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <NavMenu className={`justify-start`} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <>
                <ScrollLockNav scrolled={scrolled} />
            </>

        </div>
    )
}

export default Navbar
