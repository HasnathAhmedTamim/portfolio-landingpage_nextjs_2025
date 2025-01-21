
'use client';
import Link from 'next/link';
import Image from 'next/image';

const TestProjectDetailsPage = () => {
    return (
        <section className="py-20 text-gray-200">
            {/* Project Title and Details - 1st Row */}
            <div className="container mx-auto grid grid-cols-1 gap-8 text-left">
                <div className="text-3xl font-bold">Project Detail</div>
                <div className="text-sm text-gray-400">
                    Details About The Project
                </div>
            </div>

            {/* Image - 2nd Row */}
            <div className="container mx-auto mt-8 text-center items-center flex justify-center ">
                <Image
                    src="/p1.png"
                    alt="Brand Journey Improvements"
                    width={400}
                    height={500}
                    className="rounded-lg object-contain"
                />
            </div>

            {/* Project Story - 3rd Row */}
            <div className="container mx-auto mt-8 text-center ">
                <h2 className="text-2xl font-semibold">Project Story</h2>
                <p className="text-sm text-gray-400 mt-4 text-center">
                    The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it.
                    We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.
                </p>
            </div>

            {/* Two Images Below - 4th Row */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
                <div className="rounded-lg overflow-hidden">
                    <Image
                        src="/p5.png"
                        alt="Image 1"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                <div className="rounded-lg overflow-hidden">
                    <Image
                        src="/p6.png"
                        alt="Image 2"
                        width={400}
                        height={300}
                        className="rounded-lg"
                    />
                </div>
            </div>

            {/* Project Story Again - 5th Row */}
            <div className="container mx-auto mt-8 text-center">
                <h2 className="text-2xl font-semibold">Project Story Continues</h2>
                <p className="text-sm text-justify text-gray-400 mt-4">
                    Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. <br /> And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills, and organizational skills.
                </p>
            </div>

            {/* Follow Me On - Buttons */}
            <div className="container mx-auto flex justify-between mt-8">
                <Link href="/previous-work">
                    <button className="bg-[#1a1a1a] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-full">
                        <span>←</span> Previous Work
                    </button>
                </Link>
                <Link href="/next-work">
                    <button className="bg-[#1a1a1a] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-full">
                        Next Work <span>→</span>
                    </button>
                </Link>
            </div>

            {/* Other Projects Title - 6th Row */}
            <div className="container mx-auto text-center mt-16">
                <h2 className="text-2xl font-semibold mb-8">Other Projects</h2>
            </div>

            {/* Other Projects - 7th Row (3 Columns of Images) */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                {/* Static Projects */}

                <div className=''>
                    <div className="flex flex-col items-start ">
                        <Image
                            src="/lp1.png"
                            alt="Project 1"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain"
                        />

                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Logo Project 1</h3>
                        <p className="text-sm text-gray-400">Branding</p>

                    </div>
                </div>
                <div>
                    <div className="flex flex-col  ">
                        <Image
                            src="/lp2.png"
                            alt="Project 2"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain"
                        />

                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Logo Project 2</h3>
                        <p className="text-sm text-gray-400">Branding</p>

                    </div>
                </div>

                <div>
                    <div className="flex flex-col  ">
                        <Image
                            src="/lp3.png"
                            alt="Project 3"
                            width={300}
                            height={300}
                            className="rounded-lg object-contain"
                        />

                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold">Logo Project 3</h3>
                        <p className="text-sm text-gray-400">Branding</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestProjectDetailsPage;
