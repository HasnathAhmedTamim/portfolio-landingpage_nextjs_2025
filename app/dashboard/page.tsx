'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
    href: string;
    imageSrc: string;
    alt: string;
    title: string;
    client: string;
    work: string;
}

const Dashboard = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [newProject, setNewProject] = useState<Project>({
        href: '',
        imageSrc: '',
        alt: '',
        title: '',
        client: '',
        work: '',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    // // Fetch initial data
    // useEffect(() => {
    //     fetch('/data.json')
    //         .then((response) => response.json())
    //         .then((data) => setProjects(data))
    //         .catch((error) => console.error('Error fetching project data:', error));
    // }, []);
    useEffect(() => {
        fetch('/api/projects')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching project data:', error));
    }, []);
    
    // Handle adding new project
    const handleAddProject = () => {
        setProjects([...projects, newProject]);
        setNewProject({
            href: '',
            imageSrc: '',
            alt: '',
            title: '',
            client: '',
            work: '',
        });
    };

    // Handle deleting a project
    const handleDeleteProject = (index: number) => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
    };

    // Handle editing a project
    const handleEdit = (index: number) => {
        setEditingIndex(index);
        setNewProject(projects[index]);
        setIsEditing(true);
    };

    const saveEdit = () => {
        if (editingIndex !== null) {
            const updatedProjects = [...projects];
            updatedProjects[editingIndex] = newProject;
            setProjects(updatedProjects);
            setIsEditing(false);
            setEditingIndex(null);
        }
    };

    // Handle image upload
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProject({ ...newProject, imageSrc: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container mx-auto py-10 text-white">
            <h1 className="text-3xl font-bold text-center mb-10">Dashboard</h1>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="p-4 text-white rounded-md shadow-md">
                    <h3 className="text-lg font-bold">Total Projects</h3>
                    <p className="text-2xl">{projects.length}</p>
                </div>
                <div className="p-4  text-white rounded-md shadow-md">
                    <h3 className="text-lg font-bold">Active Clients</h3>
                    <p className="text-2xl">{[...new Set(projects.map((p) => p.client))].length}</p>
                </div>
            </div>

            {/* Add new project form */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
                <div className="space-y-4 text-white">
                    <input
                        type="text"
                        placeholder="Title"
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        placeholder='Image'
                        onChange={handleImageUpload}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {newProject.imageSrc && (
                        <div className="mt-4">
                            <Image
                                src={newProject.imageSrc}
                                alt="Uploaded Preview"
                                width={200}
                                height={200}
                                className="rounded-md"
                            />
                        </div>
                    )}
                    <input
                        type="text"
                        placeholder="Client"
                        value={newProject.client}
                        onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Work"
                        value={newProject.work}
                        onChange={(e) => setNewProject({ ...newProject, work: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <button
                        onClick={handleAddProject}
                        className="bg-blue-500 text-white p-2 rounded-md mt-2"
                    >
                        Add Project
                    </button>
                </div>
            </div>

            {/* Display projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="rounded-lg overflow-hidden bg-gray-800 shadow-lg">
                        <Link href={project.href || '#'}>
                            <div className="relative w-full h-60">
                                {project.imageSrc ? (
                                    <Image
                                        src={project.imageSrc}
                                        alt={project.alt}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-t-lg"
                                    />
                                ) : (
                                    <div className="bg-gray-500 w-full h-full flex items-center justify-center text-white text-xl">
                                        No Image Available
                                    </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                <p className="text-sm text-gray-400">Client: {project.client}</p>
                                <p className="text-sm text-gray-400">Work: {project.work}</p>
                            </div>
                        </Link>

                        {/* Buttons to Delete or Update */}
                        <div className="flex justify-between p-4">
                            <button
                                onClick={() => handleDeleteProject(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded-md"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => handleEdit(index)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Edit Project Modal */}
            {isEditing && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-md">
                        <h2 className="text-xl font-bold">Edit Project</h2>
                        <input
                            type="text"
                            placeholder='Title'
                            value={newProject.title}
                            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                            className="w-full p-2 mt-2 border rounded-md"
                        />
                        <input
                            type="text"
                            placeholder='Client'
                            value={newProject.client}
                            onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                            className="w-full p-2 mt-2 border rounded-md"
                        />
                        <input
                        placeholder='Work'
                            type="text"
                            value={newProject.work}
                            onChange={(e) => setNewProject({ ...newProject, work: e.target.value })}
                            className="w-full p-2 mt-2 border rounded-md"
                        />
                        <button
                            onClick={saveEdit}
                            className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md"
                        >
                            Save Changes
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="bg-gray-500 text-white px-4 py-2 mt-4 ml-4 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
