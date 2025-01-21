'use client'
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className='hero  '>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>Let’s get know <br />
                    about me closer</h1>
                <p className='hero__subtitle'>Aaronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases her wide range of work, spanning books, posters and web design.</p>
                <CustomButton title='Discover More About Me '
                    containerStyles='bg-[#FF9142] text-[#FDFDFD] rounded-full mt-20 gap-10'
                    handleClick={() => { handleScroll }}
                ></CustomButton>
            </div>
            <div className='hero__image-container'>
                <div className='hero__image '>
                    <Image alt='banner' src='/Rectangle 361 (1).png' fill className='object-contain'></Image>
                </div>
            </div>
        </div>
    )
}

export default Hero
