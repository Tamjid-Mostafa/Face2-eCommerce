import Link from 'next/link';
import Tooltip from '@/shared/tooltip';
import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxPinRight } from 'react-icons/rx'
import Button from './Button';

export default function HeroBanner() {

    return (
        <div className='h-[600px] lg:h-[100vh] w-full m-auto  relative group'>
            <div style={{
                backgroundImage: "url('https://i.ibb.co/2W9hfK1/Web-Banner.webp')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
            }} className="w-full h-full  bg-center bg-cover text-center items-center text-white">
                <div className="md:w-[70%] mx-auto pt-96 uppercase">
                    <Button>Eid collection</Button>
                </div>
                <div className="mt-3 uppercase">
                    <Button>New Arrivals</Button>
                </div>
            </div>
        </div >
    )
}
