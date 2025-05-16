import React from 'react';

import ScrollFloat from '../Components/ScrollFloat';
import CircularGallery from '../Components/CircularGallery';
import Aurora from '../Components/Aurora';

const Skills = () => {
    return (
        <div id='skills' className="w-full">

            <div className='py-5'>
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={10.0}
                    amplitude={2.0}
                    speed={1.0}
                />
            </div>

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
                <CircularGallery bend={-2} textColor="#ffffff" borderRadius={0.05} />
            </div>
        </div>
    );
};

export default Skills;
