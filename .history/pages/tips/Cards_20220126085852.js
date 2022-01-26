import React from 'react';
import Image from 'next/image'

export const Cards = () => {
    return (
        <div className='w-11/12 md:max-w-md mx-auto my-4 rounded-lg overflow-hidden shadow-xl'>
            <div className='h-48 w-full relative'>
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
                <div className='my-4 text-center'> M  <span className='text-xl text-gray-700 text-semibold'>1280円</span></div>
            </div>
        </div>
    );
};
