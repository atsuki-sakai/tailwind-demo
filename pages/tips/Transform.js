import React from 'react';

const Transform = () => {
    return (
        <div className='m-12'>
            rotate
            <div className='origin-left transform rotate-6 w-48 h-48 bg-red-500 mb-8'></div>
            scale
            <div className='origin-left transform scale-50  w-48 h-48 bg-red-500 mb-8'></div>
            translate
            <div className='origin-left transform translate-x-8 w-48 h-48 bg-red-500'></div>
            skew
            <div className='origin-left transform skew-y-6 w-48 h-48 bg-red-500'></div>
            <p className='py-24'>Animation</p>
            rotate
            <div className='origin-left transform duration-500 hover:rotate-6 w-48 h-48 bg-red-500 mb-8'></div>
            scale
            <div className='origin-left transform duration-500 hover:scale-50  w-48 h-48 bg-red-500 mb-8'></div>
            translate (ease-out)
            <div className='origin-left transform duration-500 hover:translate-x-8 w-48 h-48 bg-red-500 ease-out'></div>
            skew (ease-in)
            <div className='origin-left transform duration-500 hover:skew-y-6 w-48 h-48 bg-red-500 ease-in'></div>
        </div>
    )
}

export default Transform;

// origin: 原点
// transform: おまじない
// scale,skew,rotate,translate: 動き方
