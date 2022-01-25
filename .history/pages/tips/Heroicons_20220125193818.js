import { BeakerIcon } from '@heroicons/react/solid'

export const Heroicons = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div className='bg-red-400'>
                <BeakerIcon className=" mx-auto h-5 w-5 text-blue-500" />
                <p className='text-center' >...</p>
            </div>
        </>
    )
}