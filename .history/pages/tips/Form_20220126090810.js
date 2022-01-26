import React from 'react';

export const Form = () => {
    return (
        <>
            <div className='w-10/12 mx-auto md:max-w-md'>
                <form action="">
                    <div className='mb-8'>
                        <label html_For="your_name"></label>
                        <input id="your_name" type="text" />
                    </div>

                    <div className='mb-8'></div>
                </form>
            </div>
        </>
    );
};
