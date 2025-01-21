"use client";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
    return (
        <section className="py-20 text-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">My Projects Highlight</h2>
                
                <Link href="/works">
                    <button className="bg-[#1a1a1a] hover:bg-[#1a1a1a] border-[2px] border-[#FF9142] text-white px-6 py-3 rounded-full">
                        Explore Works <span className="ml-2 bg-[#1a1a1a]">→</span>
                    </button>
                </Link>
            </div>

            {/* 2 Rows and 2 Columns Grid */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16 ">
                {/* First Project */}
                <div className="rounded-lg overflow-hidden flex flex-col justify-between bg-gray-800 hover:bg-gray-700 transition-all">
                    <div className="relative w-full h-80 ">
                        <Image
                            src="/p1.png" // Replace with actual image path
                            alt="Brand Journey Improvements"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-t-lg"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white flex items-center justify-between">
                            Brand Journey Improvements
                            <span>
                                <Image
                                    src="/smallline.png" // Replace with actual image path
                                    alt="Brand Journey Improvements"
                                    width={48}
                                    height={2}
                                    className="object-cover"
                                />
                            </span>
                        </h3>
                        <p className="text-sm text-gray-400">
                            Client: Organo <br />
                            Work: Branding, Logo Design
                        </p>
                    </div>
                </div>

                {/* Second Project */}
                <div className="rounded-lg overflow-hidden flex flex-col justify-between bg-gray-800 hover:bg-gray-700 transition-all">
                    <div className="relative w-full h-80">
                        <Image
                            src="/p2.png" // Replace with actual image path
                            alt="Brand Grouping"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-t-lg"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white flex items-center justify-between">
                            Brand Grouping
                            <span>
                                <Image
                                    src="/smallline.png" // Replace with actual image path
                                    alt="Brand Journey Improvements"
                                    width={48}
                                    height={2}
                                    className="object-cover"
                                />
                            </span>
                        </h3>
                        <p className="text-sm text-gray-400">
                            Client: FR <br />
                            Work: Branding, Logo Design
                        </p>
                    </div>
                </div>

                {/* Third Project */}
                <div className="rounded-lg overflow-hidden flex flex-col justify-between bg-gray-800 hover:bg-gray-700 transition-all">
                    <div className="relative w-full h-80">
                        <Image
                            src="/p3.png" // Replace with actual image path
                            alt="Website Redesign"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-t-lg"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white flex items-center justify-between">
                            Website Redesign
                            <span>
                                <Image
                                    src="/smallline.png" // Replace with actual image path
                                    alt="Brand Journey Improvements"
                                    width={48}
                                    height={2}
                                    className="object-cover"
                                />
                            </span>
                        </h3>
                        <p className="text-sm text-gray-400">
                            Client: XYZ Corp <br />
                            Work: Website Design, User Experience
                        </p>
                    </div>
                </div>

                {/* Fourth Project */}
                <div className="rounded-lg overflow-hidden flex flex-col justify-between bg-gray-800 hover:bg-gray-700 transition-all">
                    <div className="relative w-full h-80">
                        <Image
                            src="/p4.png" // Replace with actual image path
                            alt="Product Branding"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-t-lg"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white flex items-center justify-between">
                            Product Branding
                            <span>
                                <Image
                                    src="/smallline.png" // Replace with actual image path
                                    alt="Brand Journey Improvements"
                                    width={48}
                                    height={2}
                                    className="object-cover"
                                />
                            </span>
                        </h3>
                        <p className="text-sm text-gray-400">
                            Client: Acme Co <br />
                            Work: Product Packaging, Logo Design
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
