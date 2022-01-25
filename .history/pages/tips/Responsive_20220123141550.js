import React from 'react';

export const Responsive = () => {
    return (
        <>
            <div className='bg-blue-300 md:bg-green-300 lg:bg-red-300'>
                <h3 >Responsive Design</h3>
            </div>
            <div className='text-center mt-4'>
                <button className='rounded-2xl shadow bg-indigo-500 p-8 w-1/2 md:max-w-md'>Button</button>
            </div>
        </>
    )
};
