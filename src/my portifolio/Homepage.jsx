import React from 'react'

import Navigation from './Navigation'
import { FaFacebook,FaFigma,FaHeart,FaLinkedinIn,FaTelegram,FaTwitter} from 'react-icons/fa6'
function Homepage() {
  return (
    <div className=' min-h-screen  bg-gradient-to-b from-slate-400 to-slate-700'>
       <Navigation/>
       <div className='flex h-[70vh] justify-between px-12 items-center'> 

       <div>

        <h1><b>WELCO<span className='text-blue-400'lass>M</span>E  <span className='text-blue-400'>MY W</span> WORLD</b></h1><br/><br/>
       <h1><b>Hi I'm  <span className='text-red-400'>MUTONIPHIONAH</span> </b></h1>
       <h1><b><span>a</span>ui/ux desgner</b></h1>
       </div>
       <div className='md:w-1/2'><img src="Capture.PNG" alt=""className='rounded-md w-5/12' /></div>
       <div className='text-black absolute ml-10 items-center gap-4 z-40 mt-10 bottom-0 left-0'>
       </div>
        
       
       </div>
     <div className='flex justify-between px-12'>
        <div>
        <h1><b>FIND WITH ME</b></h1>
                 <div className='flex gap-2'><span className='bg-white p-1 rounded-md'>
            <FaFacebook/></span><span className='bg-white p-1 rounded-md'>
            <FaTwitter/></span><span className='bg-white p-1 rounded-md'><FaLinkedinIn/></span></div>   
        </div>

<div>
<h1> <b>BEST SKILL ON</b>  </h1>
<div className=' flex'>
                <div className='flex gap-2'>
        <span className='bg-white text-yellow-500 p-1 rounded-md'>
            <FaHeart/></span><span className='bg-white text-blue-500 p-1 rounded-md'>
            <FaFigma/></span><span className='bg-white text-pink-500 p-1 rounded-md'><FaLinkedinIn/></span></div>
            <div></div>
            </div>
</div>
            
        </div>
    </div>
    
    
  )
}

export default Homepage
