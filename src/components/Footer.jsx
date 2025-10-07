import React from 'react'

const Footer = () => {
  return (
    <div>
     <div className="footer w-full h-[120vh] relative border-t-1 border-white/20">
          <img src="https://x.ai/bg/footer-gradient.webp" alt="" className='w-full h-full absolute top-0 left-0 object-cover'/>
          <div className="footer-hold w-full h-[60vh] relative flex">
             <div className="f-c w-[50%] flex flex-col items-start gap-5">
                 <h3 className='opacity-60 uppercase text-[0.8rem]  tracking-[1.4px]'>try grok on</h3>
                 <h2>Web</h2>
                 <h2>IOS</h2>
                 <h2>Android</h2>
                 <h2>Grok on X</h2>
             </div>
             <div className="f-c w-[50%] flex flex-col items-start gap-5">
                 <h3 className='opacity-60 uppercase text-[0.8rem]  tracking-[1.4px]'>products</h3>
                 <h2>Grok</h2>
                 <h2>API</h2>
             </div>
             <div className="f-c w-[50%] flex flex-col items-start gap-5">
                 <h3 className='opacity-60 uppercase text-[0.8rem]  tracking-[1.4px]'>company</h3>
                 <h2>Company</h2>
                 <h2>Careers</h2>
                 <h2>Contact</h2>
                 <h2>News</h2>
             </div>
             <div className="f-c w-[50%] flex flex-col items-start gap-5">
                 <h3 className='opacity-60 uppercase text-[0.8rem]  tracking-[1.4px]'>resources</h3>
                 <h2>Documentation</h2>
                 <h2>Privacy Policy</h2>
                 <h2>Security</h2>
                 <h2>Safety</h2>
                 <h2>Legal</h2>
                 <h2>Status</h2>
             </div>
          </div>
     </div>
    </div>
  )
}

export default Footer