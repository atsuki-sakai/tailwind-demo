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
            <div className='mb:flex justify-center'>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
                <div className="border border-red-500 flex-grow text-center">Hello World.</div>
            </div>
        </>
    );
}

export default Sample1;
