import React from 'react'

const LandingPage = () => {
  return (
    <div>
       <div className='land-page w-full h-screen bg-gray-400 relative'>
          <video className='rotate-180 absolute top-0 left-0 w-full h-full object-cover'
             autoPlay
             loop
             muted
             playsInline
             src="./bg-fog.mp4"
          />
          <div className="land-main absolute w-full h-[30vh] z-10 top-[50%]">
             <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
             <p className="mt-4">We are glad to have you here. Explore our services and offerings.</p>
          </div>
       </div>
          <div className=" w-full h-[100vh] bg-red-700">
          </div>
    </div>
  )
}

export default LandingPage