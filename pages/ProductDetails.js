import Link from 'next/link'
import React, { useRef, useState } from 'react'
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaWhatsapp,
  FaTwitter,
} from 'react-icons/fa'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FindUs, Product } from '@/components'
import DotIcon from '@/components/DotIcon'
import Image from 'next/image'

export default function ProductDetails() {
  const productsImg = [
    {
      img: 'https://i.ibb.co/zhbW5SR/one-Panjabi.jpg',
    },
    {
      img: 'https://i.ibb.co/7QnmHR1/two-Panjabi.jpg',
    },
    {
      img: 'https://i.ibb.co/Vpxn8nN/three-Panjabi.jpg',
    },
  ]
  return (
    <div className="mt-64">
      <div className="mx-auto w-[80%]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="">
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
              {productsImg.map((product) => (
                <SwiperSlide key={product.img}>
                  <Image
                    width={320}
                    height={320}
                    quality="85"
                    alt=""
                    className="h-[700px] w-full"
                    src={product.img}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mx-auto w-2/3">
            <div className="text-center leading-9">
              <h1>Platinum Panjabi</h1>
              <p className="text-gray-500">Code: 232011</p>
              <h3>BDT 6,450</h3>
            </div>
            <div className="mt-4 text-center">
              <div className="grid grid-cols-2">
                <div>
                  <h4>Select Size</h4>
                </div>
                <div className="text-gray-600 underline">
                  <Link href=""> View Size Guide</Link>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="px-5 py-2  uppercase focus:bg-black  focus:text-white"
                  type="submit"
                >
                  xs
                </button>
                <button
                  className="px-5 py-2  uppercase focus:bg-black  focus:text-white"
                  type="submit"
                >
                  s
                </button>
                <button
                  className="px-5 py-2  uppercase focus:bg-black  focus:text-white"
                  type="submit"
                >
                  m
                </button>
                <button
                  className="px-5 py-2  uppercase focus:bg-black  focus:text-white"
                  type="submit"
                >
                  l
                </button>
                <button
                  className="px-5 py-2  uppercase focus:bg-black  focus:text-white"
                  type="submit"
                >
                  xl
                </button>
                <button
                  className="px-5 py-2  uppercase focus:bg-black  focus:text-white"
                  type="submit"
                >
                  2xl
                </button>
                <button
                  className="px-5 py-2  uppercase focus:bg-black  focus:text-white"
                  type="submit"
                >
                  3xl
                </button>
              </div>
              <div className="mx-auto my-4 h-[1px] w-2/3 bg-slate-900"></div>
            </div>
            <div className="mx-auto mt-12 text-center uppercase">
              <Link className="bg-black px-4 py-3 text-white" href="">
                add to cart
              </Link>
            </div>
            <div className="mx-auto mt-8 text-center uppercase">
              <Link className="border-2 border-black p-3" href="">
                Find in store
              </Link>
            </div>
            <div className="mt-12 flex justify-center gap-5">
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
        <div className="mt-16  px-5 py-3 shadow-md shadow-gray-300 lg:px-28 lg:py-16">
          <div className="grid gap-5 lg:grid-cols-2">
            <div>
              <h1 className="text-lg font-semibold leading-10">Description</h1>
              <p className="lg:w-2/3 lg:text-justify">
                The Luxury Collection comprises of minimalistic, impeccable
                designs crafted from the world’s finest materials.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-10">Details</h1>
              <ul>
                <li className="flex items-center">
                  <DotIcon />
                  Semi-Formal / Casual
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Contrast Collar & 6cm Cuffs
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Contrast Upper Chest
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Regular Fit
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Face2 Signature Buttons
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-10">Material</h1>
              <ul>
                <li className="flex items-center">
                  <DotIcon />
                  100s Two-Ply
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  100% Ultra Fine Cotton
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Yarn Dyed Herringbone Weaved
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  GSM 105{' '}
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Fabric Finish : Liquid Ammonia + Easy Care
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-10">Care</h1>
              <ul>
                <li className="flex items-center">
                  <DotIcon />
                  Dry clean recommended
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Wash separately with cool water
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Do not bleach
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Do not tumble dry
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Iron medium heat
                </li>
                <li className="flex items-center">
                  <DotIcon />
                  Do not iron over the label
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-center text-xl uppercase">you may also like</h1>
        <hr className="mx-auto mt-2 w-52" />
        <Product />
        <FindUs />
      </div>
    </div>
  )
}
