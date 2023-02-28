import {
    FADE_DOWN_ANIMATION_VARIANTS,
    FADE_IN_ANIMATION_SETTINGS,
    FADE_UP_ANIMATION_VARIANTS,
} from '@/lib/constants'
import useScroll from '@/lib/hooks/use-scroll'
import Tooltip from '@/shared/tooltip'
import { HeartIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaMapMarkerAlt, FaSearch, FaShoppingBag } from 'react-icons/fa'
import NavMenu from './NavMenu'
import PopCart from '../PopCart'
import ScrollLockNav from './ScrollLockNav'
import ThemeSwitcher from '../ui/ThemeSwitcher'
import Header from './Header'
import { useUI } from '../ui/context'

const Navbar = () => {
    const scrolled = useScroll(200)
    const [search, setSearch] = useState()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { closeSidebarIfPresent, openModal, setSidebarView, openSidebar } =
        useUI()

    return (
        <>
            <div
                className=''
            >

                {/*  <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 -z-10" />
            <HeaderMini /> */}
                <div className={` `}>
                    <div
                        className={`lg:flex hidden h-16 max-w-screen-xl items-center justify-between xl:mx-auto `}
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
                                <p className="font-poppins text-sm font-semibold ">
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

                        </div>
                        <div className='flex items-center justify-between space-x-2'>
                            <>
                                <Tooltip content="Theme">
                                    <motion.div {...FADE_IN_ANIMATION_SETTINGS}>

                                        <ThemeSwitcher />

                                    </motion.div>

                                </Tooltip>
                            </>
                            <>
                                <Tooltip content="Cart">
                                    <motion.div {...FADE_IN_ANIMATION_SETTINGS}>
                                        <button
                                            onClick={() => openModal()}
                                        >
                                            Cart
                                            {/* <PopCart /> */}
                                        </button>
                                    </motion.div>

                                </Tooltip>
                            </>
                            <>
                                <Tooltip content="Wish List">
                                    <motion.button

                                        className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none'
                                        {...FADE_IN_ANIMATION_SETTINGS}>
                                        <HeartIcon />
                                    </motion.button>
                                </Tooltip>
                            </>
                        </div>


                    </div>
                    <div className='bg-primary'>

                        <motion.div
                            className={`flex h-10 max-w-screen-xl items-center justify-between xl:mx-auto`}
                            {...FADE_DOWN_ANIMATION_VARIANTS}
                        >
                            <NavMenu className={`justify-start`} />
                        </motion.div>

                    </div>
                </div>
                <>
                    <ScrollLockNav scrolled={scrolled} />
                </>

            </div>
            <AnimatePresence>
                <div className={`lg:hidden flex justify-between items-center  z-10 bg-white w-full fixed top-0 shadow-md shadow-white/50 ${scrolled ? "" : ""}`}>
                    <div
                        className={``}
                    >
                        {/* --- Logo Start--- */}
                        <Link href="/" className="flex items-center font-display text-2xl ">
                            <Image
                                src="/logo.png"
                                alt="face2.com.bd logo"
                                width="80"
                                height="80"
                                className="mr-2 rounded-sm z-[10]"
                            />

                            <div className="z-[10]">
                                <p className={`text-2xl font-bold  ${isMenuOpen ? "text-white" : "text-primary"}`}>face2.com.bd</p>
                                <p className="font-poppins text-sm font-semibold ">
                                    YOUR FASHION OUR CONCERN
                                </p>
                            </div>
                        </Link>
                        {/* --- Logo End--- */}
                    </div>

                    <div className=" items-center ">
                        <button
                            className={`relative w-14 h-14  rounded-full flex flex-col items-center transition-all duration-300 justify-center ${!isMenuOpen ? "gap-y-1" : ""}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className={`h-[2px] transition-all duration-300  z-[10] ${!isMenuOpen ? "w-7 bg-primary" : "w-6 mb-[-1px] rotate-45 bg-white"}`}></span>
                            <span className={`h-[2px] transition-all duration-300  z-[10] ${!isMenuOpen ? "w-7 bg-primary" : "w-6 mt-[-1px] -rotate-45 bg-white"}`}></span>
                            <span className={`h-[2px] transition-all duration-300  z-[10] ${!isMenuOpen ? "w-7 bg-primary" : "w-6 mt-[-1px] -rotate-45 bg-white"}`}></span>

                        </button>

                        {/*  <div
              className={`${!toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            > */}

                        <motion.div
                            transition={{
                                type: "spring",
                                damping: 100,
                                stiffness: 500,
                            }}
                            initial={{
                                x: "-100%"
                            }}
                            animate={{
                                x: !isMenuOpen ? "-100%" : "0%"
                            }}
                            className="fixed inset-0  bg-primary z-[1]">

                            <>
                                <ul className="list-none lg:hidden flex gap-10 flex-col justify-center items-center w-full h-full font-poppins ">
                                    <li className="text-white">
                                        Hello World
                                    </li>
                                    <li className="text-white">
                                        Hello World
                                    </li>
                                    <li className="text-white">
                                        Hello World
                                    </li>
                                    <li className="text-white">
                                        Hello World
                                    </li>
                                    <>
                                        <motion.button
                                            className="px-[32px] py-[13px] rounded-[10px] border-none gym-shadow border border-secondary bg-secondary  text-white transition-all hover:bg-white hover:text-black"
                                            onClick={() => setShowSignInModal(true)}
                                            {...FADE_IN_ANIMATION_SETTINGS}
                                        >
                                            Log in
                                        </motion.button>
                                    </>
                                </ul>

                            </>
                        </motion.div>
                        {/* 
            </div> */}
                    </div>

                </div>
            </AnimatePresence>
        </>
    )
}

export default Navbar
