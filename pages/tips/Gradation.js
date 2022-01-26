import React from 'react';

export const Gradation = () => {
    return (
        <>
            <div className='w-full h-96 bg-gradient-to-r from-blue-300 to-blue-800'></div>
            <div className='w-full h-96 bg-gradient-to-r via-purple-300 from-blue-300 to-blue-800'></div>
        </>
    );
};

// bg-gradient-to-r: 左から右へ色が変わる
// from-blue-300:　開始位置の色
// to-blue-800: 終了位置