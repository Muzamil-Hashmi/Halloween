import React from 'react'

export default function Card4() {
  return (
    <div>
      <div className="contaiber">
        <div className="row">

            <div className="col-md-6">   <div className="col-md-6">
              <div
                className="card text-bg-light mb-3"
                style={{ maxWidth: "18rem" }}
              >
                {/* <AiFillLinkedin size={60} color="" /> */}

                <div className="card-body">
                  <h5 className="card-title fw-bold">Phase 1</h5>
                  <p className="">
                  <ul>
                    <li>Team Expensions </li>
                    <li>
                    Social Media and Community Integration
                    </li>
                    <li>
                    Contract Creation
                    </li>
                    <li>Website Deployment</li>
                    <li>Audit and  KYC</li>
                  </ul>
                  </p>
                </div>
              </div>
            </div></div>
            <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  )
}
