import Link from 'next/link';

const Banner = () => {
    return (
        <section className=" text-white py-20">
            <div className="container mx-auto text-center">
                <h1 className=" font-bold mb-8 ban__title">
                    Adaptive Logo Design <br /> for Your Brand
                </h1>
                <Link href="/works">
                    <button className="bg-[#FF9142] hover:bg-[#FF9142] text-white px-6 py-3 rounded-full">
                        Explore Works <span className="ml-2 bg-[#FF9142]">→</span>
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Banner;