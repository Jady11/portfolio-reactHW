import React from 'react';
import image from '../Laos.jpeg';


export default function Home() {
    return (
        <main>
            <img src={image} alt="Laos" className="test absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-10xl text-gray-200 leading-none lg:leading-snug home-name">Jady Tippetts</h1>
            </section>
        </main>
    )
}