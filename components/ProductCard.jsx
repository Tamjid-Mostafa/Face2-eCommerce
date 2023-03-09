import Link from 'next/link'
import React from 'react'

const ProductCard = ({ product }) => {
  const { name, image, price } = product

  return (
    <Link href="/AllProducts">
      <div
        className="h-[500px] hover:border-[1px] duration-200 ease-in relative group cursor-pointer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

      </div>
      <div className='text-center my-6 group'>
        <p className="w-[80%] mx-auto py-3 bg-white border-[1px] shadow-md rounded-md"><Link href={`/AllProducts`} >{name} <span className='ml-3 text-xl font-semibold group-hover:ml-5 duration-300'>{">>"}</span></Link></p>
      </div>
    </Link>
  )
}

export default ProductCard
