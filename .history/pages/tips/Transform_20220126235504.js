import React from 'react';

const Transform = () => {
    return (
        <div className='m-12'>
            rotate
            <div className='origin-left transform rotate-6 w-48 h-48 bg-red-500'></div>
            scale
            <div className='origin-center transform scale-50  w-48 h-48 bg-red-500'></div>
        </div>
    );
}

export default Transform;

