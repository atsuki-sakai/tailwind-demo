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
            <div className='md:flex justify-center m-12 md:m-36'>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
            </div>
        </>
    );
}

export default Sample1;
