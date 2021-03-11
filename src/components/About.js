import React, {useEffect, useState} from 'react';
import sanityClient from '../client';
import wat from '../wat.jpeg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import {SocialIcon} from 'react-social-icons';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name, 
            bio, 
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0])).catch(console.error);
    }, []);

    if (!author) 
        return <div>Loading...</div>;
    

    return (
        <main className="relative">
            <img src={wat}
                alt="Wat"
                className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={
                            urlFor(author.authorImage).url()
                        }
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        alt={
                            author.name
                        }/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-300 mb-4">
                            Hello. I'm{" "}
                            <span className="text-green-100">
                                {
                                author.name
                            }</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent blocks={
                                    author.bio
                                }
                                projectId="uj2q795a"
                                dataset="production"/>
                        </div>
                        <div className="inline-flex py-3 px-3 my-6">

                            <SocialIcon url="https://docs.google.com/document/d/e/2PACX-1vR23bWLnPeU7ucemV148kbJBxAC4W33D_mXXtRQu6Q3tH_wnWtf-RcjppARVtafOg0cxLllMtJy5tIP/pub" className="mr-4" target="_blank" fgColor="#fff" bgColor="black"
                                style={
                                    {
                                        height: 40,
                                        width: 40
                                    }
                                }/>

                        </div>

                    </div>
                </section>
            </div>
        </main>
    )
}
