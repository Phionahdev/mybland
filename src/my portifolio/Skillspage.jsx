import React from 'react'
import Navigation from './Navigation'

function Skillspage() {
  return (
    <div className='min-h-screen  bg-gradient-to-b from-slate-400 to-slate-700'>
        <Navigation/>
        <div className='p-12 font-semibold'><br /><br />
            <div className='p-8'>
                <h1><b><u>MY SKILLS</u></b></h1><br/><br/>
                <div className='flex gap-8'>
                <div className='bg-gradient-to-tr from-blue-500 to-pink-100 w-[500px] h-[250px] border rounded-lg'>
                    <h1><b>Computer skills</b></h1>
                    <li>Familiar and able to use the computer in the following programs,
                        Ms-Word,Ms-Excel
                        Ms-Power point and PDF
                        </li>
                        <li>I am able to develop website</li>
                        <li>Database management:competant in working with databases including  MYSQL for data storage and retieval</li>
                    
                     <li>
                     Iam  acomputer literate a moderate typing speed and minimum errors
                   </li>
                   <li>iam able to use acomputer to surf internet and visit
                     wesites, send and receive e-mails and other social medials</li></div> 
                    <div className=' bg-gradient-to-tr from-blue-500 to-pink-100 w-[500px] h-[250px] border rounded-lg justify-between '>
                    <h1><b> BACK-END:</b></h1>
                    <li>PHP</li>
                    <li>JAVA</li>
                    <li>JAVA SCRIPT </li>
                    <h1><b>FRONT-END DEVELOPMENT EXPERIENCED IN:</b></h1>
                    <li>CSS</li>
                    <li>REACT .JS</li>
                    <li>HTML</li>
                    <li>TAILWIND CSS FOR BUILDING RESPONSIVE AND USER FRIENDLY USER INTERFACE</li>
                    </div>
                
                
                </div>
    
                </div>
            

            </div>
    </div>
  )
}

export default Skillspage
