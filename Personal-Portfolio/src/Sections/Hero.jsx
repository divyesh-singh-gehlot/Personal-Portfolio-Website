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
        <div id='hero' className="relative h-screen w-full overflow-hidden bg-black text-white">
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

            <div className="relative z-20 flex flex-col md:flex-row justify-center items-center h-full px-4 sm:px-6 gap-8 md:gap-64 -mt-20">
                <div className="relative w-[220px] sm:w-[260px] md:w-[440px] h-[220px] sm:h-[260px] md:h-[440px] flex items-center justify-center order-1 md:order-2">
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                    <img
                        src={divyesh}
                        alt="Divyesh"
                        className="absolute w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] rounded-full object-cover shadow-lg"
                    />
                </div>

                <div className="text-center md:text-left max-w-xl space-y-3 md:space-y-4 order-2 md:order-1 md:translate-x-[-30px]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Hi There,</h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">I am Divyesh Gehlot</h1>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-semibold">
                        <span>I am into</span>
                        <RotatingText
                            texts={['Web Development', 'App Development', 'Graphic Designing', 'Video Editing']}
                            mainClassName="text-lg sm:text-xl md:text-2xl px-2 sm:px-3 py-1 bg-cyan-300 text-black rounded-lg"
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

            </div>
            <div>
                <Dock
                    items={items}
                    panelHeight={60}
                    baseItemSize={40}
                    magnification={60}
                    className="hover:cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Hero;
