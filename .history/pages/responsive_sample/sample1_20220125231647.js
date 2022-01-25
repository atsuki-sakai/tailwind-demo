import React from 'react';

const Sample1 = () => {
    return (
        <>
            SM
            <div className='flex justify-center mb-16'>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
            </div>
            MB
            <div className='md:flex justify-center mx-12 md:mx-36'>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
            </div>
            横２:縦２　幅5/12, 7/12
            <div className='md:flex justity-center mb-16'>
                <div className='text-center border border-red-300 py-4 flex-grow'>Flox Grow</div>
                <div className='text-center border border-red-300 py-4 flex-grow'>Flox Grow</div>
            </div>
        </>
    );
}

export default Sample1;
