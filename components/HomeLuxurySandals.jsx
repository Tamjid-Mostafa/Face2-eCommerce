import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeLuxurySandals = () => {
    return (
        <div className=' grid lg:grid-cols-3 grid-cols-1 space-x-[1px]'>
            <div className='w-full h-fit'>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="" src=" https://i.ibb.co/wSzN4hX/lunury-sandels.jpg" alt="" />
                <div className="text-center group my-3">
                    <Link href={``} >
                        Luxury Sandals
                        <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span>
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="" src="https://i.ibb.co/ccpSgqq/luxury-sendels.jpg" alt="" />
                <div className="text-center group my-3"><Link href={``} >Luxury Sandals <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
            </div>
            <div>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className="" src="https://i.ibb.co/6DL787s/luxury-sendels-2.jpg" alt="" />
                <div className="text-center group my-3"><Link href={``} >Luxury Sandals <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
            </div>
        </div >
    );
};

export default HomeLuxurySandals;