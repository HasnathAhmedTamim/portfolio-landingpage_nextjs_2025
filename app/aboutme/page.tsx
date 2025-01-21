'use client'
import Image from 'next/image'
import React from 'react'

const worksData = [
    {
        id: 1,
        color: 'blue',
        title: 'Orvillebury',
        image: '/personalpic1.png',
    },
    {
        id: 2,
        color: 'green',
        title: 'West Lavada',
        image: '/personalpic2.png',
    },
];

const AboutMe = () => {
    return (
        <div>
            <div className="text-white py-16">
                {/* First row: Title and Subtitle */}
                <div className="container mx-auto text-start px-4 mb-8">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-lg mb-12">Little Brief About Myself</p>
                </div>

                {/* Second row: Two columns (Title and Subtitle in right column) */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-8">
                    <div className="col-span-1">
                        {/* Left Column: Content */}
                        <p className="text-lg">I am a passionate developer with a keen eye for design. My journey in the tech world started years ago, and I’m always eager to learn and grow in my field.</p>
                    </div>
                    <div className="col-span-1 text-justify">
                        {/* Right Column: Subtitle or other details */}
                        <p className="text-xl font-semibold">Create custom Designs with AARONN that converts more visitors than any website. With lots of unique design, you can easily select a logo without hassle. Create custom landing logos with AARONN that converts more visitors than any website. With lots of revisions, you can easily build a logo without porbolem.</p>
                    </div>
                </div>

                {/* Third row: Two Images in a single row, aligned, with 10px gap */}
                <div className="container mx-auto flex w-full justify-center flex-col sm:flex-row gap-2  mb-8">
                    <div className="w-full">
                        <Image
                            src={worksData[0].image}
                            alt={worksData[0].title}
                            width={400}
                            height={400}
                            objectFit="contain"
                            className="rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                        />
                    </div>
                    <div className="w-full">
                        <Image
                            src={worksData[1].image}
                            alt={worksData[1].title}
                            width={800}
                            height={800}
                            objectFit="contain"
                            className="rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                        />
                    </div>
                </div>

                {/* Fourth row: Four social media columns */}
                <div className="container mx-auto text-start px-4 mb-8">
                    <h1>Follow me on:</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex items-center justify-center p-4 rounded-lg">
                        <a href="#" className="text-white">Facebook</a>
                    </div>
                    <div className="flex items-center justify-center p-4 rounded-lg">
                        <a href="#" className="text-white">Twitter</a>
                    </div>
                    <div className="flex items-center justify-center p-4 rounded-lg">
                        <a href="#" className="text-white">Instagram</a>
                    </div>
                    <div className="flex items-center justify-center p-4 rounded-lg">
                        <a href="#" className="text-white">LinkedIn</a>
                    </div>
                </div>

                {/* Load More Button */}
                <div className="flex justify-center mt-12">
                    <button className="px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition">
                        Load More Works
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
