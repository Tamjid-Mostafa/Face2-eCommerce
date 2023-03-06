import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeLuxuryShoes = () => {
    return (
        <div className=' grid lg:grid-cols-2 grid-cols-1 space-x-[1px]'>
            <div className='w-full h-fit'>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="" src=" https://i.ibb.co/rw8FxLJ/home-Shoes.jpg" alt="" />
                <div className="text-center group my-3">
                    <Link href={``} >
                        Luxury Shoes
                        <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span>
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="" src="https://i.ibb.co/8mrnF4B/home-Shoes-2.jpg" alt="" />
                <div className="text-center group my-3"><Link href={``} >Luxury Sports Shoes <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
            </div>
        </div >
    );
};

export default HomeLuxuryShoes;