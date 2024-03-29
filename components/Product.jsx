import React, { useEffect, useState, useRef } from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation } from 'swiper';
import 'swiper/css/navigation';
import Link from 'next/link';



const Product = () => {
  const [panjabies, setPanjabies] = useState([]);
  useEffect(() => {
    fetch('panjabi.json')
      .then(res => res.json())
      .then(data => setPanjabies(data))
  }, []);


  return (
    <div className=''>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          },
        }}
        freeMode={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode, Autoplay, Navigation]}
        className="mySwiper"
      >
        {
          panjabies.map((panjabi, i) => <SwiperSlide key={i}><ProductCard
            product={panjabi}
          /></SwiperSlide>)
        }
      </Swiper>
    </div>


  )
}

export default Product