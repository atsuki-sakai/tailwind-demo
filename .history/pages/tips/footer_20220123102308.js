import React from 'react';

export const Footer = () => {
    return (
        <footer className='bg-gray-200'>
            <div className='py-8 grid grid-cols-4 gap-8'>
                <div className=''>
                    <p className='mb-8'>Logo</p>
                    <address>〒　兵庫県丹波篠山市今田町下小野原59-45</address>
                </div>
                <div className=''></div>
                <div className=''></div>
                <div className=''></div>
                <div className='col-span-4 justify-self-center'>Copyright sample text</div>
            </div>
        </footer>
    );
};
