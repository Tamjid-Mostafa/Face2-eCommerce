
import { useEffect, useRef } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'


const Sidebar = ({ children, onClose }) => {
  const sidebarRef = useRef()
  const contentRef = useRef()

  const onKeyDownSidebar = (event) => {
    if (event.code === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.focus()
    }

    const contentElement = contentRef.current

    if (contentElement) {
      disableBodyScroll(contentElement, { reserveScrollBarGap: true })
    }

    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  return (
    <div
      className="fixed inset-0 h-full z-50 box-border outline-none"
      ref={sidebarRef}
      onKeyDown={onKeyDownSidebar}
      tabIndex={1}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 duration-100 ease-linear backdrop-blur-[0.8px]" onClick={onClose} />
        <section className="absolute inset-y-0 right-0 w-full md:w-auto max-w-full flex outline-none md:pl-10">
          <div className="h-full w-full md:w-screen md:max-w-md">
            <div className="h-full flex flex-col text-base bg-accent-0 shadow-xl overflow-y-auto overflow-x-hidden" ref={contentRef}>
              {children}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sidebar
