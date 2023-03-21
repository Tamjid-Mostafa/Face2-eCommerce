// import Image from 'next/image';
import React, { useState } from 'react'
// import { UploadImage } from '.';
import { HiOutlineX } from "react-icons/hi";
import { HiPlusCircle } from 'react-icons/hi2';
import { UploadImage } from '.';

const DynamicImageUpload = () => {
    const [inputFields, setInputFields] = useState([{}])

    const handleAddFields = () => {
        const values = [...inputFields]
        values.push({ image: null })
        setInputFields(values)
        console.log(inputFields)
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields]
        values.splice(index, 1)
        setInputFields(values)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Input field values', inputFields)
    }

    return (
        <div onSubmit={handleSubmit}>
            {inputFields.map((inputField, index) => (
                <div key={index} className="mb-5 flex items-start">
                    <UploadImage />
                    <div className="flex flex-col justify-between h-[350px]">
                        <div className="h-[300px]">
                            {inputFields.length >= 2 ?
                                <button button type="button" onClick={() => handleRemoveFields(index)}>
                                    <HiOutlineX className='text-xl border-2 border-gray-300 bg-gray-300 -ml-5'></HiOutlineX>
                                </button> : ""}
                        </div>
                        <button type="button" onClick={() => handleAddFields()}>
                            <HiPlusCircle className="text-3xl -ml-8" />
                        </button>
                    </div>
                </div>
            ))
            }

        </div >
    )
};

export default DynamicImageUpload;