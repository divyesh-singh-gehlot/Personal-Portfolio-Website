import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CountUp from "../Components/CountUp";
import GridDistortion from '../Components/GridDistortion';
import lpBg from '../assets/Loading-Page-Image/lpBg.png'

const Loading = () => {
    const loading = useRef();
    const tl = gsap.timeline();

    useGSAP(() => {
        tl.to(loading.current, {
            opacity: 0,
            duration: 2.0,
            delay: 6,
        });
        tl.set(loading.current, {
            visibility: "hidden",
        });
    });

    return (
        <div ref={loading} className="h-screen w-full relative overflow-hidden">

            <div className="absolute inset-0 z-0">
                <GridDistortion
                    imageSrc={lpBg}
                    grid={10}
                    mouse={0.1}
                    strength={0.15}
                    relaxation={0.9}
                    className="w-full h-full"
                />
            </div>

            <div className="absolute bottom-24 right-10 md:bottom-16 md:right-16 z-10">
                <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1.5}
                    delay={0.5}
                    className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                />
            </div>

        </div>
    );
};

export default Loading;
