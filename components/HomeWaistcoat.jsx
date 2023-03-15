/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function HomeWaistcoat() {
    return (
        <div className=' grid lg:grid-cols-2 grid-cols-1 space-x-[1px]'>
            <div className='w-full h-fit'>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="" src="https://i.ibb.co/1MkMkjz/waistcoat-banner-1.jpg" alt="" />
                <div className="text-center group my-3">
                    <Link href={``} >
                        Waistcoat
                        <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span>
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="" src="https://i.ibb.co/3hpQXBM/waistcoat-banner-2.jpg" alt="" />
                <div className="text-center group my-3"><Link href={``} >Waistcoat <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
            </div>
        </div >
    )
}
