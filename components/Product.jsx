import React, { useEffect, useState, useRef } from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css/navigation';
import Link from 'next/link';



const Product = () => {
  const [panjabies, setPanjabies] = useState([]);
  const [womensCollections, setWomensCollections] = useState([]);
  const [mensCollections, setMensCollections] = useState([]);

  useEffect(() => {
    fetch('panjabi.json')
      .then(res => res.json())
      .then(data => setPanjabies(data))
  }, [])

  useEffect(() => {
    fetch('women.json')
      .then(res => res.json())
      .then(data => setWomensCollections(data))
  }, [])

  useEffect(() => {
    fetch('men.json')
      .then(res => res.json())
      .then(data => setMensCollections(data))
  }, [])


  return (
    <Tabs.Root
      className="flex flex-col w-full relative"
      defaultValue="panjabiTab"
    >
      <Tabs.List className="shrink-0 flex border-b border-mauve6 " aria-label="Manage your account">
        <Tabs.Trigger
          className="bg-white px-5 h-[45px]  flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current   outline-none cursor-pointer focus:outline-none"
          value="panjabiTab"
        >
          Panjabi
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-white px-5 h-[45px]  flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current  outline-none  cursor-pointer focus:outline-none"
          value="menTab"
        >
          Men
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-white px-5 h-[45px]  flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current  outline-none  cursor-pointer focus:outline-none"
          value="womenTab"
        >
          Women
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        className="outline-none"
        value="panjabiTab"
      >
        <div className='absolute top-[-12px] -translate-x-0 translate-y-[50%] right-5 px-5 py-1 text-black hover:bg-slate-600 hover:text-white duration-500 border-2 rounded'>
          <Link href="/AllProducts" className=''>View All</Link>
        </div>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 5
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            panjabies.map(panjabi => <SwiperSlide key={panjabi.name}><ProductCard
              key={panjabi.name}
              product={panjabi}
            ></ProductCard></SwiperSlide>)
          }
        </Swiper>
      </Tabs.Content>
      <Tabs.Content
        className="grow bg-white rounded-b-md outline-none"
        value="menTab"
      >
        <div className='absolute top-[-12px] -translate-x-0 translate-y-[50%] right-5 px-5 py-1 text-black hover:bg-slate-600 hover:text-white duration-500 border-2 rounded'>
          <Link href="/mens" className=''>View All</Link>
        </div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 5
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {
            mensCollections.map(panjabi => <SwiperSlide key={panjabi.name}><ProductCard

              product={panjabi}
            ></ProductCard></SwiperSlide>)
          }
        </Swiper>
      </Tabs.Content>
      <Tabs.Content
        className="grow bg-white rounded-b-md outline-none"
        value="womenTab"
      >
        <div className='absolute top-[-12px] -translate-x-0 translate-y-[50%] right-5 px-5 py-1 text-black hover:bg-slate-600 hover:text-white duration-500 border-2 rounded'>
          <Link href="/women's" className=''>View All</Link>
        </div>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 5
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            womensCollections.map(panjabi => <SwiperSlide key={panjabi.name}><ProductCard
              product={panjabi}
            ></ProductCard></SwiperSlide>)
          }
        </Swiper>
      </Tabs.Content>
    </Tabs.Root >


  )
}

export default Product