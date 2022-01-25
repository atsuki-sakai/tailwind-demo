import React from 'react';
import Image from 'next/image'

export const Responsive = () => {
    return (
        <>
            <div className='bg-blue-300 md:bg-green-300 lg:bg-red-300'>
                <h3 >Responsive Design</h3>
            </div>
            <div className='text-center mt-4'>
                <button className='rounded-2xl shadow bg-indigo-500 p-8 w-1/2 md:max-w-md'>Button</button>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <Image layout='fill' objectFit='cover' className="h-48 w-full object-cover md:h-full md:w-48" src={"/images/img1.jpg"} alt="Man looking at item at a store" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>
        </>
    )
};