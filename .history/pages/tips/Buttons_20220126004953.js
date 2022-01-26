import React from 'react';

export const Buttons = () => {
    return (
        <>
            1,2,3番目
            <br />
            <button className='bg-blue-500 text-white font-semibold py-2 px-8 rounded-md m-4'> Button1 </button>
            <button className='text-blue-500 border border-blue-500 text-whie font-semibold py-2 px-8 rounded-md m-4'> Button2 </button>
            <button className='text-blue-500 underline font-semibold py-2 px-8 rounded-md m-4'> Button3 </button>
            <br />
            <button className='bg-red-500 text-white font-semibold py-2 px-8 rounded-md m-4'> Button1 </button>
            <button className='text-red-500 border border-red-500 text-whie font-semibold py-2 px-8 rounded-md m-4'> Button2 </button>
            <button className='text-gray-500 underline font-semibold py-2 px-8 rounded-md m-4 mb-12'> Button3 </button>

            レスポンシブ対応
            <div className='w-40 md:w-80 bg-blue-400 text-white font-semibold py-2 px-8 rounded-md m-4 mb-8'>Hello</div>
            <div className='w-1/2 max-w-md bg-blue-400 text-white font-semibold py-2 px-8 rounded-md m-4 mb-8'>Hello</div>

            <div className='md:flex'>
                <div className='flex-grow text-center'>
                    <button className='h-36 bg-blue-500'>Button</button>
                </div>
                <div className='flex-grow text-center'>
                    <button className='h-36 bg-blue-500'>Button</button>
                </div>
            </div>
        </>
    )
}