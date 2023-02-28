import Link from 'next/link'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  const { name, image, price } = product

  return (
    <Link href="/ProductDetails">
      <div
        className="h-[500px] hover:border-[1px] duration-200 ease-in hover:border-black relative group cursor-pointer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-gradient-to-r from-orange-300 to-amber-100 border-t-[1px] group-hover:border-black duration-500 absolute bottom-0 w-full hidden group-hover:block ">
          <div className='flex items-center justify-between'>
            <div className='w-full px-4 text-black'>
              <h2 className="text-lg text ">{name}</h2>
              <p>Price: ${price}</p>
            </div>
            <div className="hover:bg-black border-l-[1px] border-black py-5 w-20 hover:text-white duration-500">
              <FaShoppingBag className='text-xl mx-auto'></FaShoppingBag>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
