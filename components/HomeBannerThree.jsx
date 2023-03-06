import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeBannerThree = () => {
    return (
        <div className='mt-6'>
            <Image
                width={1920}
                height={1080}
                loading="lazy"
                className="" src="https://i.ibb.co/B3dDpw7/watches.jpg" alt="" />
            <div className="text-center group my-3"><Link href={``} >Watches <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
        </div>
    );
};

export default HomeBannerThree;