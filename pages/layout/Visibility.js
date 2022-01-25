import React from 'react';

export const Visibility = () => {
    return (
        <>
            Opacity-0
            <div className='mb-16 flex juatify-around'>
                <div className='flex-grow border-2 border-blue-300 '>A</div>
                <div className='flex-grow border-2 border-blue-300 opacity-0'><button>Button</button></div>
                <div className='flex-grow border-2 border-blue-300 '>C</div>
            </div>

            Invisible
            <div className='mb-16 flex juatify-around'>
                <div className='flex-grow border-2 border-blue-300 '>A</div>
                <div className='flex-grow border-2 border-blue-300 invisible'><button>Button</button></div>
                <div className='flex-grow border-2 border-blue-300 '>C</div>
            </div>

            Hidden
            <div className='mb-16 flex juatify-around'>
                <div className='flex-grow border-2 border-blue-300 '>A</div>
                <div className='flex-grow border-2 border-blue-300 hidden'><button>Button</button></div>
                <div className='flex-grow border-2 border-blue-300 '>C</div>
            </div>
        </>
    );
};
