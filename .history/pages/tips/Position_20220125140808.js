import React from 'react';
import Image from 'next/image'

export const Position = () => {
    return (
        <>
            <div className='h-64 w-96 relative'>
                <Image src={'/images/img1.jpg'} layout='fill' objectFit='cover' />
            </div>
        </>
    )
};
