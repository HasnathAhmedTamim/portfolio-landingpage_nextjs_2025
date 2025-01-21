"use client";

import Image from "next/image";

const TestimonialSection = () => {
    return (
        <section className="relative py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                {/* Left Side - Text */}
                <div className="flex-1 md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-6 md:px-0">
                    <h2 className="  mb-8 test__tittle">Testimonial</h2>
                    <p className=" mb-6 text-justify test__sub_tittle">
                        “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”
                    </p>
                </div>
                {/* Right Side - Image */}
                <div className="flex-1 md:w-1/2 flex justify-center items-center px-6 md:px-0">
                    <Image
                        src="/arrow.png" // Replace with your image path
                        alt="Testimonial"
                        width={150}
                        height={150}
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
