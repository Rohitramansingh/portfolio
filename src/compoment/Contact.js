import React, { useState } from 'react';
function Contact()
{
  
 const [fullname,setfullname]=useState({
   fname:"",
   email:"",
   contact:"",
   Addressed:""
 })

 const inputevent=(event)=>{
 
   const  { name,value}=event.target;

   setfullname((prevalue)=>{
     return{
       ...prevalue,
       [name]:value,
     }
   })
 
 }

 const submit=()=>{
   
     alert("form successfully submit");
   
 
 }
    return(
        <div className="text-center my-5">
       <h4 className="text-center my-4">
         <span className="text-info">Thankyou</span>
         for show your interest
       </h4>
    <div className="contact_form ">
       

            <input type="text"
              className="inputfield"
              placeholder="enter your full name"
              name="fname"
              value={fullname.fname}
              onChange={inputevent}
              ></input>

            <input type="email"
            className="inputfield"
              placeholder="enter your emaail "
              name="email"
              value={fullname.email}
              onChange={inputevent}
              ></input>

             <input type="number"
             className="inputfield"
              placeholder="enter your contact  number"
              name="contact"
              value={fullname.contact}
              onChange={inputevent}
              ></input>

            <input type="text"
            className="inputfield"
              placeholder="enter your Addressed "
              name="Addressed"
              value={fullname.Addressed}
              onChange={inputevent}
              ></input>

              <button className="inputfield btn_style" onClick={submit}>submit</button>
    </div>
    </div>
    )
    
}

export default Contact;