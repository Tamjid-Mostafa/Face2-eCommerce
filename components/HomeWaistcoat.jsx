import Link from 'next/link';
import React from 'react'

export default function HomeWaistcoat() {
    return (
        <div className='h-[500px] hover:border-[1px] duration-200 ease-in hover:border-black'>
            <Link href="">
                <img className='h-full w-full' src="https://i.ibb.co/JnjZ13d/mens-suit-vest-guide-1080x675.jpg" alt="" />
                <div className='-mt-20 ml-7'>
                    <h2 className='uppercase font-bold text-white'>Waistcoat Collection</h2>
                </div>
            </Link>
        </div>
    )
}
