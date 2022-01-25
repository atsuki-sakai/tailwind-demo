import React from 'react';
import Image from 'next/image'

export const Position = () => {
    return (
        <>
            <div className='h-64 w-1/2 relateve'>
                <Image src={'/images/img1.jpg'} layout='fill' objectFit='cover' />
            </div>
        </>
    )
};
