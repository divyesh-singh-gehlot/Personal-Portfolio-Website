import './App.css';

import { useRef } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Loading from './Pages/Loading';
import Homepage from './Pages/Homepage';

function App() {
  const LoadRef = useRef();
  const homepageRef = useRef();

  useGSAP(() => {
    gsap.to(LoadRef.current, {
      opacity: 0,
      scale: 0.95,
      filter: "blur(5px)",
      duration: 1.5,
      delay: 5,
      ease: "power3.inOut",
      onComplete: () => {
        LoadRef.current.style.display = 'none';
      },
    });

    gsap.from(homepageRef.current, {
      opacity: 0,
      y: 5,
      duration: 1.2,
      delay: 2,
      ease: "power2.out",
    });
  }, []);

  return (
    <main className='h-fit w-full font-mono bg-black'>
      <div
        ref={LoadRef}
        className="fixed h-screen w-full bg-black flex items-center justify-center z-[9999]"
      >
        <Loading />
      </div>

      <div ref={homepageRef} className="bg-white h-full w-full font-mono">
        <Homepage />
      </div>
    </main>
  );
}

export default App;
