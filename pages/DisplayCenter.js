import React from 'react';

const DisplayCenter = () => {
    const outlets = [
        {
            name: "Mirpur Branch",
            image: "https://i.ibb.co/hyq8fv3/outlet-1.jpg",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhaka (Oppposite of Metro Rail 258 Number Pillar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
        {
            name: "Lakshipur Branch",
            image: "https://i.ibb.co/ws0VHVT/outlet-2.jpg",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhakar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
        {
            name: "Uttara Branch",
            image: "https://i.ibb.co/GcK5xZ0/outlet-3.jpg",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhaka (Oppposite of Metro Rail 258 Number Pillar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
        {
            name: "Golshan Branch",
            image: "https://i.ibb.co/ws0VHVT/outlet-2.jpg",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhaka (Oppposite of Metro Rail 258 Number Pillar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
        {
            name: "Banani Branch",
            image: "https://i.ibb.co/n8Rq2FF/outlet-5.jpg",
            location: "2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhaka (Oppposite of Metro Rail 258 Number Pillar)",
            phone: "01758112822",
            openingHour: "10.00am - 10.00pm"
        },
    ]
    return (

        <div className='mt-60'>
            <div className='bg-[#f7f7f7] py-[70px] px-[7%]'>
                <h1 className="text-3xl md:text-5xl"><span className='font-bold uppercase'>Display </span><span className='font-semibold uppercase md:text-[45px]'>Center</span></h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12  px-[7%]'>
                {
                    outlets.map(outlet => (
                        <div key={outlet.name}>
                            <article className="mx-auto shadow-xl bg-cover bg-center  transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{ backgroundImage: `url(${outlet.image})` }}>
                                <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pt-64  hover:bg-opacity-75 transform duration-300">
                                    <h1 className="text-white text-3xl mb-3 transform translate-y-[200px] group-hover:translate-y-0 duration-300">
                                        {outlet.name}
                                    </h1>
                                    <div className="w-full h-2 bg-amber-500 rounded-full mb-5 transform translate-y-[210px] group-hover:translate-y-0 duration-300">
                                    </div>
                                    <div className='mb-6 min-h-[200px]'>
                                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                            <strong>Address: </strong> <span>{outlet.location}</span>
                                        </p>
                                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                            <strong>Business Hours: </strong> <span>{outlet.openingHour}</span>
                                        </p>
                                        <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                                            <strong>Contact: </strong> <span>{outlet.phone}</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <div>



                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DisplayCenter;