import { FADE_IN_ANIMATION_SETTINGS } from '@/lib/constants';
import useScroll from '@/lib/hooks/use-scroll';
import Tooltip from '@/shared/tooltip';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { FaShoppingBag } from 'react-icons/fa';
import Avatar from '../common/Avatar';
import Searchbar from '../common/Searchbar';
import { Bag } from '../layout/icons';
import Container from '../ui/Container';
import { useUI } from '../ui/context';
import Logo from '../ui/Logo/Logo';
import NavbarRoot from './NavbarRoot';
import NavMenu from './NavMenu';

const Header = () => {
    const scrolled = useScroll(50);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { closeSidebarIfPresent, openModal, setSidebarView, openSidebar } =
        useUI()
    return (
        <NavbarRoot>
            <Container clean className="mx-auto max-w-8xl px-6">

                <>
                    <div
                        className={`w-full border-b border-primary-2 bg-white bg-opacity-[0.7] z-10 transition-all duration-300 ${isMenuOpen && "hidden"}`}
                    >
                        <div className="relative flex items-center justify-center xl:mx-auto lg:px-4 px-2 transition-all duration-300">

                            <div className='absolute left-2 flex items-center'>
                                <button
                                    className={`relative w-14 h-14  rounded-full lg:hidden flex flex-col items-start transition-all duration-300 justify-center  ${!isMenuOpen ? "space-y-[6px]" : ""}`}
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <span className={`h-[2px] transition-all duration-300  z-[10] ${!isMenuOpen ? "w-7 bg-secondary hover:bg-secondary-2" : "w-6 mb-[-1px] rotate-45 bg-white"}`}></span>
                                    <span className={`h-[2px] transition-all duration-300  z-[10] ${!isMenuOpen ? "w-7 bg-secondary hover:bg-secondary-2" : "hidden"}`}></span>
                                    <span className={`h-[2px] transition-all duration-300  z-[10] ${!isMenuOpen ? "w-7 bg-secondary hover:bg-secondary-2" : "w-6 mt-[-1px] -rotate-45 bg-white"}`}></span>
                                </button>
                                <>
                                    <Tooltip content="Search">
                                        <motion.button
                                            className='rounded-full w-[35px] h-[35px] lg:hidden inline-flex items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-pointer outline-none'
                                            {...FADE_IN_ANIMATION_SETTINGS}>
                                            <MagnifyingGlassIcon />
                                        </motion.button>
                                    </Tooltip>
                                </>
                            </div>

                            <Logo />

                            <div className='absolute right-2 flex space-x-2'>

                                <>
                                    <Tooltip content="Search">
                                        <motion.button
                                            className='rounded-full w-[35px] h-[35px]  lg:inline-flex hidden items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-pointer outline-none'
                                            {...FADE_IN_ANIMATION_SETTINGS}>
                                            <MagnifyingGlassIcon />
                                        </motion.button>
                                    </Tooltip>
                                </>
                                {/* <>
                            <Tooltip content="Search">
                                <motion.button
                                    className='rounded-full w-[35px] h-[35px]  lg:inline-flex hidden items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-pointer outline-none'
                                    {...FADE_IN_ANIMATION_SETTINGS}>

                                    <ThemeSwitcher />
                                </motion.button>
                            </Tooltip>
                        </> */}

                                {/* <>
                            <Tooltip content="Store Location">
                                <motion.button
                                    className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-pointer outline-none'
                                    {...FADE_IN_ANIMATION_SETTINGS}>
                                    <FaMapMarkerAlt />
                                </motion.button>
                            </Tooltip>

                        </> */}
                                <>
                                    <Tooltip content="Profile">
                                        <motion.button
                                            onClick={() => openModal()}
                                            className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-pointer outline-none'
                                            {...FADE_IN_ANIMATION_SETTINGS}>
                                            <Avatar />
                                        </motion.button>
                                    </Tooltip>
                                </>
                                <>
                                    <Tooltip content="Cart">
                                        <motion.button
                                            className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-pointer outline-none'
                                            {...FADE_IN_ANIMATION_SETTINGS}
                                            onClick={() => {
                                                setSidebarView('CART_VIEW')
                                                openSidebar()
                                            }}
                                        >

                                            <Bag />
                                        </motion.button>
                                    </Tooltip>
                                </>
                            </div>
                        </div>
                        <motion.div

                            className='lg:flex hidden'>
                            <NavMenu className={`justify-center`} />
                        </motion.div>
                    </div>
                    <AnimatePresence>
                        <div className={`lg:hidden flex justify-between items-center  z-10 bg-white w-full fixed top-0 shadow-md shadow-white/50 ${scrolled ? "" : ""}`}>


                            <motion.div
                                transition={{
                                    type: "tween",
                                    damping: 100,
                                    stiffness: 800,
                                }}
                                initial={{
                                    x: "-100%"
                                }}
                                animate={{
                                    x: !isMenuOpen ? "-100%" : "0%"
                                }}
                                className="fixed inset-0  bg-primary z-[1] space-y-12">
                                <div className='flex justify-end '>
                                    <button
                                        className={`relative w-14 h-14   flex flex-col items-center transition-all duration-200 justify-center hover:border border-accent-7 ${!isMenuOpen ? "space-y-1" : ""}`}
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        <span className={`h-[2px] transition-all duration-300  z-[10] ${!isMenuOpen ? "w-7 bg-primary" : "w-6 mb-[-1px] rotate-45 bg-secondary hover:bg-secondary-2"}`}></span>
                                        <span className={`h-[2px] transition-all duration-300  z-[10] ${!isMenuOpen ? "w-7 bg-primary" : "w-6 mt-[-1px] -rotate-45 bg-secondary hover:bg-secondary-2"}`}></span>

                                    </button>
                                </div>
                                <div className=''>
                                    <Logo />
                                </div>

                                <>
                                    <ul className="list-none lg:hidden flex space-y-10 flex-col justify-start items-center w-full h-full font-poppins ">
                                        <Searchbar id="mobile-search" />
                                        <li className="">
                                            Hello World
                                        </li>
                                        <li className="">
                                            Hello World
                                        </li>
                                        <li className="">
                                            Hello World
                                        </li>
                                        <>
                                            <motion.button
                                                className="px-[32px] py-[13px] rounded-[10px] border-none gym-shadow border border-secondary bg-secondary transition-all 
                                        text-accent-1
                                        hover:bg-primary-2 hover:text-accent-9"
                                                onClick={() => setShowSignInModal(true)}
                                                {...FADE_IN_ANIMATION_SETTINGS}
                                            >
                                                Log in
                                            </motion.button>
                                        </>
                                    </ul>

                                </>
                            </motion.div>

                        </div>
                    </AnimatePresence>
                </>
            </Container>
        </NavbarRoot>
    )
}

export default Header