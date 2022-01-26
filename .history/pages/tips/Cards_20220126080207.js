import React from 'react';
import Image from 'next/image'

export const Cards = () => {
    return (
        <div className='w-11/12 mx-auto my-4 '>
            <div className='h-48 w-full relative shadow-xl rounded-lg overflow-hidden'>
                <Image src={'/images/pizza.jpg'} layout='fill' objectFit='cover' />
            </div>
            <div className='p-4'>
                <div className='text-sm text-gray-500'>ナポリの定番</div>
                <div className='text-2xl text-bold text-gray-700 mb-2'>マルゲリータ</div>
                <ul className='text-sm text-gray-500'>
                    <li className='inline-block mr-1'>・フレッシュモッツアレラ</li>
                    <li className='inline-block mr-1'>・グラナパダーノ</li>
                    <li className='inline-block mr-1'>・バジル</li>
                    <li className='inline-block mr-1'>・トマトソース</li>
                </ul>
                <div> M 1280円</div>
            </div>
        </div>
    );
};
