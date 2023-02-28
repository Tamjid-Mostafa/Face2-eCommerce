import Button from '@/components/Button'
import FavouriteButton from '@/components/FavouriteButton'
import Image from 'next/image'
import React from 'react'

export default function ProductDetails() {
  return (
    <div className="m-6">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Image src="https://i.ibb.co/jLFK2Bg/female.jpg" alt="" />
        </div>
        <div className="my-10 -ml-12 bg-gray-200 p-6 text-black">
          <h1 className="text-3xl font-bold uppercase leading-10">
            bloom cotton dress
          </h1>
          <h3 className="text-2xl font-semibold leading-10">$155</h3>
          <p className="w-2/3 text-justify">
            This dress is made ffrom white fabric and white cheetah-spot print
            fabric. It has a long narrow skirt that flares at at the bottom with
            a corset about the waist and short gathered sleeves.
          </p>
          <h4 className="text-lg font-semibold leading-10">Select size</h4>
          <div className="flex gap-3">
            <button className="border-2 border-primary px-5 py-2" type="submit">
              L
            </button>
            <button className="border-2 border-primary px-5 py-2" type="submit">
              M
            </button>
            <button className="border-2 border-primary px-5 py-2" type="submit">
              XL
            </button>
            <button className="border-2 border-primary px-5 py-2" type="submit">
              XXL
            </button>
          </div>
          <div className="my-5 flex items-center gap-3">
            <Button></Button>
            <FavouriteButton></FavouriteButton>
          </div>
          <div>
            <h3 className="text-2xl font-semibold leading-9">
              Customer Service{' '}
            </h3>
            <p className="w-2/3 text-justify">
              Our online customer care team is available Monday through Friday,
              10AM-6PM. We are closed on weekends and national holidays. Please
              contact us. We would happy to assist you.
            </p>
            <h4 className="leading-9">Call: +88018374754</h4>
            <h4>Email: customerservice@facetwo.com</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
