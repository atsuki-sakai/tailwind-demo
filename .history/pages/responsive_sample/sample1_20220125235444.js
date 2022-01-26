import React from 'react';

const Sample1 = () => {
    return (
        <>
            基本
            <div className='flex justify-center mb-16'>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
            </div>
            MB以上でマージンと並びを変更
            <div className='md:flex justify-center mx-12 md:mx-36'>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
            </div>
            横２:縦２　幅5/12, 7/12
            <div className='md:flex justity-center mb-16 mx-12'>
                <div className='text-center border border-red-300 py-4 flex-grow md:w-5/12'>Flox Grow1</div>
                <div className='text-center border border-red-300 py-4 flex-grow md:w-7/12'>Flox Grow2</div>
            </div>
            逆順
            <div className='md:flex flex-row-reverse justity-center mb-16 mx-12'>
                <div className='text-center border border-blue-300 md:border-red-300 py-4 flex-grow md:w-5/12'>Flox Grow1</div>
                <div className='text-center border border-red-300 md:border-blue-300 py-4 flex-grow md:w-7/12'>Flox Grow2</div>
            </div>
            横３ :  縦３
            <div className='md:flex'>
                <div className='text-center border border-blue-400 py-4 flex-grow'></div>
                <div className='text-center border border-blue-400 py-4 flex-grow'></div>
                <div className='text-center border border-blue-400 py-4 flex-grow'></div>
            </div>
            縦３ :  横３　3/12, 6/12, 3/12
            <div className='md:flex'>
                <div className='text-center  py-4 flex-grow md:w-3/12'></div>
                <div className='text-center border border-blue-400 py-4 flex-grow md:w-6/12'>Hello Sakai Atsuki</div>
                <div className='text-center  py-4 flex-grow md:w-3/12'></div>
            </div>
            縦横2: 横４
            <div className='m-12 md:flex'>
                <div className='flex md:flex-none'>
                    <div className='text-center border border-yellow-500 flex-grow'>Hello</div>
                    <div className='text-center border border-yellow-500 flex-grow'>Hello</div>
                </div>
                <div className='flex md:flex-none'>
                    <div className='text-center border border-yellow-500 flex-grow'>Hello</div>
                    <div className='text-center border border-yellow-500 flex-grow'>Hello</div>
                </div>
            </div>
        </>
    );
}

export default Sample1;
