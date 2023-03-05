import Link from 'next/link'
import React from 'react'

export default function Button({ children }) {
    return (
        <div>
            <Link href="" className='bg-black text-gray-300 p-5 hover:text-white hover:border-2 hover:border-amber-400'>
                {children}
            </Link>
        </div >
    )
}
