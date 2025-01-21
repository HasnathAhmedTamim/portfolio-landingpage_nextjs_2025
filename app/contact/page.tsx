"use client";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., send email)
        console.log("Form submitted:", { name, email, subject, message });
    };

    return (
        <div className=" text-white">
            <div className="container mx-auto py-16">
                {/* Header Section */}
                <div className="flex justify-start mb-8">
                    <div>
                        <h2 className="text-4xl font-bold">Contact Me</h2>
                        <p className="text-lg">Get in touch with us!</p>
                    </div>
                </div>

                {/* Main Content: Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Section - Get in Touch */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl font-semibold mb-6">Get in Touch With Us</h3>
                        <p className="text-lg mb-4">
                            We are always ready to help you with your inquiries. Feel free to
                            reach out to us for any questions or support!
                        </p>
                    </div>

                    {/* Right Section - Form */}
                    <div className="flex flex-col justify-center">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none px-4 py-2 w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none px-4 py-2 w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none px-4 py-2 w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="bg-transparent border-b-2 border-gray-400 focus:border-white focus:outline-none px-4 py-2 w-full"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                {/* Image Section */}
                <div className="mt-16 flex justify-center">
                    <Image
                        src="/images/contact-image.jpg"
                        alt="Contact Image"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>

                {/* Footer Section - 3 Column Flex */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <p className="font-semibold">Address</p>
                        <p>Street Avenue 21, CA</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold">Phone</p>
                        <p>+9 0283353</p>
                    </div>
                    <div className="text-center">
                        <p className="font-semibold">Email</p>
                        <p>info@aaronn.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
