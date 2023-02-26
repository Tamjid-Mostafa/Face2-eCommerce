import React from 'react'
import { HomeCollectionCard } from '.'

export default function HomeCollectionTwo() {
    const collections = [
        {
            id: 1,
            name: "Hoddies",
            image: "https://i.ibb.co/ZgsMDCg/pexels-adam-djili-15389454-1.jpg"
        },
        {
            id: 1,
            name: "shoes",
            image: "https://i.ibb.co/zPWKzDM/shoes-1.jpg"
        },
        {
            id: 1,
            name: "watch",
            image: "https://i.ibb.co/Jmj6ZCK/watch-1.jpg"
        },
        {
            id: 1,
            name: "valentine gift",
            image: "https://i.ibb.co/fpvKsMx/gift-1.jpg"
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {
                collections.map(collection => <HomeCollectionCard
                    id={collection.id}
                    collection={collection}
                />)
            }

        </div >
    )
}
