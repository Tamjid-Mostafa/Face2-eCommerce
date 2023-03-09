import Link from 'next/link';
import React, { useRef, useState } from "react";
import { FaFacebookF, FaFacebookMessenger, FaWhatsapp, FaTwitter } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FindUs, Product } from '@/components';

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
        <div className=''>
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
                        <div className='uppercase text-center mx-auto mt-12'>
                            <Link className='bg-black text-white px-4 py-3' href="">
                                add to cart
                            </Link>
                        </div>
                        <div className='uppercase text-center mx-auto mt-8'>
                            <Link className='border-2 border-black p-3' href="">
                                Find in store
                            </Link>
                        </div>
                        <div className='flex gap-5 justify-center mt-12'>
                            <Link href="">
                                <FaFacebookF className="text-" />
                            </Link>
                            <Link href="">
                                <FaFacebookMessenger className="text-sky-600" />
                            </Link>
                            <Link href="">
                                <FaWhatsapp className="text-emerald-600" />
                            </Link>
                            <Link href="">
                                <FaTwitter className="text-sky-600" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-16  shadow-md shadow-gray-300 px-28 py-16'>
                    <div className='grid gap-5 grid-cols-2'>
                        <div>
                            <h1 className='text-lg font-semibold leading-10'>Description</h1>
                            <p className='lg:w-2/3 text-justify'>The Luxury Collection comprises of minimalistic, impeccable designs crafted from the world’s finest materials.</p>
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold leading-10'>Details</h1>
                            <ul>
                                <li>Semi-Formal / Casual</li>
                                <li>Contrast Collar & 6cm Cuffs</li>
                                <li>Contrast Upper Chest</li>
                                <li>Regular Fit</li>
                                <li>Face2 Signature Buttons</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold leading-10'>Material</h1>
                            <ul>
                                <li>100% Ultra Fine Cotton</li>
                                <li>100s Two-Ply</li>
                                <li>Yarn Dyed Herringbone Weaved</li>
                                <li>GSM 105 </li>
                                <li>Fabric Finish : Liquid Ammonia + Easy Care</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-lg font-semibold leading-10'>Care</h1>
                            <ul>
                                <li>Dry clean recommended</li>
                                <li>Wash separately with cool water</li>
                                <li>Do not bleach</li>
                                <li>Do not tumble dry</li>
                                <li>Iron medium heat</li>
                                <li>Do not iron over the label</li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >
            <div className='my-12'>
                <h1 className='text-xl uppercase text-center'>you may also like</h1>
                <hr className="w-52 mt-2 mx-auto" />
                <Product />
                <FindUs />
            </div>
        </div >
    )
}
