import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const HomeBannerTwo = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <Image
                width={1920}
                height={1080}
                loading="lazy"
                className="" src="https://i.ibb.co/jGFKDF3/atou-1.jpg" alt="" />
            <div className="text-center group my-3"><Link href={``} >Perfumes <span className='ml-3 text-xl font-bold group-hover:ml-5 duration-300'>{">>"}</span></Link></div>
        </div>
    );
};

export default HomeBannerTwo;