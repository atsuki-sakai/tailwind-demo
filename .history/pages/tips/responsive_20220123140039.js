import React from 'react'
import Image from 'next/image'

export const Responsive = () => {
    return (
        <>
            <div className='bg-green-400 md:bg-yellow-400 lg:bg-pink-400'>
                Responsive Design
            </div>
            <div className='text-center mt-4'>
                <button className='rounded-2xl bg-blue-400 w-1/2 p-6 font-bold text-3xl md:max-w-md'>Button</button>
            </div>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <Image class="h-48 w-full object-cover md:h-full md:w-48" src="/img/store.jpg" alt="Man looking at item at a store">
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>
        </>
    );
};