/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'

export default function HomeWaistcoat() {
    return (
        <div className='h-[500px] duration-500 ease-in hover:border-black hover:scale-x-105'>
            <Link href="">
                <img className='h-full w-full' src="https://i.ibb.co/JnjZ13d/mens-suit-vest-guide-1080x675.jpg" alt="" />
                <div className='-mt-20 ml-10'>
                    <h2 className='uppercase font-bold text-white'>Waistcoat Collection</h2>
                </div>
            </Link>
        </div>
    )
}
