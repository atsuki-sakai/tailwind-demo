import React from 'react';
import Image from 'next/image'

export const Zindex = () => {
    return (
        <>
            <div className='relative w-96 h-64 bg-red-300'>
                <div className='absolute w-40 h-40 top-8 left-8 bg-blue-300 z-10'></div>
                <div className='absolute w-40 h-40 top-16 left-16 bg-blue-600'></div>
            </div>
        </>
    )
};
