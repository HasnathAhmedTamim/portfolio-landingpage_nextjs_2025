'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the project type
interface Project {
    href: string;
    imageSrc: string;
    alt: string;
    title: string;
    client: string;
    work: string;
    description: string;
}

const ProjectDetail = () => {
    const { slug } = useParams();  // Get the slug from the URL
    const [project, setProject] = useState<Project | null>(null);

    // Sample project data (can be fetched from an API or database)
    const projects: Project[] = [
        {
            href: "/project/brand-journey-improvements",
            imageSrc: "/p1.png",
            alt: "Brand Journey Improvements",
            title: "Brand Journey Improvements",
            client: "Organo",
            work: "Branding, Logo Design",
            description: "The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it."
        },
        {
            href: "/project/brand-grouping",
            imageSrc: "/p2.png",
            alt: "Brand Grouping",
            title: "Brand Grouping",
            client: "FR",
            work: "Branding, Logo Design",
            description: "Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more."
        },
        {
            href: "/project/website-redesign",
            imageSrc: "/p3.png",
            alt: "Website Redesign",
            title: "Website Redesign",
            client: "XYZ Corp",
            work: "Website Design, User Experience",
            description: "And what helps to achieve a good result? Photography is a combination of thought imagination, visual design, technical skills, and organizational skills."
        },
        {
            href: "/project/product-branding",
            imageSrc: "/p4.png",
            alt: "Product Branding",
            title: "Product Branding",
            client: "Acme Co",
            work: "Product Packaging, Logo Design",
            description: "Photography is one of the most powerful ways to communicate a message and influence how we see the world around us."
        },
    ];

    useEffect(() => {
        if (slug) {
            const projectData = projects.find((p) => p.href.split('/')[2] === slug);
            setProject(projectData || null);
        }
    }, [slug]);

    if (!project) return <p>Loading...</p>;

    return (
        <section className="py-20 text-gray-200">
            {/* Project Title and Details - 1st Row */}
            <div className="container mx-auto grid grid-cols-1 gap-8 text-left">
                <div className="text-3xl font-bold">{project.title}</div>
                <div className="text-sm text-gray-400">{project.description}</div>
            </div>

            {/* Image - 2nd Row */}
            <div className="container mx-auto mt-8 text-center items-center flex justify-center">
                <Image
                    src={project.imageSrc}
                    alt={project.alt}
                    width={400}
                    height={500}
                    className="rounded-lg object-contain"
                />
            </div>

            {/* Project Story - 3rd Row */}
            <div className="container mx-auto mt-8 text-center">
                <h2 className="text-2xl font-semibold">Project Story</h2>
                <p className="text-sm text-gray-400 mt-4 text-center">
                    {project.description}
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

            {/* Other Projects - 4th Row (3 Columns of Images) */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                {projects.map((proj) => (
                    <div key={proj.title}>
                        <div className="flex flex-col items-start">
                            <Image
                                src={proj.imageSrc}
                                alt={proj.alt}
                                width={300}
                                height={300}
                                className="rounded-lg object-contain"
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold">{proj.title}</h3>
                            <p className="text-sm text-gray-400">{proj.work}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectDetail;
