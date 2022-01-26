import React from 'react';
import Image from 'next/image'

export const Cards = () => {
    return (
        <div className='w-11/12 mx-auto my-4 '>
            <div className='h-48 w-full ob shadow-xl rounded-lg overflow-hidden'>
                <Image src={'/images/pizza.jpg'} layout='fill' objectFit='cover' />
            </div>
        </div>
    );
};
