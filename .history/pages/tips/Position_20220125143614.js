import React from 'react';
import Image from 'next/image'

export const Position = () => {
    return (
        <>
            <div className='h-64 w-96 relative overflow-hidden shadow-md rounded-2xl'>
                <Image src={'/images/img1.jpg'} layout='fill' objectFit='cover' />
            </div>
            <p className=''>Hello my name is sakai.</p>

            <div className='relative'>
                <div className='h-64 w-96 relative overflow-hidden shadow-md rounded-2xl'>
                    <Image src={'/images/img1.jpg'} layout='fill' objectFit='cover' />
                </div>
                <p className='absolute bottom-0 left-0'>Hello my name is sakai.</p>
            </div>
            <div className='relative w-96 h-64 bg-red-300'>
                <div className='absolute w-40 h-40 top-8 left-8 bg-blue-300'></div>
                <div className='absolute w-40 h-40 top-16 left-16 bg-blue-600'></div>
            </div>
            <div>
                <button className='fixed bottom-0 right-1 h-12 w-1/2 my-12 bg-red-300 hover:bg-red-600'>Back Home</button>
            </div>
            <div className='sticky top-0 p-2 bg-green-300'>sticky header 1</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='sticky top-0 p-2 bg-green-300'>sticky header 2</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='sticky top-0 p-2 bg-green-300'>sticky header 3</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
            <div className='h-64'> echo</div>
        </>
    )
};