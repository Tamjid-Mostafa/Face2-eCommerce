import React from 'react'

import { useRouter } from 'next/router'
import Footer from '../Footer'
import Meta from './meta'
import { Navbar } from '..'
import Sidebar from '../ui/Sidebar'
import { CartSidebarView } from '../cart'
import Modal from '../ui/Modal'
import LoginView from '../auth/LoginView'
import { useUI } from '../ui/context'


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
const ModalView = ({
    modalView,
    closeModal,
}) => {
    return (
        <Modal onClose={closeModal}>
            {modalView === 'LOGIN_VIEW' && <LoginView />}
            {/* {modalView === 'SIGNUP_VIEW' && <SignUpView />}
        {modalView === 'FORGOT_VIEW' && <ForgotPassword />} */}
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
