import React from 'react';
import Image from 'next/image'

export const Position = () => {
    return (
        <>
            <div className='h-64 w-96 relative m-auto'>
                <Image src={'/images/img1.jpg'} layout='fill' objectFit='cover' className='rounded-2xl' />
            </div>
        </>
    )
};
