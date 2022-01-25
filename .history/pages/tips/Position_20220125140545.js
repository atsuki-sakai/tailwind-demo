import React from 'react';
import Image from 'next/image'

export const Position = () => {
    return (
        <>
            <div className='relateve w-64 h-32'>
                <Image src={'/images/img1.jpg'} layout='fill' objectFit='cover' />
            </div>
        </>
    )
};
