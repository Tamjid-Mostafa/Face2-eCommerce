import Link from 'next/link';

export default function HomeCollectionTwo() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <div className='h-[640px] mx-auto shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group ' style={{ backgroundImage: "url('https://i.ibb.co/ZgsMDCg/pexels-adam-djili-15389454-1.jpg') " }}>
                    <Link href="">
                        <div class="bg-black bg-opacity-0  px-10 flex flex-wrap flex-col pt-[555px] hover:bg-opacity-75 transform duration-300">
                            <div className='hidden group-hover:block'>
                                <h1 class="text-white text-3xl mb-5 transform font-semibold uppercase translate-y-20 group-hover:translate-y-0 duration-300">
                                    Hoodies
                                </h1>
                                <div class="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div >
            <div>
                <div className='h-[640px] mx-auto shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group ' style={{ backgroundImage: "url('https://i.ibb.co/zPWKzDM/shoes-1.jpg') " }}>
                    <Link href="">
                        <div class="bg-black bg-opacity-0  px-10 flex flex-wrap flex-col pt-[555px] hover:bg-opacity-75 transform duration-300">
                            <div className='hidden group-hover:block'>
                                <h1 class="text-white text-3xl mb-5 uppercase font-semibold transform translate-y-20 group-hover:translate-y-0 duration-300">
                                    Shoes
                                </h1>
                                <div class="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div >
            <div>
                <div className='h-[640px] mx-auto shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group ' style={{ backgroundImage: "url('https://i.ibb.co/Jmj6ZCK/watch-1.jpg') " }}>
                    <Link href="">
                        <div class="bg-black bg-opacity-0  px-10 flex flex-wrap flex-col pt-[555px] hover:bg-opacity-75 transform duration-300">
                            <div className='hidden group-hover:block'>
                                <h1 class="text-white text-3xl mb-5 uppercase font-semibold transform translate-y-20 group-hover:translate-y-0 duration-300">
                                    Watch
                                </h1>
                                <div class="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div >
            <div>
                <div className='h-[640px] mx-auto shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group ' style={{ backgroundImage: "url('https://i.ibb.co/fpvKsMx/gift-1.jpg') " }}>
                    <Link href="">
                        <div class="bg-black bg-opacity-0  px-10 flex flex-wrap flex-col pt-[555px] hover:bg-opacity-75 transform duration-300">
                            <div className='hidden group-hover:block'>
                                <h1 class="text-white text-3xl mb-5 uppercase font-semibold transform translate-y-20 group-hover:translate-y-0 duration-300">
                                    valentine gifts
                                </h1>
                                <div class="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div >
        </div >
    )
}
