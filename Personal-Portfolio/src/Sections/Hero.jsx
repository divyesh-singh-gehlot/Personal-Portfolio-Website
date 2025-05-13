import React from 'react';

import Particles from '../Components/Particles';
import RotatingText from '../Components/RotatingText';
import Orb from '../Components/Orb';
import Dock from '../Components/Dock';

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import divyesh from '../assets/HomePage/Hero/Divyesh.jpg';

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
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
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

            <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 sm:px-6 md:px-12 gap-10 pt-20 pb-10">
                <div className="relative w-[240px] sm:w-[280px] md:w-[320px] h-[240px] sm:h-[280px] md:h-[320px] flex items-center justify-center">
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                    <img
                        src={divyesh}
                        alt="Divyesh"
                        className="absolute w-[160px] sm:w-[200px] md:w-[240px] h-[160px] sm:h-[200px] md:h-[240px] rounded-full object-cover shadow-lg"
                    />
                </div>

                <div className="text-center max-w-xl space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold">Hi There,</h1>
                    <h1 className="text-3xl sm:text-4xl font-bold">I am Divyesh Gehlot</h1>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-lg sm:text-xl font-semibold">
                        <span>I am into</span>
                        <RotatingText
                            texts={['Web Development', 'App Development', 'Graphic Designing', 'Video Editing']}
                            mainClassName="text-lg sm:text-xl px-3 py-1 bg-cyan-300 text-black rounded-lg"
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

                <div className="mt-2">
                    <Dock
                        items={items}
                        panelHeight={60}
                        baseItemSize={40}
                        magnification={60}
                        className="hover:cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
