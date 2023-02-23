"use strict";
import { FADE_IN_ANIMATION_SETTINGS } from '@/lib/constants'
import useScroll from '@/lib/hooks/use-scroll'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSignInModal } from './layout/sign-in-modal'

const Navbar = () => {
    const scrolled = useScroll(50)
    const { SignInModal, setShowSignInModal } = useSignInModal();
    if (setShowSignInModal) {
        console.log("useSignInModal");
    }
    if (!setShowSignInModal) {
        console.log("No useSignInModal");
    }
    return (
        <>
            <SignInModal />
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
                            alt="Precedent logo"
                            width="30"
                            height="30"
                            className="mr-2 rounded-sm"
                        ></Image>
                        <p>Precedent</p>
                    </Link>
                    <div>
                        <button onClick={() => setShowSignInModal(true)}>
                            sign in
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar