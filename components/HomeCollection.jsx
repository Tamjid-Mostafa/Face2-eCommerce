import Link from 'next/link';
import React from 'react'

export default function HomeCollection() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='h-[900px]'>
                <Link href="">
                    <img className='h-full w-full' src="https://i.ibb.co/hYvBW7j/panjabi.jpg" alt="" />
                    <div className='-mt-20 ml-7'>
                        <h2 className='uppercase font-semibold text-white'>Panjabi's collection</h2>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col'>
                <div className='h-[450px]'>
                    <Link href="">
                        <img className='h-full w-full' src="https://i.ibb.co/QCN3nsd/men.jpg" alt="" />
                        <div className='-mt-20 ml-7'>
                            <h2 className='uppercase font-semibold text-white'>men's collection</h2>
                        </div>
                    </Link>
                </div>
                <div className='h-[450px]'>
                    <Link href="">
                        <img className='h-full w-full' src="https://i.ibb.co/4ScqZBv/women.jpg" alt="" />
                        <div className='-mt-20 ml-7'>
                            <h2 className='uppercase font-semibold text-white collection-text'>women's collection</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}
