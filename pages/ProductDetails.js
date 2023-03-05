import Link from 'next/link';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductDetails() {
    const productsImg = [
        {
            img: "https://i.ibb.co/zhbW5SR/one-Panjabi.jpg"
        },
        {
            img: "https://i.ibb.co/7QnmHR1/two-Panjabi.jpg"
        },
        {
            img: "https://i.ibb.co/Vpxn8nN/three-Panjabi.jpg"
        }
    ]
    return (
        <div className='m-6 w-[80%] mx-auto'>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 mt-48'>
                <div className=''>
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={false}
                        slidesPerGroupSkip={1}
                        grabCursor={true}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            769: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                        }}
                        scrollbar={true}
                        navigation={true}
                        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {
                            productsImg.map(product => <SwiperSlide key={product.img} >
                                <img className="h-[700px] w-full" src={product.img} />
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className='w-2/3 mx-auto'>
                    <div className='text-center leading-9'>
                        <h1>Platinum Panjabi</h1>
                        <p className='text-gray-500'>Code: 232011</p>
                        <h3>BDT 6,450</h3>
                    </div>
                    <div className='mt-4 text-center'>
                        <div className='grid grid-cols-2'>
                            <div>
                                <h4>Select Size</h4>
                            </div>
                            <div className='text-gray-600 underline'>
                                <Link href=""> View Size Guide</Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="px-5 py-2  focus:bg-black focus:text-white  uppercase" type='submit'>xs</button>
                            <button className="px-5 py-2  focus:bg-black focus:text-white  uppercase" type='submit'>s</button>
                            <button className="px-5 py-2  focus:bg-black focus:text-white  uppercase" type='submit'>m</button>
                            <button className="px-5 py-2  focus:bg-black focus:text-white  uppercase" type='submit'>l</button>
                            <button className="px-5 py-2  focus:bg-black focus:text-white  uppercase" type='submit'>xl</button>
                            <button className="px-5 py-2  focus:bg-black focus:text-white  uppercase" type='submit'>2xl</button>
                            <button className="px-5 py-2  focus:bg-black focus:text-white  uppercase" type='submit'>3xl</button>
                        </div>
                        <div className='w-2/3 mx-auto bg-slate-900 h-[1px] my-4'></div>
                    </div>
                    <div className='uppercase text-center mx-auto mt-6'>
                        <Link className='bg-black text-white px-4 py-3' href="">
                            add to cart
                        </Link>
                    </div>
                    <div className='uppercase text-center mx-auto mt-8'>
                        <Link className='border-2 border-black p-3' href="">
                            Find in store
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}
