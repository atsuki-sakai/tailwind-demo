import React from 'react';

export const Form = () => {
    return (
        <>
            <div className='w-10/12 mx-auto md:max-w-md'>
                <form action="">
                    <div className='mb-8'>
                        <label html_For="your_name" className='text-sm block'>お名前</label>
                        <input id="your_name" type="text" className='border-b w-full py-2 
                        focus:outline-none focus:border-b-2 focus:border-blue-500' placeholder="山田太郎" />
                    </div>

                    <div className='mb-8'>
                        <label html_For="email" className='text-sm block'>Email</label>
                        <input id="email" type="email" className='border-b w-full py-2 
                        focus:outline-none focus:border-b-2 focus:border-blue-500' placeholder='Sample@email.com' />
                    </div>
                    <div className='flex-grow text-center h-24'>
                        <button className='bg-blue-500 py-4 px-12 rounded-xl text-white w-1/2 font-semibold　focus:outline-none'>登録する</button>
                    </div>
                </form>
            </div>
        </>
    );
};
