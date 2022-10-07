import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


function Footer() {
  return (
    <div className="container-fluid   text-center   text-white" id='foot' >


      <div className="row">

      <div className="col-md-12 ">
    <div>
<AiFillLinkedin size={50} color="yellow"/>


    
    <AiFillTwitterCircle size={50} color="blue" />

</div>

  </div>
     



  </div>

  
      
        
       
<hr />
<div className="row">
  

  <div className="col-md-12 text-center">

  {/* <a className="navbar-brand" href="#"><img src="assets/download.png" alt=" "width={200} /></a> */}
<div className='style9 '>© 2022 Quant Network Limited. All rights reserved</div>
  </div> 
 
      </div>
    </div>
  )
}

export default Footer
