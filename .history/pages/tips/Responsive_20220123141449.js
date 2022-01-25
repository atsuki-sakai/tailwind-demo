import React from 'react';

export const Responsive = () => {
    return (
        <>
            <div className='bg-blue-300 md:bg-green-300 lg:bg-red-300'>
                <h3 >Responsive Design</h3>
            </div>
            <div className='text-center'>
                <button className='rounded-2xl shadow-light-700 p-8'>Button</button>
            </div>
        </>
    )
};
