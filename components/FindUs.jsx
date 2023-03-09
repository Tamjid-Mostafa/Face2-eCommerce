import Link from 'next/link';
import React from 'react';

const FindUs = () => {



    return (
        <div className="bg-[url('https://i.ibb.co/8MTHyPp/footer-bg-one.png')] py-32 mt-12">

            <span className="flex justify-center mt-10">
                <Link href={`/DisplayCenter`} className='text-md md:text-lg font-bold py-2 px-5 md:px-10 border-2 bg-white hover:bg-transparent hover:text-black duration-500 uppercase shadow-md tracking-[3.2px]'>find your display center </Link>
            </span >
        </div >
    );
};

export default FindUs;