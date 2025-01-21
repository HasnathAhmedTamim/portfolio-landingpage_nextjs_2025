import Image from 'next/image'
import React from 'react'
const worksData = [
    {
        id: 1,
        color: 'blue',
        title: 'Orvillebury',
        image: '/images/work1.jpg',
    },
    {
        id: 2,
        color: 'green',
        title: 'West Lavada',
        image: '/images/work2.jpg',
    },

];
const AboutMe = () => {
    return (
        <div>
            <div className=" text-white py-16">
                <div className='container mx-auto text-start px-4'>
                    <h2 className="text-3xl font-bold mb-4">My Works</h2>
                    <p className="text-lg mb-12">A showcase of my creative projects</p>
                </div>
                <div className="container mx-auto text-center px-4">


                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {worksData.map((work) => (
                            <div key={work.id} className="relative group">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={300}
                                    height={300}
                                    objectFit="cover"
                                    className="rounded-lg shadow-lg transition duration-300 transform group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-70 text-center w-full rounded-b-lg opacity-0 group-hover:opacity-100 transition duration-300">
                                    <h3 className="text-lg font-semibold">{work.title}</h3>
                                    <span className="text-xs uppercase text-gray-400">{work.color}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-12 px-6 py-3 rounded-full text-white">
                        Load More Works
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
