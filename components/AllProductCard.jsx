import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllProductCard = ({ product }) => {
    const { Image_1, image_2, name, price } = product;
    return (
        <div>
            <Link href="/ProductDetails">
                < article className="p-5 transform duration-300  cursor-pointer  shadow-2xl group">
                    <div className='relative overflow-hidden'>
                        <Image
                            width={1920}
                            height={1080}
                            loading="lazy"
                            class="absolute"
                            src={image_2} alt="" />
                        <Image
                            width={1920}
                            height={1080}
                            loading="lazy"
                            class="relative transform duration-500 group-hover:opacity-0"
                            src={Image_1} alt="" />

                    </div>
                    <div className='my-3'>
                        <h4 className="text-xl">{name}</h4>
                        <p className="text-md font-semibold">BDT {price}</p>
                    </div>
                </article>
            </Link>
        </div >
    );
};
export default AllProductCard;