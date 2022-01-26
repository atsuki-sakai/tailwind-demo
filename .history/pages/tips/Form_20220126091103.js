import React from 'react';

export const Form = () => {
    return (
        <>
            <div className='w-10/12 mx-auto md:max-w-md'>
                <form action="">
                    <div className='mb-8'>
                        <label html_For="your_name" className='text-sm block'>お名前</label>
                        <input id="your_name" type="text" className='border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500' />
                    </div>

                    <div className='mb-8'></div>
                </form>
            </div>
        </>
    );
};
