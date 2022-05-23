import React from 'react'

export default function Contact() {
  return (
    <div className="toggle_right">
    <div className="wrapper">
    <h1>Hey, we are still in the works, but you can send us message!</h1>
   <form action="">
       <div className="input">
           <label htmlFor="">
               first Name
           </label>
           <input type="text"  placeholder="Enter your first name" />
       </div>
       <div className="input">
           <label htmlFor="">
               last Name
           </label>
           <input type="text"  placeholder="Enter your last name" />
       </div>
       <div className="input">
           <label htmlFor="">
               Email address
           </label>
           <input type="email"  placeholder="Enter your email address" />
       </div>
       <div className="input">
           <label htmlFor="">
               Tell us what you need help with:
           </label>
           <textarea  cols="30" rows="5" placeholder='Enter a topic like channel problem'></textarea>
       </div>
       <button type='submit'>SEND NOW</button>
   </form>
    </div>
    </div>
  )
}
