import React, { useState } from 'react';

const LandingPage = () => {

const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim() === '') return;
    setQuery('');

    const encoded = encodeURIComponent(query);
    const grokUrl = `https://grok.com/c/${encoded}`;
    window.location.href = grokUrl;
  };

  return (
    <div>
       <div className='land-page w-full h-screen relative border-b-2 border-[#1f2329]'>
          <video className='rotate-180 absolute top-0 left-0 w-full h-full object-cover'
             autoPlay
             loop
             muted
             playsInline
             src="./bg2.mp4"
          />
          <div className="land-main absolute w-full h-[70vh] bottom-0 left-0 flex flex-col items-center">
             <img src="./land bg.png" className="h-[50vh] absolute bottom-[36%]" alt="" />
             <div className="input-box z-2 w-[55vw] flex absolute top-[32%] ">
                  <textarea name="prompt" value={query} onChange={(e) => setQuery(e.target.value)} id='prompt' className="block h-[120px] w-full bg-black border-1 border-white/50 rounded-[20px]" placeholder='what do you want to know?'></textarea>
                  <button onClick={handleSubmit} className="w-[40px] h-[40px] rounded-[50%] absolute bottom-2.5 right-2.5 flex items-center justify-center bg-[#858585] cursor-pointer"><i class="ri-arrow-up-line text-black text-[1.3rem]"></i></button>
             </div>
             <div className="land-bottom w-full absolute bottom-0 flex items-center justify-between">
               <i class="ri-arrow-down-line text-[2.4rem]"></i>
               <div className=" flex justify-end items-center w-full gap-[45px]">
                   <h4 className="w-[40%] font-[500]">Grok 4 is the most intelligent model in the world. Available now to SuperGrok and Premium+ subscribers, as well as our API.</h4>
                   <button className="bg-transparent border-1 border-white/50 rounded-full uppercase text-[0.8rem] cursor-pointer hover:bg-white/20">read announcement</button>
               </div>
             </div>
          </div>
       </div>
          <div className="page2 w-full min-h-full bg-[#0a0a0a] ">
               <div className="products w-full min-h-full">
                  <div className="pro-about flex flex-col gap-10">
                     <h3 className = "text-[0.8rem] uppercase tracking-[.15em] opacity-50" >[&nbsp;products&nbsp;]</h3>
                     <h1 className = "text-[3rem] font-[500]" >AI for all humanity</h1>
                  </div>
                  <div className="pro-boxs w-full min-h-full flex relative">
                      <div className="pro-box w-[35vw] h-[93vh] border-l-1 border-r border-white/20 hover:border-l-0 flex flex-col justify-between relative">
                         <div className="hover-bg w-full h-[50%] absolute left-0 top-0"></div>
                         <div className="border-dots w-full h-full absolute top-0 left-0 z-10 opacity-0">
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] top-[-1px] left-[-1px]"></div>
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] top-[-1px] right-[-1px]"></div>
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] bottom-[-1px] left-[-1px]"></div>
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] bottom-[-1px] right-[-1px]"></div>
                         </div>
                         <div className="pro-com z-2">
                          <h1 className='text-[1.4rem]'>Grok</h1>
                          <p className='text-[1rem] opacity-50 font-300'>Grok is your cosmic guide, now accessible on grok.com, iOS, and Android. Explore the universe with AI.</p>
                         </div>
                         <div className="pro-com">
                            <svg viewBox="0 0 555 384" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-full'>
                           <g opacity="0.4"><mask id="path-1-inside-1_33863_16844" fill="white">
                             <path d="M212.153 339.153L394.78 204.177C403.734 197.56 416.531 200.141 420.798 210.42C443.251 264.625 433.219 329.767 388.546 374.494C343.874 419.218 281.716 429.027 224.903 406.688L162.84 435.458C251.857 496.374 359.952 481.31 427.5 413.635C481.08 359.991 497.674 286.87 482.158 220.932L482.298 221.072C459.797 124.205 487.83 85.4866 545.253 6.31254C546.611 4.43528 547.971 2.55799 549.33 0.633789L473.766 76.2879V76.0533L212.106 339.201">
                             </path>
                             </mask><path d="M394.78 204.177L394.186 203.373L394.186 203.373L394.78 204.177ZM420.798 210.42L421.722 210.037L421.721 210.036L420.798 210.42ZM388.546 374.494L387.838 373.787L387.838 373.787L388.546 374.494ZM224.903 406.688L225.269 405.757L224.871 405.601L224.483 405.781L224.903 406.688ZM162.84 435.458L162.419 434.551L160.824 435.29L162.275 436.283L162.84 435.458ZM427.5 413.635L426.793 412.928L426.793 412.928L427.5 413.635ZM482.158 220.932L482.865 220.225L480.379 217.739L481.184 221.161L482.158 220.932ZM482.298 221.072L481.591 221.78L484.063 224.252L483.272 220.846L482.298 221.072ZM545.253 6.31254L546.062 6.89965L546.063 6.89865L545.253 6.31254ZM549.33 0.633789L550.147 1.21086L548.623 -0.0728977L549.33 0.633789ZM473.766 76.2879H472.766V78.7042L474.473 76.9946L473.766 76.2879ZM473.766 76.0533H474.766V73.6293L473.057 75.3482L473.766 76.0533ZM212.747 339.957L395.375 204.981L394.186 203.373L211.558 338.349L212.747 339.957ZM395.375 204.981C403.889 198.689 415.895 201.216 419.874 210.803L421.721 210.036C417.167 199.065 403.579 196.431 394.186 203.373L395.375 204.981ZM419.874 210.802C442.181 264.655 432.211 329.362 387.838 373.787L389.253 375.2C434.228 330.173 444.321 264.596 421.722 210.037L419.874 210.802ZM387.838 373.787C343.472 418.206 281.745 427.964 225.269 405.757L224.538 407.619C281.688 430.091 344.276 420.231 389.253 375.2L387.838 373.787ZM224.483 405.781L162.419 434.551L163.26 436.365L225.324 407.595L224.483 405.781ZM162.275 436.283C251.698 497.477 360.327 482.35 428.208 414.341L426.793 412.928C359.578 480.269 252.017 495.272 163.405 434.633L162.275 436.283ZM428.208 414.341C482.048 360.437 498.721 286.956 483.131 220.703L481.184 221.161C496.627 286.785 480.112 359.545 426.793 412.928L428.208 414.341ZM481.451 221.639L481.591 221.78L483.005 220.365L482.865 220.225L481.451 221.639ZM483.272 220.846C472.052 172.544 473.454 138.852 484.745 107.395C496.061 75.8726 517.325 46.5225 546.062 6.89965L544.443 5.72543C515.758 45.2767 494.295 74.873 482.863 106.72C471.407 138.633 470.043 172.734 481.324 221.299L483.272 220.846ZM546.063 6.89865C547.42 5.02254 548.783 3.14048 550.147 1.21086L548.514 0.056717C547.158 1.9755 545.802 3.84801 544.443 5.72643L546.063 6.89865ZM548.623 -0.0728977L473.058 75.5812L474.473 76.9946L550.038 1.34048L548.623 -0.0728977ZM474.766 76.2879V76.0533H472.766V76.2879H474.766ZM473.057 75.3482L211.397 338.496L212.815 339.906L474.475 76.7584L473.057 75.3482Z" fill="url(#paint0_linear_33863_16844)" mask="url(#path-1-inside-1_33863_16844)">
                             </path><mask id="path-3-inside-2_33863_16844" fill="white"><path d="M174.472 371.957C110.58 310.85 121.596 216.283 176.112 161.749C216.425 121.387 282.474 104.914 340.13 129.131L402.054 100.502C390.898 92.4302 376.6 83.7478 360.194 77.6466C286.037 47.094 197.253 62.2999 136.971 122.607C78.9858 180.662 60.7511 269.926 92.0642 346.097C115.455 403.025 77.1107 443.292 38.485 483.936C24.7972 498.343 11.0626 512.752 0 528.005L174.425 372.003"></path></mask><path d="M176.112 161.749L176.82 162.456L176.82 162.456L176.112 161.749ZM340.13 129.131L339.743 130.053L340.15 130.224L340.55 130.039L340.13 129.131ZM402.054 100.502L402.473 101.41L404.024 100.693L402.64 99.6923L402.054 100.502ZM360.194 77.6466L359.813 78.5712L359.829 78.5778L359.845 78.5839L360.194 77.6466ZM136.971 122.607L136.264 121.9L136.264 121.901L136.971 122.607ZM92.0642 346.097L92.9892 345.717L92.9891 345.717L92.0642 346.097ZM38.485 483.936L37.7602 483.247L37.7601 483.247L38.485 483.936ZM0 528.005L-0.809497 527.417L0.666647 528.75L0 528.005ZM175.164 371.234C111.747 310.583 122.627 216.666 176.82 162.456L175.405 161.042C120.565 215.899 109.413 311.118 173.781 372.679L175.164 371.234ZM176.82 162.456C216.864 122.363 282.485 106.003 339.743 130.053L340.518 128.209C282.463 103.825 215.986 120.411 175.405 161.042L176.82 162.456ZM340.55 130.039L402.473 101.41L401.634 99.5947L339.711 128.223L340.55 130.039ZM402.64 99.6923C391.435 91.5845 377.057 82.8508 360.542 76.7093L359.845 78.5839C376.143 84.6447 390.361 93.2758 401.468 101.313L402.64 99.6923ZM360.574 76.722C286.054 46.0198 196.839 61.2995 136.264 121.9L137.678 123.314C197.667 63.3002 286.019 48.1683 359.813 78.5712L360.574 76.722ZM136.264 121.901C77.9954 180.238 59.6717 269.931 91.1393 346.477L92.9891 345.717C61.8304 269.922 79.9763 181.085 137.679 123.314L136.264 121.901ZM91.1392 346.477C102.707 374.631 99.0188 398.622 87.6422 420.665C76.2299 442.776 57.0987 462.898 37.7602 483.247L39.2099 484.625C58.4971 464.33 77.8509 443.996 89.4195 421.582C101.024 399.098 104.812 374.492 92.9892 345.717L91.1392 346.477ZM37.7601 483.247C24.083 497.643 10.2993 512.101 -0.809497 527.417L0.809497 528.592C11.8259 513.403 25.5115 499.043 39.21 484.625L37.7601 483.247ZM0.666647 528.75L175.091 372.748L173.758 371.257L-0.666647 527.259L0.666647 528.75Z" fill="url(#paint1_linear_33863_16844)" mask="url(#path-3-inside-2_33863_16844)"></path></g><defs><linearGradient id="paint0_linear_33863_16844" x1="356.085" y1="0.633789" x2="356.085" y2="473.752" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.802422"></stop></linearGradient><linearGradient id="paint1_linear_33863_16844" x1="201.027" y1="62.3223" x2="201.027" y2="528.005" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.802422"></stop></linearGradient></defs>
                            </svg>
                         </div>
                         <div className="pro-com relative  bottom-[5%] left-[30%] z-11">
                          <button className=" bg-transparent border-1 border-white/50 rounded-full uppercase text-[0.9rem] font-[600] cursor-pointer hover:bg-white/20 ">use &nbsp;now &nbsp;<i class="ri-arrow-right-up-line"></i></button>
                         </div>
                      </div>
                      <div className="pro-box w-[35vw] h-[93vh] flex flex-col justify-between relative">
                         <div className="hover-bg w-full h-[50%] absolute left-0 top-0"></div>
                         <div className="border-dots w-full h-full absolute top-0 left-0 z-10 opacity-0">
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] top-[-1px] left-[-1px]"></div>
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] top-[-1px] right-[-1px]"></div>
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] bottom-[-1px] left-[-1px]"></div>
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] bottom-[-1px] right-[-1px]"></div>
                         </div>
                         <div className="pro-com z-2">
                           <h1 className='text-[1.4rem]'>API</h1>
                           <p className='text-[1rem] opacity-50 font-300'>Supercharge your applications with Grok's enhanced speed, precision, and multilingual capabilities.</p>
                         </div>
                         <div className="pro-com">
                            <svg viewBox="0 0 488 382" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-full'>
                                <g opacity="0.4"><rect x="2.21289" y="1.66309" width="484.288" height="415.415" stroke="url(#paint0_linear_33863_16843)"></rect><path d="M16.1765 19.6311L24.299 31.4842H27.9093L19.786 19.6311H16.1765ZM19.7832 26.2144L16.1719 31.4842H19.785L21.5893 28.8498L19.7832 26.2144ZM28.7352 13.1509L22.4928 22.2599L24.299 24.8962L32.3483 13.1509H28.7352ZM29.389 18.7873V31.4842H32.3483V14.469L29.389 18.7873Z" fill="white"></path><rect x="406.045" y="14.8174" width="45" height="15" rx="4.5" stroke="white"></rect><circle cx="467.545" cy="22.3174" r="7.5" stroke="white"></circle><line x1="88.041" y1="42.1299" x2="88.041" y2="418.281" stroke="url(#paint1_linear_33863_16843)"></line><line x1="486.502" y1="42.582" x2="2.21051" y2="42.5821" stroke="white"></line></g><defs><linearGradient id="paint0_linear_33863_16843" x1="244.357" y1="1.16309" x2="244.357" y2="417.578" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.8" stop-color="#0A0A0A"></stop></linearGradient><linearGradient id="paint1_linear_33863_16843" x1="86.5402" y1="42.1299" x2="86.5402" y2="418.281" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.8" stop-color="#0A0A0A"></stop></linearGradient></defs>
                            </svg>
                         </div>
                         <div className="pro-com relative  bottom-[5%] left-[30%] z-11">
                         <button className="bg-transparent border-1 border-white/50 rounded-full uppercase text-[0.9rem] font-[600] cursor-pointer hover:bg-white/20 ">build &nbsp;now &nbsp;<i class="ri-arrow-right-up-line"></i></button>
                         </div>
                      </div>
                      <div className="pro-box w-[35vw] h-[93vh] border-l-1 border-white/20 hover:border-l-0 flex flex-col justify-between relative">
                         <div className="hover-bg w-full h-[50%] absolute left-0 top-0"></div>
                         <div className="border-dots w-full h-full absolute top-0 left-0 z-10 opacity-0">
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] top-[-1px] left-[-1px]"></div>
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] top-[-1px] right-[-1px]"></div>
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] bottom-[-1px] left-[-1px]"></div>
                            <div className="b-dot absolute bg-white w-[5px] h-[5px] bottom-[-1px] right-[-1px]"></div>
                         </div>
                         <div className="pro-com z-2">
                          <h1 className='text-[1.4rem]' >Developer Docs</h1>
                          <p className='text-[1rem] opacity-50 font-300'>Learn how to quickly install Grok at the heart of your applications and explore guides covering common use cases.</p>
                         </div>
                         <div className="pro-com flex flex-col relative w-full h-[100%] overflow-hidden">
                           <svg viewBox="0 0 489 382" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-full absolute top-0 left-[7%]'>
                             <g opacity="0.5"><rect x="10.2715" y="30" width="432" height="357" fill="#0A0A0A" stroke="url(#paint2_linear_33868_17064)"></rect></g><defs><linearGradient id="paint2_linear_33868_17064" x1="226.271" y1="34" x2="226.271" y2="390" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.8" stop-color="white" stop-opacity="0"></stop></linearGradient></defs>
                            </svg>
                            <svg viewBox="0 0 489 382" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-full absolute top-[6%] left-[3%]'>
                             <g opacity="0.5"><rect x="10.2715" y="30" width="432" height="357" fill="#0A0A0A" stroke="url(#paint2_linear_33868_17064)"></rect></g><defs><linearGradient id="paint2_linear_33868_17064" x1="226.271" y1="34" x2="226.271" y2="390" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.8" stop-color="white" stop-opacity="0"></stop></linearGradient></defs>
                            </svg>
                            <svg viewBox="0 0 489 382" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-full absolute top-[13%] left-[-2%]'>
                             <g opacity="0.5"><rect x="10.2715" y="30" width="432" height="357" fill="#0A0A0A" stroke="url(#paint2_linear_33868_17064)"></rect><line x1="55.6387" y1="97.6836" x2="394.812" y2="97.6836" stroke="white" stroke-opacity="0.7"></line><line x1="55.6387" y1="135.651" x2="394.812" y2="135.651" stroke="white" stroke-opacity="0.6"></line><line x1="55.6387" y1="173.618" x2="394.812" y2="173.618" stroke="white" stroke-opacity="0.5"></line><line x1="55.6387" y1="211.585" x2="394.812" y2="211.585" stroke="white" stroke-opacity="0.4"></line><line x1="55.6387" y1="249.552" x2="394.812" y2="249.552" stroke="white" stroke-opacity="0.3"></line><line x1="55.6387" y1="287.52" x2="394.812" y2="287.52" stroke="white" stroke-opacity="0.2"></line><line x1="55.6387" y1="325.487" x2="394.812" y2="325.487" stroke="white" stroke-opacity="0.1"></line></g><defs><linearGradient id="paint2_linear_33868_17064" x1="226.271" y1="34" x2="226.271" y2="390" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="0.8" stop-color="white" stop-opacity="0"></stop></linearGradient></defs>
                           </svg>
                         </div>
                         <div className="pro-com relative  bottom-[5%] z-11">
                           <button className="bg-transparent border-1 border-white/50 rounded-full uppercase text-[0.9rem] font-[600] cursor-pointer hover:bg-white/20 relative bottom-[1%] left-[30%] w-[145px]">learn &nbsp;now &nbsp;<i class="ri-arrow-right-up-line"></i></button>
                         </div>
                      </div>
                  </div>
               </div>
          </div>
    </div>
  )
}

export default LandingPage