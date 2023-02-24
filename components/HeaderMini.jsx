import React from 'react'

const HeaderMini = () => {
    return (
        <div className='border-b '>
            <div className='
        mx-5 flex h-6 max-w-screen-xl items-center justify-between xl:mx-auto 
          ' >

                <div>{" "}</div>
                <div className='flex justify-between flex-wrap w-1/2' >
                    <div>Profile</div>
                    <div>Wishlist (0)</div>
                    <div>Compare (0)</div>
                    <div>Orders (0)</div>
                    <div>Checkout</div>
                    <div>LOGIN</div>
                    <div>LOGOUT</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMini