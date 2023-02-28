import Link from 'next/link';
import React from 'react';

const FindUs = () => {

    const outlets = [
        {
            name: "Mirpur Branch",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhaka (Oppposite of Metro Rail 258 Number Pillar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
        {
            name: "Lakshipur Branch",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhakar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
        {
            name: "Uttara Branch",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhaka (Oppposite of Metro Rail 258 Number Pillar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
        {
            name: "Golshan Branch",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhaka (Oppposite of Metro Rail 258 Number Pillar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
        {
            name: "Banani Branch",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhaka (Oppposite of Metro Rail 258 Number Pillar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
    ]

    return (
        <div className='text-white bg-black py-16'>
            <h1 className="text-4xl text-center font-semibold uppercase">find us</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-14 px-[5%]'>
                {
                    outlets.map((outlet, i) => (
                        <div key={i} className={`font-semibold ${outlets.length - 1 == i ? "" : "border-dotted border-b-2 pb-3 md:border-b-0 md:border-r-2 pr-2"}  `}>
                            <h1 className={`text - xl font - semibold my - 3`}>{outlet.name}</h1>
                            <p className='text-justify'>{outlet.location}</p>
                            <p className='my-2'>Tel : {outlet.phone}</p>
                            <p>Shopping Hour: {outlet.openingHour}</p>
                        </div>
                    ))
                }
            </div>
            <span className="flex justify-center mt-10">
                <Link href={``} className='py-2 px-10 font-semibold border-2 hover:bg-white hover:text-black duration-700'>See All </Link>
            </span>
        </div>
    );
};

export default FindUs;