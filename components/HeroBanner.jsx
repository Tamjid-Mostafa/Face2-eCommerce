import Link from 'next/link';
import Tooltip from '@/shared/tooltip';
import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxPinRight } from 'react-icons/rx'

export default function HeroBanner() {
    const slides = [
        {
            image: "https://i.ibb.co/YQb8Q6b/Hero.jpg",
            heading: "Convenient easy way of learning new skills!",
            text: "The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail "
        },
        {
            image: "https://i.ibb.co/gyPWThn/herosTwo.jpg",
            heading: "It's time to amplify your online Career",
            text: "The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail "
        },
        {
            image: "https://i.ibb.co/2WYS5sc/updfodkf.jpg",
            heading: "Convenient easy way of learning new skills!",
            text: "The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail "
        },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide)
    }

    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newSlide = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex)
    }

    // setInterval(() => {
    //     setCurrentSlide(currentSlide + 1);
    //     console.log('from out side', currentSlide)
    //     if (currentSlide === slides.length - 1) {
    //         console.log(currentSlide)
    //         setCurrentSlide(0)
    //     }
    // }, 5000);
    return (
        <div className='h-[600px] lg:h-[100vh] w-full m-auto  relative group'>
            <>
                <div
                    style={{
                        backgroundImage: `url(${slides[currentSlide].image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
                    }}
                    className="w-full h-full  bg-center bg-cover duration-500 text-center items-center text-white">
                    <div className="md:w-[70%] mx-auto pt-32 ">
                        {/* <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{slides[currentSlide].heading}</h1>
                    <p className="md:text-md my-5">{slides[currentSlide].text}</p> */}
                        <div className="flex justify-center absolute bottom-[15%] left-[25%] lg:left-[45%]">
                            <Link href="" className='px-5 py-3 bg-cyan-400 rounded-3xl flex items-center justify-center w-44 uppercase font-bold'>Shop now <RxPinRight className='ml-2 text-2xl'></RxPinRight></Link>
                        </div>
                    </div>
                </div>
            </>

            {/* left arrow */}
            <Tooltip content="Previous">
                <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl bg-black/20 p-4 rounded-full text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30}></BsChevronCompactLeft>
                </div>
            </Tooltip>
            {/* right arrow */}
            <Tooltip content="Next">
                <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl bg-black/20 p-4 rounded-full text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30}></BsChevronCompactRight>
                </div>
            </Tooltip>

            {/* dots */}
            {/* <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                        <RxDotFilled className={`${currentSlide === slideIndex ? "text-white text-3xl" : ""}`} />
                    </div>
                ))}
            </div> */}
        </div >
    )
}
