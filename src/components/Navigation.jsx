import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {

  const navbarRef = useRef(null);
  
  useEffect(() => {
    const nav = navbarRef.current;

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top -100',
      onEnter: () => nav.classList.add('blurred'),
      onLeaveBack: () => nav.classList.remove('blurred'),
      toggleActions: 'play none none reverse',
    });

    return () => {
      trigger.kill();
    };
  }, []);


  return (
    <div>
      <div ref={navbarRef} className='navbar-d w-full h-[10vh] fixed top-0 left-0 z-[99]'>
       <div className="nav-hold w-full h-[10vh] flex items-center justify-between">
           <div className="flex gap-8 items-center"> 
               <svg width="24" height="24" viewBox="0 0 24 24" className= "size-8 svg" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.30047 8.77631L12.0474 23H16.3799L6.63183 8.77631H2.30047ZM6.6285 16.6762L2.29492 
               23H6.63072L8.79584 19.8387L6.6285 16.6762ZM17.3709 1L9.88007 11.9308L12.0474 15.0944L21.7067 
               1H17.3709ZM18.1555 7.76374V23H21.7067V2.5818L18.1555 7.76374Z" fill="currentColor">
             </path>
               </svg>
               <h3 className="h-show-tag text-[0.9rem] uppercase opacity-50 cursor-pointer hover:opacity-100">Grok</h3>
               <h3 className="h-show-tag text-[0.9rem] uppercase opacity-50 cursor-pointer hover:opacity-100">api</h3>
               <h3 className="text-[0.9rem] uppercase opacity-50 cursor-pointer hover:opacity-100 ">company</h3>
               <h3 className="text-[0.9rem] uppercase opacity-50 cursor-pointer hover:opacity-100 ">colossus</h3>
               <h3 className="text-[0.9rem] uppercase opacity-50 cursor-pointer hover:opacity-100 ">careers</h3>
               <h3 className="text-[0.9rem] uppercase opacity-50 cursor-pointer hover:opacity-100 ">news</h3>
           </div>
           <button className="btn text-[0.9rem] uppercase border-1 border-white/50 rounded-[20px] flex items-center cursor-pointer hover:bg-white/20">try grok</button>
       </div>
      </div>
    </div>
  )
}

export default Navigation