import React from 'react';
import { Cards } from '../tips/Cards';

export const Sample2 = () => {
    return (
        <div className='md:flex justify-center'>
            <div className='py-4'><Cards /></div>
            <div className='py-4'><Cards /></div>
            <div className='py-4'><Cards /></div>
            <Cards />
        </div >
    );
};
