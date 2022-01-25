import React from 'react';
import Image from 'next/image'

export const Position = () => {
    return (
        <div className='relative'>
            <div className='h-64 w-96 relative overflow-hidden shadow-md rounded-2xl absolute'>
                <Image src={'/images/img1.jpg'} layout='fill' objectFit='cover' />
            </div>
            <p className='absolute'>Hello my name is sakai.</p>
        </div>
    )
};
