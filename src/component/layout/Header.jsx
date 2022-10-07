import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fw-bold">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img src="assets/10001.png" alt=" " width={100} />

        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" href="#">
                Tokenomics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Road Map
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                Documents
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="#">
                FAQ
              </a>
            </li>
      
            <li className="nav-item">
              <a className="nav-link active text-white">MINT FLOH RAFFLE NFT</a>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  );
}
