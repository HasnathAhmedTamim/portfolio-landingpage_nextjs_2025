import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MyWorks = () => {
    const worksData = [
        {
            id: 1,
            color: 'blue',
            title: 'Orvillebury',
            image: '/work1.png',
        },
        {
            id: 2,
            color: 'green',
            title: 'West Lavada',
            image: '/work2.png',
        },
        {
            id: 3,
            color: 'aqua',
            title: 'Rempelshire',
            image: '/work3.png',
        },
        {
            id: 4,
            color: 'lime',
            title: 'Delfinaland',
            image: '/work4.png',
        },
        {
            id: 5,
            color: 'fuchsia',
            title: 'Buckridgeburgh',
            image: '/work5.png',
        },
        {
            id: 6,
            color: 'black',
            title: 'Pfefferstad',
            image: '/work6.png',
        },
        {
            id: 7,
            color: 'purple',
            title: 'South Adrienne',
            image: '/work7.png',
        },
        {
            id: 8,
            color: 'maroon',
            title: 'Lake Trevor',
            image: '/work9.png',
        },
    ];

    return (
        <div className="text-white py-16">
            <div className="container mx-auto text-start px-4">
                <h2 className="text-3xl font-bold mb-4">My Works</h2>
                <p className="text-lg mb-12">A showcase of my creative projects</p>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Row 1 - 3 Columns */}
                    <div className="col-span-1 md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                            {worksData.slice(0, 3).map((work) => (
                                <div key={work.id} className="relative group flex flex-col items-center">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        width={400}  // Set consistent width
                                        height={400} // Set consistent height
                                        objectFit="cover"
                                        className="rounded-lg shadow-lg transition duration-300 transform group-hover:scale-105"
                                    />
                                    <div className="text-center mt-4">
                                        <h3 className="text-lg font-semibold">{work.title}</h3>
                                        <span className="text-xs uppercase text-gray-400">{work.color}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - 2 Columns (Centered) */}
                    <div className="col-span-1 md:col-span-3 flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                            {worksData.slice(3, 5).map((work) => (
                                <div key={work.id} className="relative group flex flex-col items-center">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        width={500}  // Set consistent width
                                        height={500} // Set consistent height
                                        objectFit="cover"
                                        className="rounded-lg shadow-lg transition duration-300 transform group-hover:scale-105"
                                    />
                                    <div className="text-center mt-4">
                                        <h3 className="text-lg font-semibold">{work.title}</h3>
                                        <span className="text-xs uppercase text-gray-400">{work.color}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 3 - 3 Columns */}
                    <div className="col-span-1 md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                            {worksData.slice(5).map((work) => (
                                <div key={work.id} className="relative group flex flex-col items-center">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        width={400}  // Set consistent width
                                        height={400} // Set consistent height
                                        objectFit="cover"
                                        className="rounded-lg shadow-lg transition duration-300 transform group-hover:scale-105"
                                    />
                                    <div className="text-center mt-4">
                                        <h3 className="text-lg font-semibold">{work.title}</h3>
                                        <span className="text-xs uppercase text-gray-400">{work.color}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Load More Button */}
                <div className="flex justify-center mt-12">
                    <Link href="/works">
                        <button className="bg-[#1a1a1a] hover:bg-[#1a1a1a] border-[2px] border-[#FF9142] text-white px-6 py-3 rounded-full">
                            Explore Works <span className="ml-2 bg-[#1a1a1a]">→</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;
