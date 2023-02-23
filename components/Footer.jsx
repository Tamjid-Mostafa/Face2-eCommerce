import React from 'react'
import Image from 'next/image'
import logo from '../public/assets/logo/logo3-300x189.png'
import Link from 'next/link';
import { FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiDeviceTablet, HiEnvelope } from "react-icons/hi2";
import './'

const Footer = () => {
    const information = [
        {name: 'About', link: '/about'},
        {name: 'FAQ', link: '/faq'},
        {name: 'Contact Us', link: '/contact'},
        {name: 'Log In', link: '/login'},
    ];

    const shoppingInfo = [
        {name: "How To Shop", link: "/"},
        {name: "Shipping & Charges", link: "/"},
        {name: "Billing & Payment", link: "/"},
        {name: "Size Guide", link: "/"},
        {name: "Privacy Policy", link: "/"},
        {name: "Terms & Condition", link: "/"},
    ];

    return (
        <footer>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 pt-20'>
                <div className='p-3'>
                    
                    <Image src={logo} width={200} alt="" className='mx-auto'/>

                    <p className='text-justify mt-5'>We provide the finest  lifestyle product which is crafted and designed by the professionals with great care and 100% halal material.</p>
                </div>
                <div className='ml-0 lg:ml-10'>
                    <h2 className="text-2xl font-semibold ">Shopping Information</h2>
                    <ul className='mt-10'>
                        {shoppingInfo.map((info) => <li key={info.name} className="py-1"><Link href={info.link} className="font-semibold hover:underline">{info.name}</Link></li>)}
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-2xl font-semibold ">Information</h2>
                    <ul className='mt-10'>
                        {information.map((info) => <li key={info.name} className="py-1 "><Link href={info.link} className=" font-semibold hover:underline" >{info.name}</Link></li>)}
                    </ul>

                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-10">Contacts</h2>

                   <div>
                    <div className='flex justify-center items-start'>
                    <FaMapMarkerAlt className='mr-2 w-[60px] mt-2 text-blue-900'></FaMapMarkerAlt>
                    <h2 className=''>Address:<span className='ml-2'>2nd Floor, 183 East Senpara Parata, Main Road, Mirpur-10, Dhaka (Oppposite of Metro Rail 258 Number Pillar)</span></h2>
                    </div>
                    <div className='my-2'>
                        <h2 className='flex justify-start items-start'><HiDeviceTablet className='mr-2 mt-1 text-lg text-blue-900'></HiDeviceTablet>Phone:<span className='ml-2'>+8801758112822</span></h2>
                    </div>
                    <div>
                        <h2 className='flex justify-start items-start'><HiEnvelope className='mr-2 mt-1 text-lg text-blue-900'></HiEnvelope>Email:<span className='ml-2'>face2bdofficial@gmail.com</span></h2>
                    </div>
                    <div className="flex gap-4 mt-5 text-2xl">
            <Link href="" className="p-2 bg-slate-600 rounded-full text-white hover:text-blue-700 hover:bg-white">
              <FaFacebook></FaFacebook>
            </Link>
            <Link href="" className="p-2 bg-slate-600 rounded-full text-white hover:bg-gradient-to-tr from-purple-700 to-orange-700">
              <FaInstagram></FaInstagram>
            </Link>
            <Link href="" className="p-2 bg-slate-600 rounded-full text-white hover:bg-white hover:text-blue-800">
              <FaTwitter></FaTwitter>
            </Link>
          </div>
                   </div>
                </div>
            </div>

            <div className='py-5 bg-slate-700 text-white w-full mt-7 shadow-xl'>
                <p className='text-center text-md font-semibold'> Copyright © 2023 Face2. All rights reserved.Powered by Face2 </p>
            </div>
        </footer>
    )
}

export default Footer