import { FADE_IN_ANIMATION_SETTINGS, FADE_UP_ANIMATION_VARIANTS } from '@/lib/constants'
import Tooltip from '@/shared/tooltip'
import { HeartIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import PopCart from '../PopCart'
import NavMenu from './NavMenu'

const ScrollLockNav = ({ scrolled }) => {
    return (
        <AnimatePresence>

            <div className={`
                    ${scrolled ? "fixed top-0 border-b border-gray-200 bg-primary" : "hidden"}
                     w-full z-10 animate-enterFromTop `}>
                <motion.div
                    className={`flex h-10 max-w-screen-xl items-center justify-between xl:mx-auto`}
                    {...FADE_UP_ANIMATION_VARIANTS}
                >
                    <NavMenu />
                    <div className="relative flex items-center w-2/4 mr-2">
                        <input
                            type="text"
                            name="search-products"
                            id="search-products"
                            autoComplete="search-products"
                            placeholder="Search Products..."
                            className={`focus:outline-none block w-full rounded-full placeholder-gray-500 border bg-gray-100 border-primary pl-12 pr-4 h-8 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-primary
                                    `}
                        />
                        <div className="absolute right-1 ">
                            <Tooltip content='Search here'>
                                <button
                                    className="relative flex h-6 w-6 sm:w-max ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                                >
                                    <FaSearch className="relative" />
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-2'>
                        <Tooltip content="Cart">
                            <motion.div {...FADE_IN_ANIMATION_SETTINGS}>
                                <PopCart />
                            </motion.div>

                        </Tooltip>
                        <Tooltip content="Wish List">
                            <motion.button
                                className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none'
                                {...FADE_IN_ANIMATION_SETTINGS}>
                                <HeartIcon />
                            </motion.button>
                        </Tooltip>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default ScrollLockNav