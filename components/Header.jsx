import { FADE_IN_ANIMATION_SETTINGS } from '@/lib/constants';
import useScroll from '@/lib/hooks/use-scroll';
import Tooltip from '@/shared/tooltip';
import { HeartIcon, MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaMapMarkerAlt, FaSearch, FaShoppingBag } from 'react-icons/fa';
import NavMenu from './NavMenu';

const Header = () => {

    const scrolled = useScroll(50);
    return (
        <>
            <div
                className={`fixed top-0 w-full ${scrolled
                    ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl py-2"
                    : "bg-white/0 py-5"
                    } z-30 transition-all`}
            >
                <div className="flex max-w-screen-xl items-start justify-between xl:mx-auto">
                    <div className='flex gap-2'>
                        <div>
                            English
                        </div>
                        <div>
                            BD / TK
                        </div>
                    </div>
                    <Link href="/" className="flex flex-col items-center font-display text-2xl text-center">
                        <Image
                            src="/logo.png"
                            alt="face2.com.bd logo"
                            width="80"
                            height="80"
                            className="mr-2 rounded-sm"
                        />

                        <div className="">
                            <p className="text-2xl font-bold text-primary">face2.com.bd</p>
                            {/* <p className="font-poppins text-sm font-semibold text-gray-700">
                                YOUR FASHION OUR CONCERN
                            </p> */}
                        </div>
                    </Link>

                    <div className='flex gap-2'>
                        <AnimatePresence>
                            <Tooltip content="Search">
                                <motion.button
                                    className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none'
                                    {...FADE_IN_ANIMATION_SETTINGS}>
                                    <MagnifyingGlassIcon />
                                </motion.button>
                            </Tooltip>
                        </AnimatePresence>

                        <AnimatePresence>
                            <Tooltip content="Store Location">
                                <motion.button
                                    className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none'
                                    {...FADE_IN_ANIMATION_SETTINGS}>
                                    <FaMapMarkerAlt />
                                </motion.button>
                            </Tooltip>

                        </AnimatePresence>
                        <AnimatePresence>
                            <Tooltip content="Profile">
                                <motion.button
                                    className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none'
                                    {...FADE_IN_ANIMATION_SETTINGS}>
                                    <PersonIcon />
                                </motion.button>
                            </Tooltip>
                        </AnimatePresence>
                        <AnimatePresence>
                            <Tooltip content="Cart">
                                <motion.button
                                    className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none'
                                    {...FADE_IN_ANIMATION_SETTINGS}>
                                    <FaShoppingBag />
                                </motion.button>
                            </Tooltip>
                        </AnimatePresence>
                    </div>
                </div>
                <div>
                    <NavMenu className={`justify-center`} />
                </div>
            </div>

        </>
    )
}

export default Header