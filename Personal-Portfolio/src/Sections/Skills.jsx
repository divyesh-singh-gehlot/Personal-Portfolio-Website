import React from 'react';
import ScrollFloat from '../Components/ScrollFloat';
import CircularGallery from '../Components/CircularGallery';

const Skills = () => {
    return (
        <div className="w-full">
            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=100%'
                scrollEnd='bottom bottom-=80%'
                stagger={0.03}
                textClassName="text-5xl sm:text-6xl md:text-7xl font-bold text-center mx-auto"
            >
                Skills
            </ScrollFloat>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen">
                <CircularGallery bend={-5} textColor="#ffffff" borderRadius={0.05} />
            </div>
        </div>
    );
};

export default Skills;
