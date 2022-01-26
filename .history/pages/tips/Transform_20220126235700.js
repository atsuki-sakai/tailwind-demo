import React from 'react';

const Transform = () => {
    return (
        <div className='m-12'>
            rotate
            <div className='origin-left transform rotate-6 w-48 h-48 bg-red-500 mb-8'></div>
            scale
            <div className='origin-left transform scale-50  w-48 h-48 bg-red-500 mb-8'></div>
            translate
            <div className='origin-left transform translate-x-6 w-48 h-48 mx-auto bg-red-500'></div>
        </div>
    )
}

export default Transform;

// origin: 原点
// transform: おまじない
// scale,skew,rotate,translate: 動き方
