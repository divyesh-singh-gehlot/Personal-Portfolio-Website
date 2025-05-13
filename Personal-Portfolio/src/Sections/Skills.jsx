import React from 'react'

import ScrollFloat from '../Components/ScrollFloat';
import CircularGallery from '../Components/CircularGallery';



const Skills = () => {
    return (
        <div>
            <div className='w-full'>
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
            </div>
            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={-3} textColor="#ffffff" borderRadius={0.05} />
            </div>
        </div>
    )
}

export default Skills
