import Button from '@/components/Button'
import FavouriteButton from '@/components/FavouriteButton'
import Image from 'next/image'
import React from 'react'
import { HiOutlineCheckCircle } from "react-icons/hi2";

export default function ProductDetails() {
    return (
        <div className='m-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img src="https://i.ibb.co/jLFK2Bg/female.jpg" alt="" />
                </div>
                <div className='my-10 lg:pt-32 lg:-ml-12 py-5 bg-gray-200 px-11 text-black'>
                    <h1 className="text-3xl font-bold uppercase leading-10">bloom cotton dress</h1>
                    <h3 className='text-2xl font-semibold leading-10'>$155</h3>
                    <p className='w-2/3 text-justify'>This dress is made ffrom white fabric and white cheetah-spot print fabric. It has a long narrow skirt that flares at at the bottom with a corset about the waist and short gathered sleeves.</p>
                    <h4 className='text-lg font-semibold leading-10'>Select size</h4>
                    <div className="flex gap-3">
                        <button className="px-5 py-2 border-2 border-primary focus:shadow-[0_0_0_2px] focus:shadow-black" type='submit'>L</button>
                        <button className="px-5 py-2 border-2 border-primary focus:shadow-[0_0_0_2px] focus:shadow-black" type='submit'>M</button>
                        <button className="px-5 py-2 border-2 border-primary focus:shadow-[0_0_0_2px] focus:shadow-black" type='submit'>XL</button>
                        <button className="px-5 py-2 border-2 border-primary focus:shadow-[0_0_0_2px] focus:shadow-black" type='submit'>XXL</button>
                    </div>
                    <div className='my-5 flex gap-3 items-center'>
                        <Button></Button>
                        <FavouriteButton></FavouriteButton>
                    </div>
                    <div className='w-full bg-slate-900 h-[1px] my-4'></div>
                    <div>
                        <h3 className="text-2xl font-semibold leading-9">
                            Details
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 leading-9'>
                            <p className='flex items-center'><HiOutlineCheckCircle className='mr-1' />Fits true to size</p>
                            <p className='flex items-center'><HiOutlineCheckCircle className='mr-1' />S22D319EST</p>
                            <p className='flex items-center'><HiOutlineCheckCircle className='mr-1' />Made in BD</p>
                            <p className='flex items-center'><HiOutlineCheckCircle className='mr-1' />98% Slik 2% Elastane Spandex</p>
                            <p className='flex items-center'><HiOutlineCheckCircle className='mr-1' />Dry Clean Only</p>
                            <p className='flex items-center'><HiOutlineCheckCircle className='mr-1' />Delivery (5-7 days)</p>
                        </div>
                    </div>
                    <div className='w-full bg-slate-900 h-[1px] my-4'></div>
                    <div>
                        <h3 className='text-2xl font-semibold leading-9'>Customer Service </h3>
                        <p className='w-2/3 text-justify'>Our online customer care team is available Monday through Friday, 10AM-6PM. We are closed on weekends and national holidays. Please contact us. We would happy to assist you.</p>
                        <h4 className='leading-9'>Call: +88018374754</h4>
                        <h4>Email: customerservice@facetwo.com</h4>
                    </div>
                </div>
            </div>
        </div >
    )
}
