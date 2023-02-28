import Cross from '@/components/layout/icons/Cross'
import FocusTrap from '@/lib/focus-trap'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { useRef, useEffect, useCallback } from 'react'




const Modal = ({ children, onClose }) => {
  const ref = useRef()

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    const modal = ref.current

    if (modal) {
      disableBodyScroll(modal, { reserveScrollBarGap: true })
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      clearAllBodyScrollLocks()
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  return (
    <div className="fixed bg-black bg-opacity-40 flex items-center inset-0 z-50 justify-center">
      <div className="bg-primary p-12 border border-accent-2 relative focus:outline-none" role="dialog" ref={ref}>
        <button
          onClick={() => onClose()}
          aria-label="Close panel"
          className="hover:text-accent-5 transition ease-in-out duration-150 focus:outline-none absolute right-0 top-0 m-6"
        >
          <Cross className="h-6 w-6" />
        </button>
        <FocusTrap focusFirst>{children}</FocusTrap>
      </div>
    </div>
  )
}

export default Modal
