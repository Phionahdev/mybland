import React from 'react'
import Navigation from './Navigation'

function Servicepage() {
  return (
    <div className='min-h-screen  bg-gradient-to-b from-slate-400 to-slate-700'>
         <Navigation/><br/><br />
         <div className='flex justify-between m-top'>
         <div className='text-[30px]'>
            <h1><b>What I Do</b></h1>
            </div>
            <div className='md:w-1/2'>
                <img src="me.jpg" alt=""className='rounded-md w-6/12' />
            </div>
            
         </div>
         <div className='bg-gradient-to-tr from-pink-500 to-pink-100 w-[500px] h-[200px] border rounded-lg'>
                    <h1><b>SERVICE</b></h1>
                    <li><b>UI & UX Design
                        </b></li>
                        <li><b>Front End Development</b></li>
                        <li><b>Database Administration</b></li>

                     <li><b>Computer Maintenance</b>
                   </li>
                   <b></b>
                   <li><b>Camera installation</b></li></div>
    </div>
  )
}

export default Servicepage
