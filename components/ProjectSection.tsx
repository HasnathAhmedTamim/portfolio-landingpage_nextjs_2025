'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Define the project type
interface Project {
    href: string;
    imageSrc: string;
    alt: string;
    title: string;
    client: string;
    work: string;
}

const ProjectSection = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/data.json');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="py-20 text-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">My Projects Highlight</h2>
                <Link href="/dashboard">
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
