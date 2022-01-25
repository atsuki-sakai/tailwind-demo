import React from 'react';

export const Container = () => {
    return (
        <>
            <header className="border border-blue-300">Full Size Width </header>
            <main className='container border border-red-300 mx-auto px-4'>Main</main>
            <footer className="border border-blue-300">Full Size Width</footer>
        </>
    );
};
import { BeakerIcon } from '@heroicons/react/solid'

function MyComponent() {
    return (
        <div>
            <BeakerIcon className="h-5 w-5 text-blue-500" />
            <p>...</p>
        </div>
    )
}