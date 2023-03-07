import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

const WaistcoatHome = () => {

    const [waistcoat, setWaistcoat] = useState([]);

    useEffect(() => {
        fetch('/waistcoat.json')
            .then(res => res.json())
            .then(data => setWaistcoat(data))
    }, [])
    return (
        <div className=''>
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    },
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    waistcoat.map((panjabi, i) => <SwiperSlide key={i}><ProductCard

                        product={panjabi}
                    ></ProductCard></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default WaistcoatHome;