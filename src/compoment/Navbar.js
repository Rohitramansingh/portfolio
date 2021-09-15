import React from "react";
import img from './assets/dummy_image.png';
import {Link} from 'react-router-dom';

function Navbar ()
{
return (

<div className="Navbar_postion mb-5 ">
   <div className="container ">
       <div className="row">
           <div className="col-md-6 sub_navbar">
               <h5>
                   <span className="text-info">
                       Rohit Raman
                   </span>
                   Singh
               </h5>
           </div>

           <div className="col-md-6 sub_navbar ">
               <Link to="/contact">

              <button className="postion_right">Contact me</button>
              </Link>
                   
           </div>

       </div>
   </div>


</div>

)
}
export default Navbar;
