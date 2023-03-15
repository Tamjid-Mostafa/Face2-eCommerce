import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePanjabi = () => {
    return (
        <div className='mt-12 grid lg:grid-cols-2 grid-cols-1 space-x-[1px]'>
            <div className='w-full h-fit'>
                <Image
                    height={540}
                    width={540}
                    quality="85"
                    className="h-full w-full"
                    src="https://res.cloudinary.com/dtoj9n94u/image/upload/v1678197548/Face2/PP-140aa_v1asz2.jpg"
                    alt={'Product Image'}
                />
                <div className="text-center group my-3">
                    <Link href={``} >
                        Luxury Panjabi
                        <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span>
                    </Link>
                </div>
            </div>
            <div className='w-full h-fit'>
                <Image
                    height={540}
                    width={540}
                    quality="85"
                    className="h-full w-full"
                    src="https://res.cloudinary.com/dtoj9n94u/image/upload/v1678197570/Face2/PP-141_me6qur.jpg" alt="" />
                <div className="text-center group my-3"><Link href={``} >Platinum Panjabi <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
            </div>

        </div >
    );
};

export default HomePanjabi;