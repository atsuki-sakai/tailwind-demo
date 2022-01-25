import React from 'react';

export const Zindex = () => {
    return (<div>
        <div className='relative'>
            <div className='h-64 w-96 relative overflow-hidden shadow-md rounded-2xl'>
                <Image src={'/images/img1.jpg'} layout='fill' objectFit='cover' />
            </div>
            <p className='absolute bottom-0 left-0'>Hello my name is sakai.</p>
        </div>
    </div>
    )
};
