'use client';
// app/project/[slug]/page.tsx
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
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

    useEffect(() => {
        if (slug) {
            const projectData = projects.find((p) => p.href.split('/')[2] === slug);
            setProject(projectData || null);
        }
    }, [slug]);

    if (!project) return <p>Loading...</p>;

    return (
        <section className="py-20 text-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">{project.title}</h2>
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 mt-16">
                <div className="rounded-lg overflow-hidden flex flex-col justify-between bg-gray-800">
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
                        <p className="text-sm text-gray-400">
                            Client: {project.client} <br />
                            Work: {project.work}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;
