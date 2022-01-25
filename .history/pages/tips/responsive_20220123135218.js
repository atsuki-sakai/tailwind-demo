import React from 'react';

export const Responsive = () => {
    return (
        <>
            <div className='bg-green-400 md:bg-yellow-400 lg:bg-pink-400'>
                Responsive Design
            </div>
            <div className='text-center mt-4'>
                <button className='rounded-2xl bg-blue-400 w-1/2 p-6'>Button</button>
            </div>
        </>
    );
};
