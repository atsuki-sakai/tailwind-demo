import React from 'react';
import Image from 'next/image'

export const Overflow = () => {
    return (
        <>
            <div className='w-48 h-48 overflow-hidden mt-12'>
                Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.
            </div>
            <div className='w-48 h-48 overflow-scroll mt-12'>
                Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.
            </div>
            <div className='w-48 h-48 overflow-clip mt-12'>
                Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.
            </div>
            <div className='w-48 h-48 overflow-visible mt-12'>
                Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.  Hello my name is sakai atsuki.
            </div>
            <div className='relative h-24 w-48 mt-12'>
                <Image src={'/images/img1.jpg'} layout='fill' objectFit='cover' />
            </div>
        </>
    )
};
