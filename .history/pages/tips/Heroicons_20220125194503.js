import { BeakerIcon, BookingAltIcon } from '@heroicons/react/solid'

export const Heroicons = () => {
    return (
        <>

            <div className='bg-red-400'>
                <BeakerIcon className=" mx-auto h-5 w-5 text-blue-500" />
                <p className='text-center' >...</p>
            </div>
            <BookingAltIcon className=" mx-auto h-5 w-5 text-red-500" />

            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-current text-purple-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>

        </>
    )
}