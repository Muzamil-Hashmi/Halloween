import React from "react";
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';

export default function () {
  return (
  <div className="container-fluid">
      <div className="container text-light " id="hall">
      <div className="row">
        <div className="col-md-6 ">
          <h5>_____WHAT IS HALLOWEEN FLOK</h5>
          <h1 className="display-5 fw-bold">From the Team That Brought You Valentine Floki</h1>
          <p>
            Halloween Floki (FLOH) is a meme cryptocurrency token operating on
            the BEP-20 Blockchain technology (Binance Smart Chain). With the
            great experience, knowledge and wisdom of the core team, FLOH will
            attempt to peak at the highest market cap a Floki sub-project has
            ever reached, all while distributing BUSD rewards every day to its
            holders
            <br />
            <br />
            We are taking advantage of the upcoming Holiday to gain the crypto
            community’s attention but as the weeks go by, this project will gain
            its reputation through continuous communication with its investors,
            aggressive marketing campaigns, listings and constant deliveries
            from the leadership team. Backed by cryptocurrency and stock market
            whales, we invite you on this journey to the double-digits millions
            market cap!
          </p>
          <AiFillLinkedin size={40} color="red"/>
    <AiFillTwitterCircle size={40} color="light-blue" />
        </div>
        <div className="col-md-6">
        <a className="navbar-brand" href="#"><img src="assets/10001.png" alt=" "width={350} /></a>

        </div>

      </div>
    </div>
  </div>
  );
}
