import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';



export default function Hero() {
  return (
    <div className="container-fluid "id='Hero'>
   <div className="container text-center " >

    <div className="row">
      <div className="col-md-6 mt-5">

        <h1 className='display-1 fw-bold ' id='name'>Halloween Floki</h1>
      </div>
      <div className="col-md-6 mt-5">

      <div className="card border-primary mb-3" style={{maxWidth: '38rem'}}>
  <div className="card-body ">
    <h5 className="card-title">$FLOH Live Now!</h5>
    <button type="button" className="btn btn-secondary mt-3" disabled>Button</button>

    <p className="card-text my-4 ">Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd9edd326</p>
    <AiFillLinkedin size={40} color=""/>
    <AiFillTwitterCircle size={40} color="blue" />


  </div>
</div>

      </div>
    </div>
   </div>
   </div>
  )
}
