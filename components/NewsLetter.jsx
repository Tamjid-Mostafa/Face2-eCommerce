import React from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import Link from 'next/link';


const NewsLetter = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='md:mx-[10%] my-10 bg-white border-4 py-12 duration-700'>
            <h2 className="text-center text-blackA10 font-semibold text-3xl uppercase tracking-wide">NewsLetter</h2>
            <p className="text-slate-500 text-center text-lg py-4 bg-slate-200 mt-5">Keep yourself updated with the latest Face2 News, Fashion Updates and Blogs! Subscribe here! It’s simple</p>
            <Collapsible.Root className="w-full duration-700" open={open} onOpenChange={setOpen}>
                <Collapsible.Content>
                    <div className='flex justify-center border-2 w-[350px] mx-auto mt-10 pl-4 duration-700'>
                        <input className="w-full outline-none" placeholder="Enter Your email here" type=" text" />
                        <button className='bg-black hover:bg-red-600 duration-500 text-white py-2 px-5'>Subscribe</button>
                    </div>

                </Collapsible.Content>
                <div className='flex justify-center mt-5'>

                    <Collapsible.Trigger asChild>
                        <div className="">
                            {open ?
                                <button className='py-2  px-10 font-semibold border-2 bg-black text-white hover:bg-white hover:text-black duration-500'>Subscribe </button>
                                : <span className="text-center mt-10">
                                    <button className='py-2 px-10 font-semibold border-2 bg-black text-white hover:bg-white hover:text-black duration-500'>Subscribe </button>
                                </span>}
                        </div>
                    </Collapsible.Trigger>
                </div>




            </Collapsible.Root >



        </div >
    );
};

export default NewsLetter;