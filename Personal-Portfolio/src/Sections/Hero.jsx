import React from 'react'

import Particles from '../Components/Particles';
import RotatingText from '../Components/RotatingText';
import Orb from '../Components/Orb';
import Dock from '../Components/Dock';

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import divyesh from '../assets/HomePage/Hero/Divyesh.jpg'

const Hero = () => {

    const items = [
        {
            icon: <FaLinkedinIn size={18} />,
            label: 'LinkedIn',
            onClick: () => window.open('https://www.linkedin.com/in/divyesh-singh-gehlot-792055295/', '_blank'),
        },
        {
            icon: <FaGithub size={18} />,
            label: 'GitHub',
            onClick: () => window.open('https://github.com/divyesh-singh-gehlot', '_blank'),
        },
    ];


    return (
        <div className="relative h-[90vh] w-full overflow-hidden bg-black text-white">
            <div className="absolute inset-0 z-0">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div className="relative z-20 flex flex-col md:flex-row justify-center items-center h-full px-6 md:px-12 gap-48 -translate-y-20">
                {/* Left Text Section */}
                <div className="text-left max-w-xl space-y-4 md:mr-4">
                    <h1 className="text-4xl md:text-5xl font-bold">Hi There,</h1>
                    <h1 className="text-4xl md:text-5xl font-bold">I am Divyesh Gehlot</h1>
                    <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold">
                        <span>I am into</span>
                        <RotatingText
                            texts={['Web Development', 'App Development', 'Graphic Designing', 'Video Editing']}
                            mainClassName="text-xl md:text-2xl px-2 md:px-4 py-1 md:py-1.5 bg-cyan-300 text-black rounded-lg overflow-hidden"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitby="line"
                            splitLevelClassName="overflow-hidden pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2500}
                        />
                    </div>
                </div>

                <Dock
                        items={items}
                        panelHeight={68}
                        baseItemSize={50}
                        magnification={70}
                        className='absolute'
                    />

                {/* Right Orb + Image Section */}
                <div className="relative w-[440px] h-[440px] flex items-center justify-center">
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                    <img
                        src={divyesh}
                        alt="Divyesh"
                        className="absolute w-[300px] h-[300px] rounded-full object-cover shadow-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
