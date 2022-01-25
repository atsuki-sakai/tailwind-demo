import React from 'react';

export const Visibility = () => {
    return (
        <>
            <div className='mb-16 flwx juatify-around'>
                <div className='flex-grow border-2 border-blue-300 '>A</div>
                <div className='flex-grow border-2 border-blue-300 opacty-0'><button>Button</button></div>
                <div className='flex-grow border-2 border-blue-300 '>C</div>
            </div>

            <div className='mb-16 flwx juatify-around'>
                <div className='flex-grow border-2 border-blue-300 '>A</div>
                <div className='flex-grow border-2 border-blue-300 invisible'><button>Button</button></div>
                <div className='flex-grow border-2 border-blue-300 '>C</div>
            </div>

            <div className='mb-16 flwx juatify-around'>
                <div className='flex-grow border-2 border-blue-300 '>A</div>
                <div className='flex-grow border-2 border-blue-300 hidden'><button>Button</button></div>
                <div className='flex-grow border-2 border-blue-300 '>C</div>
            </div>
        </>
    );
};
