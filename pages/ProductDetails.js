import React from 'react'

export default function ProductDetails() {
    return (
        <div className='w-[1480px] mx-auto grid gap-3 grid-cols-2'>
            <div>
                <img src="https://i.ibb.co/jLFK2Bg/female.jpg" alt="" />
            </div>
            <div>
                <h1 className="text-2xl font-semibold uppercase">bloom cotton dress</h1>
                <h3>$155</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, modi explicabo sunt accusamus minima non! Voluptatem eius quod animi beatae.</p>
                <h4>Select size</h4>
                <div>
                    <button className="px-5 py-2" style={{ " border": "2px solid black" }}>L</button>
                    <button className="px-5 py-2" style={{ " border": "2px solid black" }}>M</button>
                    <button className="px-5 py-2" style={{ " border": "2px solid black" }}>XL</button>
                    <button className="px-5 py-2" style={{ " border": "2px solid black" }}>xxL</button>
                </div>
                <button>Add To Cart</button>
            </div>
        </div >
    )
}
