import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs';

export default function 
() {
  return (
 
        <div className="container-fluid" id='Doc'>
      <div className="container my-5" id='Con'>


        <div className="row">


            <div className="col-md-8">
<h3>White Paper</h3>
<h1>
    Read Our Documents
</h1>
<div className='d-flex my-5'>

<div className='d-flex'>
<BsFillCheckCircleFill size="50px" color='orange'/> 
<h1>KYC</h1>
</div>
<div className='d-flex mx-5 '>
<BsFillCheckCircleFill size="50px"  color='orange'/> 
<h1>Audit</h1>
</div>
<div className='d-flex'>
<BsFillCheckCircleFill size="50px" color='orange' /> 
<h1>WhitePaper</h1>
</div> 
</div>

<div className="dropdown">
  <button className="dropbtn" type="button" data-bs-toggle="dropdown" >
    Download
  </button>
  <ul className="dropdown-content dropdown-menu-white ">
    <li><a className="dropdown-item active" href="#">KYC</a></li>
    <li><a className="dropdown-item" href="#">Audit</a></li>
    <li><a className="dropdown-item" href="#">Whitepaper</a></li>
    
  </ul>
</div>
{/* <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div> */}


            </div>
            <div className="col-md-4">

            <a className="navbar-brand" href="#"><img src="assets/bolll.png" alt=" "width={270} /></a>

            </div>
        </div>
      </div>
      </div>
   
  )
}
