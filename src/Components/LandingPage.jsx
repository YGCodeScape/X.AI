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
          <div className="land-content w-full h-[200vh] bg-red-700">
          </div>
       </div>
    </div>
  )
}

export default LandingPage