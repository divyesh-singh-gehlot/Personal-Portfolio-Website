import React from 'react';

import ScrollFloat from '../Components/ScrollFloat';
import Aurora from '../Components/Aurora';
import ScrollReveal from '../Components/ScrollReveal';
import MagnetLines from '../Components/MagnetLines';

const About = () => {
  return (
    <div id='about'>
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
          scrollStart='center bottom+=100%'
          scrollEnd='bottom bottom-=80%'
          stagger={0.03}
          textClassName="text-5xl sm:text-6xl md:text-7xl font-bold text-center mx-auto"
        >
          About Me
        </ScrollFloat>
      </div>

      <div className='flex flex-col lg:flex-row px-4 lg:px-12 py-8 gap-10 items-center'>
        <div className='w-full lg:w-1/2'>
          <MagnetLines
            rows={9}
            columns={9}
            containerSize="60vmin"
            lineColor="white"
            lineWidth="0.8vmin"
            lineHeight="5vmin"
            baseAngle={0}
            style={{ margin: "2rem auto" }}
          />
        </div>

        <div className='w-full pl-10 lg:w-1/2 lg:pl-0'>
          <ScrollReveal
            baseOpacity={0.4}
            enableBlur={true}
            baseRotation={2}
            blurStrength={20}
            containerClassName="max-w-2xl"
          >
            I'm a BCA student at IIPS, DAVV, passionate about crafting engaging and responsive user interfaces. I have hands-on experience in frontend development using React and am currently exploring mobile app development with Java. I enjoy building clean, user-friendly applications and constantly seek opportunities to learn new technologies and grow as a developer.
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default About;
