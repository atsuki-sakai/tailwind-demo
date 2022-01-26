import React from 'react';
import Image from 'next/image'

export const Cards = () => {
    return (
        <div className='w-11/12 mx-auto my-4 '>
            <div className='shadow-xl rounded-lg overflow-hidden'>
                <Image src={'/images/pizza.jpg'} />
            </div>
        </div>
    );
};
