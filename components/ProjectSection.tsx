'use client'
import Link from 'next/link';
import Image from 'next/image';

// Define the project type
interface Project {
    href: string;
    imageSrc: string;
    alt: string;
    title: string;
    client: string;
    work: string;
}

const projects: Project[] = [
    {
        href: "/project/brand-journey-improvements",
        imageSrc: "/p1.png",
        alt: "Brand Journey Improvements",
        title: "Brand Journey Improvements",
        client: "Organo",
        work: "Branding, Logo Design",
    },
    {
        href: "/project/brand-grouping",
        imageSrc: "/p2.png",
        alt: "Brand Grouping",
        title: "Brand Grouping",
        client: "FR",
        work: "Branding, Logo Design",
    },
    {
        href: "/project/website-redesign",
        imageSrc: "/p3.png",
        alt: "Website Redesign",
        title: "Website Redesign",
        client: "XYZ Corp",
        work: "Website Design, User Experience",
    },
    {
        href: "/project/product-branding",
        imageSrc: "/p4.png",
        alt: "Product Branding",
        title: "Product Branding",
        client: "Acme Co",
        work: "Product Packaging, Logo Design",
    },
];

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
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
                {projects.map((project, index) => (
                    <Link key={index} href={project.href}>
                        <div className="rounded-lg overflow-hidden flex flex-col justify-between bg-gray-800 hover:bg-gray-700 transition-all cursor-pointer">
                            <div className="relative w-full h-80">
                                <Image
                                    src={project.imageSrc}
                                    alt={project.alt}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-t-lg"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-white flex items-center justify-between">
                                    {project.title}
                                    <span>
                                        <Image
                                            src="/smallline.png" // Replace with actual image path
                                            alt={project.title}
                                            width={48}
                                            height={2}
                                            className="object-cover"
                                        />
                                    </span>
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Client: {project.client} <br />
                                    Work: {project.work}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
