import React from 'react'
import cn from 'clsx'
import s from './Layout.module.css'
import { useRouter } from 'next/router'
import Footer from '../Footer'
import Meta from './meta'
import { Navbar } from '..'
import Sidebar from '../ui/Sidebar'
import LoginView from '../auth/LoginView'
import { useUI } from '../ui/context'
import CartSidebarView from '../cart/CartSidebarView'
import dynamic from 'next/dynamic'
import LoadingDots from '../ui/LoadingDots'
import Header from '../Navbar/Header'


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
const OTPView = dynamic(
    () => import('../auth/OTPView'),
    {
        ...dynamicProps,
    }
)
const Modal = dynamic(() => import('../ui/Modal'), {
    ...dynamicProps,
    ssr: true,
})
const ModalView = ({
    modalView,
    closeModal,
}) => {
    return (
        <Modal onClose={closeModal}>
            {modalView === 'OTP_VIEW' && <OTPView />}
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
        <div className={cn(s.root)}>
            <Meta {...meta} />
            <>
                {router.pathname !== '/404' && (
                    <Header />
                )}
                {children}
                {router.pathname !== '/404' && (
                    <Footer />
                )}
            </>
            <ModalUI />
            <SidebarUI />
        </div>
    )
}

export default Layout
