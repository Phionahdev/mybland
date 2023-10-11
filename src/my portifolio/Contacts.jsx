import React from 'react'
import Navigation from './Navigation'

function Contacts() {
  return (
    <div className='min-h-screen  bg-gradient-to-b from-slate-400 to-slate-700'>
         <Navigation/><br/><br/>
         <div>
         <div className='text-right p-12'>
            <h1><b>
                MY CONTACTS
                </b></h1>
                <h5><b>
                EMAIL:<span className='text-blue-400'>mutoniphionah10@gmail.com</span>
                </b></h5>
                <b>Tel:+(256)780545959</b>
         </div>
         <div className='bg-blue-900 w-[300px] h-[380px] rounded-lg'>

         
         <div className='justify-between px-12'>
            <form action="">
<b>your email</b>: <br/> <input type='int'name='your email'placeholder='enter your email here 'className='border rounded'/><br/><br/>
<b>your name</b>: <br/> <input type='int'name='your email'placeholder='enter your name here'className='border rounded'/><br/><br/>
<b>your subject</b>:  <br/><input type='int'name='your email'placeholder='enter your subject here'className='border rounded'/><br/><br/>
<b>your phone number</b>: <br/> <input type='int'name='your email'placeholder='enter your phone number here'className='border rounded'/><br/><br/>
your message: <br/> <input type='int'name='your email'placeholder='enter your message here'className='border rounded h-[50px] '/><br/><br/>
            </form>
         </div>
         </div>
         </div>
         
    </div>
  )
}

export default Contacts
