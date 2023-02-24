
import React, { useEffect, useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import ProductCard from './ProductCard';



const Product = () => {
    const [panjabies, setPanjabies] = useState([]);
    const [womensCollections, setWomensCollections] = useState([]);
    const [mensCollections, setMensCollections] = useState([]);

    useEffect(() => {
        fetch('panjabi.json')
        .then(res => res.json())
        .then(data => setPanjabies(data))
    },[])

    useEffect(() => {
        fetch('women.json')
        .then(res => res.json())
        .then(data => setWomensCollections(data))
    },[])

    useEffect(() => {
        fetch('men.json')
        .then(res => res.json())
        .then(data => setMensCollections(data))
    },[])
    return (
        <Tabs.Root
        className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA4 mt-20"
        defaultValue="panjabiTab"
      >
        <Tabs.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
          <Tabs.Trigger
            className="bg-white px-5 h-[45px]  flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current   outline-none cursor-pointer focus:outline-none"
            value="panjabiTab"
          >
            Pnajabi
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
          <div className='grid grid-cols-5'>
            {
              panjabies.map( panjabi => <ProductCard 
                key={panjabi.name}
                product={panjabi}
              ></ProductCard>)
            }
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none"
          value="menTab"
        >
          <div className='grid grid-cols-5'>
            {
              mensCollections.map( mens => <ProductCard 
                key={mens.name}
                product={mens}
              ></ProductCard>)
            }
          </div>
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none"
          value="womenTab"
        >
          <div className='grid grid-cols-5'>
            {
              womensCollections.map( women => <ProductCard 
                key={women.name}
                product={women}
              ></ProductCard>)
            }
          </div>
        </Tabs.Content>
      </Tabs.Root>
    
    
    )
}

export default Product