import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePanjabi = () => {
    return (
        <div className='mt-12 grid lg:grid-cols-2 grid-cols-1 space-x-[1px]'>
            <div className='w-full h-fit'>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="" src=" https://i.ibb.co/F04t1Sp/Luxury-1.jpg" alt="" />
                <div className="text-center group my-3">
                    <Link href={``} >
                        Luxury Panjabi
                        <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span>
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="" src="https://i.ibb.co/prWc4H3/Platinum-1.jpg" alt="" />
                <div className="text-center group my-3"><Link href={``} >Platinum Panjabi <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
            </div>
        </div >
    );
};

export default HomePanjabi;