import { useState } from "react";
import Image from "next/image";

const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the selected file, such as upload it to a server
    };
    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="image" className="block text-accent-7 font-bold mb-2">
                        Select an image to upload
                    </label>
                    <div className="relative w-full">
                        <div className="flex items-center justify-center h-full absolute right-0 pr-3">

                        </div>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                            className="opacity-0 w-full h-full z-50"
                        />
                        <div className={`h-56 rounded-lg overflow-hidden`}>
                            {selectedFile ? (
                                <div className='h-56'>
                                    <Image
                                        src={URL.createObjectURL(selectedFile)}
                                        className="w-full h-full"
                                        alt="Selected image"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-full">

                                    <div className=" h-56 rounded-lg overflow-hidden">
                                        <div className="">
                                            <div className="bg-accent-1 w-full m-auto rounded-lg">
                                                <div className="file_upload p-5 relative border-4 border-dotted border-accent-3 rounded-lg" >
                                                    <svg className="text-accent-5 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                                    <div className="input_field flex flex-col w-max mx-auto text-center">
                                                        <label>
                                                            <input className="text-sm cursor-pointer w-full hidden"
                                                                type="file"
                                                                id="image"
                                                                name="image"
                                                                onChange={handleFileChange}
                                                                placeholder="upload file"
                                                                multiple />
                                                            <div className="text bg-indigo-600 text-accent-0 border border-accent-3 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                                                        </label>

                                                        <div className="title text-indigo-500 uppercase">or drop files here</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div >
                </div >
            </form >
        </div >
    );
};

export default UploadImage;