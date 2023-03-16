import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'
import cn from 'clsx'
import s from './Navbar.module.css'
import { AnimatePresence, motion } from 'framer-motion';
const NavbarRoot = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 300
      const { scrollTop } = document.documentElement
      const scrolled = scrollTop > offset

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled)
      }
    }, 200)

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  return (
    <motion.div
      transition={{
        type: "tween",
        damping: 100,
        stiffness: 800,
        duration: 0.5
      }}
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className={cn(s.root, { 'fixed': hasScrolled })}>
      {children}
    </motion.div>
  )
}

export default NavbarRoot
