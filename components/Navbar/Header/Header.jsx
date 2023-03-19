import { FADE_IN_ANIMATION_SETTINGS } from '@/lib/constants';
import useScroll from '@/lib/hooks/use-scroll';
import Tooltip from '@/shared/tooltip';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'
import Avatar from '../../common/Avatar';
import Searchbar from '../../common/Searchbar';
import { Bag } from '../../layout/icons';
import Container from '../../ui/Container';
import { useUI } from '../../ui/context';
import { Dropdown, DropdownTrigger } from '../../ui/Dropdown/Dropdown';
import Logo from '../../ui/Logo/Logo';
import Text from '../../ui/Text';
import NavMenu from '../NavMenu';
import s from './Header.module.css';
import cn from 'clsx'
import CustomerMenuContent from '../UserNav/CustomerMenuContent';
import MenuButton from '@/components/ui/MenuButton';

const Header = ({
    absolute = false, // navbar absolute position for only the landing page
}) => {
    const scrolled = useScroll(500);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { closeSidebarIfPresent, openModal, setSidebarView, openSidebar } =
        useUI()


    return (
        <Container clean className="mx-auto max-w-8xl px-6">
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                <motion.div
                    className={cn(s.root, { "absolute top-0 left-0 bg-white/50 border-none": absolute })}
                >
                    <div className={s.nav}>
                        <div className='absolute left-2 flex items-center'>
                            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}
                                isMenuOpen={isMenuOpen}
                            />
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

                            <>

                                <motion.button
                                    onClick={() => openModal()}
                                    className='rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-mauve12 bg-white/60 shadow-[0_2px_20px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-pointer outline-none'
                                    {...FADE_IN_ANIMATION_SETTINGS}>
                                    <Avatar />
                                </motion.button>

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
                        className={`lg:flex hidden ${scrolled && "fixed top-0  bg-primary border-"}`}>
                        <Text className="w-1/6"
                            variant="logo">Face 2</Text>
                        <NavMenu className={`justify-start`} />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                <div className={`lg:hidden flex justify-between items-center  z-10 bg-white w-full fixed top-0 shadow-md shadow-white/50 ${scrolled ? "" : ""}`}>


                    <motion.div
                        transition={{
                            type: "tween",
                            damping: 10,
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
                            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}
                                isMenuOpen={isMenuOpen}
                            />
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
        </Container >
    )
}

export default Header