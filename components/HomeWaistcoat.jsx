/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'

export default function HomeWaistcoat() {
    return (
        <div className='mt-12 grid grid-cols-2 gap-1'>
            <div className=''>
                <img className="h-[450px]" src=" https://i.ibb.co/1MkMkjz/waistcoat-banner-1.jpg" alt="" />
                <div className="text-center group my-3"><Link href={``} >Waistcoat <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
            </div>
            <div>
                <img className="h-[450px]" src=" https://i.ibb.co/3hpQXBM/waistcoat-banner-2.jpg" alt="" />
                <div className="text-center group my-3"><Link href={``} >Waistcoat <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
            </div>
        </div >
    )
}
