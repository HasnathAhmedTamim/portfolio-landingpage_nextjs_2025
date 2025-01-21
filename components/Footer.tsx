import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { footerLinks } from '@/constants'; // Assuming this file contains social media links

const Footer = () => {
    return (
        <footer className="relative py-20  text-white">
            {/* Head Div: Centered */}
            <div className="container mx-auto text-center mb-10 py-16">
                <h1 className="footer__tittle text-2xl font-normal">
                    Get in Touch With Us
                </h1>
                <h2 className="footer__sub_tittle text-xl font-normal mt-2">
                    info@aaronn.com
                </h2>
            </div>

            {/* Footer Content */}
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-8 sm:px-16">
                {/* Column 1: Logo */}
                <div className="flex-1 flex justify-center sm:justify-start">
                    <Image alt="logo" src="/logo.png" width={119} height={18} className="object-contain" />
                </div>

                {/* Column 2: Address and Contact Info */}
                <div className="flex-1 flex flex-col items-center sm:items-start">
                    <p className="font-medium text-lg">Street Avenue 21, CA</p>
                    <p className="font-light text-base">0-8-00-888-000</p>
                </div>

                {/* Column 3: Phone Number and Social Links */}
                <div className="flex-1 flex flex-col items-center sm:items-end">
                    <p className="font-medium text-lg">+9 0283353</p>
                    <div className="flex justify-center gap-4 mt-4 sm:justify-end">
                        <Link href="/">
                            <Image alt="social-icon" src="/Vector.png" width={20} height={20} className="object-contain" />
                        </Link>
                        <Link href="/">
                            <Image alt="social-icon" src="/Vector (1).png" width={20} height={20} className="object-contain" />
                        </Link>
                        <Link href="/">
                            <Image alt="social-icon" src="/Vector (2).png" width={20} height={20} className="object-contain" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
