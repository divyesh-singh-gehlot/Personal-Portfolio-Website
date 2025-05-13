import React from 'react'

import ScrollFloat from '../Components/ScrollFloat';
import Aurora from '../Components/Aurora';

const About = () => {
    return (
        <div>
            <div className='py-5'>
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={10.0}
                    amplitude={2.0}
                    speed={1.0}
                />
            </div>
            <div className='w-full'>
                <ScrollFloat
                    animationDuration={1}
                    ease='back.inOut(2)'
                    scrollStart='center bottom+=50%'
                    scrollEnd='bottom bottom-=40%'
                    stagger={0.03}
                    textClassName="text-4xl sm:text-5xl md:text-6xl font-bold text-center mx-auto"
                >
                    About Me
                </ScrollFloat>

            </div>
        </div>
    )
}

export default About;

