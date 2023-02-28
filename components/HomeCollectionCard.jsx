import React from 'react'
import Link from 'next/link';

export default function HomeCollectionCard({ collection }) {
    const { name, image } = collection;
    return (
        <div>
            <div className='h-[640px] mx-auto shadow-xl bg-cover bg-center transform duration-500 cursor-pointer group hover:scale-x-105 overflow-hidden' style={{
                backgroundImage: `url(${image})`
            }}>
                < Link href="" >
                    <div className="bg-black bg-opacity-0  px-10 flex flex-wrap flex-col pt-[555px] hover:bg-opacity-40  transform duration-300">
                        <div className='hidden group-hover:block'>
                            <h1 className="text-white text-3xl mb-5 transform font-semibold uppercase translate-y-20 group-hover:translate-y-0 duration-300">
                                {name}
                            </h1>
                            <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                            </div>
                        </div>
                    </div>
                </Link>
            </div >
        </div >
    )
}
