import Link from 'next/link'
import React from 'react'

export default function Button({ children }) {
    return (
        <div className='bg-transparent text-gray-300 p-5 hover:text-white hover:border-2 duration-75 hover:border-amber-400 w-[350px] mx-auto'>
            <Link href="">
                {children}
            </Link>
        </div >
    )
}
