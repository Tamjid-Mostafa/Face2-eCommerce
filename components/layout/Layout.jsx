import React from 'react'

import { useRouter } from 'next/router'
import Footer from '../Footer'
import Meta from './meta'
import { Navbar } from '..'
import Sidebar from '../ui/Sidebar'
import LoginView from '../auth/LoginView'
import { useUI } from '../ui/context'
import CartSidebarView from '../cart/CartSidebarView'
import Header from '../Navbar/Header'
import dynamic from 'next/dynamic'
import Modal from '../ui/Modal'
import LoadingDots from '../ui/LoadingDots'


const SidebarView = ({ sidebarView, closeSidebar, links }) => {
    return (
        <Sidebar onClose={closeSidebar}>
            {sidebarView === 'CART_VIEW' && <CartSidebarView />}
            {/* {sidebarView === 'SHIPPING_VIEW' && <ShippingView />}
        {sidebarView === 'PAYMENT_VIEW' && <PaymentMethodView />}
        {sidebarView === 'CHECKOUT_VIEW' && <CheckoutSidebarView />}
        {sidebarView === 'MOBILE_MENU_VIEW' && <MenuSidebarView links={links} />} */}
        </Sidebar>
    )
}
const SidebarUI = ({ links }) => {
    const { displaySidebar, closeSidebar, sidebarView } = useUI()
    return displaySidebar ? (
        <SidebarView
            links={links}
            sidebarView={sidebarView}
            closeSidebar={closeSidebar}
        />
    ) : null
}
const Loading = () => (
    <div className="w-80 h-80 flex items-center text-center justify-center p-3">
        <LoadingDots />
    </div>
)
const dynamicProps = {
    loading: Loading,
}
const SignUpView = dynamic(() => import('../auth/SignUpView'), {
    ...dynamicProps,
})

const ForgotPassword = dynamic(
    () => import('../auth/ForgotPassword'),
    {
        ...dynamicProps,
    }
)
// const Modal = dynamic(() => import('@components'), {
//     ...dynamicProps,
//     ssr: false,
// })
const ModalView = ({
    modalView,
    closeModal,
}) => {
    return (
        <Modal onClose={closeModal}>
            {modalView === 'LOGIN_VIEW' && <LoginView />}
            {modalView === 'SIGNUP_VIEW' && <SignUpView />}
            {modalView === 'FORGOT_VIEW' && <ForgotPassword />}
        </Modal>
    )
}
const ModalUI = () => {
    const { displayModal, closeModal, modalView } = useUI()
    return displayModal ? (
        <ModalView modalView={modalView} closeModal={closeModal} />
    ) : null
}

const Layout = ({ children, meta }) => {
    const router = useRouter()


    return (
        <div className='overflow-hidden relative'>
            <Meta {...meta} />
            <>
                {router.pathname !== '/404' && (
                    <Navbar />
                )}
                {children}
                {router.pathname !== '/404' && (
                    <Footer />
                )}
            </>
            <ModalUI />
        </div>
    )
}

export default Layout
