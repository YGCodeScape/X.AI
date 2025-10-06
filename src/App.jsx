import { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap";

function App() {

  const textRef = useRef();
    useEffect(() => {
    gsap.to(textRef.current, {
         x: 100
       });
  }, []);


  return (
    <div className='w-full h-screen bg-black text-white'>
      <h1 ref={textRef} className="text-[2rem]"> hello react</h1>
      <h2> hello word </h2>
    </div>
  )
}

export default App