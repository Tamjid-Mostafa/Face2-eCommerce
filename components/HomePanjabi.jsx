import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePanjabi = () => {
    return (
        <div className='mt-12 grid lg:grid-cols-2 grid-cols-1 space-x-[1px]'>

            <div className='w-full h-fit'>
                <Link href={``} >
                    <Image
                        width={1920}
                        height={1080}
                        priority
                        className=""
                        src=" https://res.cloudinary.com/dtoj9n94u/image/upload/v1678197548/Face2/PP-140aa_v1asz2.jpg "
                        alt=""
                    />
                    <div className="text-center group my-3">

                        Luxury Panjabi
                        <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span>

                    </div>
                </Link>
            </div>
            <div className='w-full h-fit'>
                <Image
                    width={1920}
                    height={1080}
                    loading="lazy"
                    className=""
                    src="https://res.cloudinary.com/dtoj9n94u/image/upload/v1678197570/Face2/PP-141_me6qur.jpg"
                    alt="" />
                <div className="text-center group my-3">
                    <Link href={``} >
                        Platinum Panjabi
                        <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>
                            {">>"}
                        </span>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default HomePanjabi;