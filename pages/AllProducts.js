import { AllProductCard, FindUs } from '@/components';
import ProductCard from '@/components/ProductCard';
import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    console.log(products);
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold my-10 uppercase mt-56">Panjabi</h1>
            {/* <hr  className='my-5'/> */}


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    products.map(product => <AllProductCard
                        key={product._id}
                        product={product}
                    ></AllProductCard>)
                }
            </div>
            <FindUs></FindUs>
        </div>
    );
};

export default AllProducts;