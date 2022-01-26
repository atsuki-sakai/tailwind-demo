import React from 'react';

const Transition = () => {
    return (
        <div className='mb-6'>
            duration: true
            <button className='bg-blue-500 hover:bg-blue-300 transition duration-1000  text-white font-semibold py-2 px-8 rounded-md m-4'> Button1 </button>
            duraiton: false
            <button className='bg-blue-500 hover:bg-blue-300 text-white font-semibold py-2 px-8 rounded-md m-4'> Button2 </button>
            ease-in
            <button className='bg-blue-500 hover:bg-blue-300 transition duration-200 ease-in text-white font-semibold py-2 px-8 rounded-md m-4'> Button1 </button>
            ease-out
            <button className='bg-blue-500 hover:bg-blue-300 transion duration-200 ease-out text-white font-semibold py-2 px-8 rounded-md m-4'> Button2 </button>
            delay
            <button className='bg-blue-500 hover:bg-blue-300 transition duration-200 ease-in delay-1000 text-white font-semibold py-2 px-8 rounded-md m-4'> Button1 </button>
        </div>
    );
}

export default Transition;
