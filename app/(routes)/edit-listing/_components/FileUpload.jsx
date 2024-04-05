import Image from 'next/image';
import React, { useState } from 'react'

function FileUpload({setImages,imageList}) {

    const [imagePreview,setImagePreview]=useState([]);
    const handleFileUpload=(event)=>{
        const files=event.target.files;
        console.log(files);
        setImages(files)
        const previews=Array.from(files).map((file)=>URL.createObjectURL(file));
        setImagePreview(previews)
    }
    return (
        <div>
        <div className="flex items-center justify-center w-full">
            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file"
                    multiple className="hidden"
                    onChange={handleFileUpload}
                    accept="image/png, image/gif, image/jpeg"
                />
            </label>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
        lg:grid-cols-7 xl:grid-cols-10 gap-3 mt-3'>
            {imagePreview.map((image,index)=>(
                <div key={index}>
                    <Image src={image} width={100} height={100}
                    className='rounded-lg object-cover h-[100px] w-[100px]'
                    alt={index}
                    />
                </div>
            ))}
        </div>
      {imageList&&  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
        lg:grid-cols-7 xl:grid-cols-10 gap-3 mt-3'>
            {imageList.map((image,index)=>(
                <div key={index}>
                    <Image src={image?.url} width={100} height={100}
                    className='rounded-lg object-cover h-[100px] w-[100px]'
                    alt={index}
                    />
                </div>
            ))}
        </div>}
        </div>

    )
}

export default FileUpload