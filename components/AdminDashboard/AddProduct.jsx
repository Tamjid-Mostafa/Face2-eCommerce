import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import Link from 'next/link';
import UploadImage from './UploadImage';
// import { v2 as cloudinary } from 'cloudinary';
// import axios from 'axios';
// import { useRouter } from 'next/router';

// cloudinary.config({
//     cloud_name: 'your_cloud_name',
//     api_key: 'your_api_key',
//     api_secret: 'your_api_secret',
// });

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const { register, handleSubmit, errors } = useForm();

    // const onSubmit = async (data) => {
    //     try {
    //         const [image, setImage] = useState(null);
    //         const { register, handleSubmit } = useForm();
    //         const router = useRouter();

    //         const onSubmit = async (data) => {
    //             const file = data.image[0];
    //             const result = await cloudinary.uploader.upload(file.path);
    //             setImage(result.secure_url);
    //         };
    //     } catch (err) {
    //         // console.error(err);
    //     }
    // };

    return (
        <div className='mt-12 mw-[1480px] mx-auto'>
            <div className='flex justify-between items-start'>
                <h1 className='font-semibold text-2xl mb-5'>Add Product</h1>
                <Link href="">
                    <button>View Products</button>
                </Link>
            </div>
            <div className="flex justify-around">
                <div className="">
                    <UploadImage />
                </div>
                <div className="w-1/2 p-4">
                    <form
                    // onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                            <div className="mb-4">
                                <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
                                    Product Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="w-full p-2 border rounded-2xl"
                                    {...register("name", { required: true })}
                                />
                                {/* {errors.name && <span className="text-red-500">This field is required</span>} */}
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 font-bold text-gray-700" htmlFor="category">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    className="w-full p-2 border rounded-2xl"
                                    {...register("category", { required: true })}
                                >
                                    <option value="">Select a category</option>
                                    <option value="T-shirt">T-shirt</option>
                                    <option value="Panjabi">Panjabi</option>
                                    <option value="Shirt">Shirt</option>
                                </select>
                                {/* {errors.category && <span className="text-red-500">This field is required</span>} */}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold text-gray-700" htmlFor="slug">
                                Slug
                            </label>
                            <input
                                id="slug"
                                name="slug"
                                type="text"
                                className="w-full p-2 border rounded-2xl"
                                {...register("slug", { required: true })}
                            />
                            {/* {errors.slug && <span className="text-red-500">This field is required</span>} */}
                        </div>
                        <div>
                            <label htmlFor="short_description" className="block font-medium text-gray-700">Short Description</label>
                            <textarea id="short_description" rows="3" {...register("short_description", { required: true })} className="mt-1 block w-full border rounded-2xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            {/* {errors.short_description && <span className="text-red-500 text-sm">This field is required</span>} */}
                        </div>
                        <div className='grid grid-cols-2  gap-14 mt-6'>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="colors">
                                    Colors
                                </label>
                                <div className="flex items-center">
                                    <input className="mr-2" type="checkbox" {...register("colors")} value="Red" />
                                    <span className="mr-4 text-gray-700">Red</span>
                                    <input className="mr-2" type="checkbox" {...register("colors")} value="Blue" />
                                    <span className="mr-4 text-gray-700">Blue</span>
                                    <input className="mr-2" type="checkbox" {...register("colors")} value="Green" />
                                    <span className="text-gray-700">Green</span>
                                </div>
                                {/* {errors.colors && <span className="text-red-500">{errors.colors.message}</span>} */}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="size">
                                    Size
                                </label>
                                <div className="flex items-center">
                                    <input className="mr-2" type="checkbox" {...register("size")} value="S" />
                                    <span className="mr-4 text-gray-700">S</span>
                                    <input className="mr-2" type="checkbox" {...register("size")} value="M" />
                                    <span className="mr-4 text-gray-700">M</span>
                                    <input className="mr-2" type="checkbox" {...register("size")} value="L" />
                                    <span className="mr-4 text-gray-700">L</span>
                                    <input className="mr-2" type="checkbox" {...register("size")} value="XL" />
                                    <span className="mr-4 text-gray-700">XL</span>
                                    <input className="mr-2" type="checkbox" {...register("size")} value="XXL" />
                                    <span className="text-gray-700">XXL</span>
                                </div>
                                {/* {errors.size && <span className="text-red-500">{errors.size.message}</span>} */}
                            </div>
                        </div>
                        <div className='grid grid-cols-2  gap-14'>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                                    Price (BDT)
                                </label>
                                <input
                                    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    name="price"
                                    id="price"
                                    placeholder="Enter product price"
                                    {...register("price")}
                                />
                                {/* {errors.price && <span className="text-red-500 text-sm">Price is required and must be a positive number.</span>} */}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
                                    Quantity
                                </label>
                                <input
                                    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    placeholder="Enter product quantity"
                                    {...register("quantity")}
                                />
                                {/* {errors.quantity && <span className="text-red-500 text-sm">Quantity is required and must be a positive number.</span>} */}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="fullDetail"
                            >
                                Full Detail
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fullDetail"
                                name="fullDetail"
                                rows="6"
                                {...register("quantity")}
                            ></textarea>
                            {/* {errors.fullDetail && (
                            <p className="text-red-500 text-xs italic">
                                {errors.fullDetail.message}
                            </p>
                        )} */}
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="productTags"
                            >
                                Product Tags
                            </label>
                            <input
                                className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="productTags"
                                name="productTags"
                                type="text"
                                placeholder="Comma-separated tags"
                            // ref={register({
                            //     required: "Product tags are required",
                            // })}
                            />
                            {/* {errors.productTags && (
                            <p className="text-red-500 text-xs italic">
                                {errors.productTags.message}
                            </p>
                        )} */}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            // disabled={loading}
                            >
                                {/* {loading ? "Submitting..." : "Submit"} */}
                            </button>
                        </div>
                    </form >
                </div >
            </div >
        </div >
    )
};

export default AddProduct;