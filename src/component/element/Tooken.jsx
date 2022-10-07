import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

export default function Tooken() {
  return (
    <div className="container-fluid " id="tooken">
    <div className="container" >
      <div className="row">
        <div className="col-md-12 mx-4 ">
          <h4 className="fw-bold mt-4 "> WHAT IS OUR TOKENOMICS</h4>
          <p>
            At Halloween Floki, we are designing a project based on definitive
            market rules and fundamental economic principles. Halloween Floki
            reconciles a high-performance protocol with integral price stability
            features.
            <br />
            <br />
          </p>
          <p>Total Sudopply: 1 000 000 000 000 FLOH</p>
          <br />
          
          <p>8% Buy and Sell Tax:</p>
          <br />
          <p>
            4% holders rewards: Dividend tax on all transactions that will be
            distributed every 24 hours to holders in BUSD.
            <br />
            1% liquidity: Liquidity tax on all transactions to prevent major
            price fluctuation after a large trade by filling the liquidity pool.
            <br />
            3% marketing: Marketing tax on all transactions allows the Halloween
            Floki marketing team to reinvest and grow the project to its maximum
            potential.
          </p>
          <h4 className="fw-bold my-5">WHAT ARE OUR FEATURES</h4>
        </div>
        <div className="row">
          <div className="col-md-3 ">
            <div
              className="card text-bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <AiFillLinkedin size={60} color="" />

              <div className="card-body">
                <h5 className="card-title fw-bold">$BUSD Rewards</h5>
                <p className="card-text">
                 Earn automatic Binance pegged USD ($BUSD), rewards by holding your Halloween Floki Coin – 4% of every buy, transfer and sell transaction is redistributed automatically to $FLOH holders. You will receive the rewards automatically in your wallet or claim your rewards manually in our upcoming reward app tracker.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card text-bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <AiFillLinkedin size={60} color="" />

              <div className="card-body">
                <h5 className="card-title fw-bold">Marketing</h5>
                <p className="card-text">
                 Earn automatic Binance pegged USD ($BUSD), rewards by holding your Halloween Floki Coin – 4% of every buy, transfer and sell transaction is redistributed automatically to $FLOH holders. You will receive the rewards automatically in your wallet or claim your rewards manually in our upcoming reward app tracker.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card text-bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <AiFillLinkedin size={60} color="" />

              <div className="card-body">
                <h5 className="card-title fw-bold">Liquidity Pool</h5>
                <p className="card-text">
                 Earn automatic Binance pegged USD ($BUSD), rewards by holding your Halloween Floki Coin – 4% of every buy, transfer and sell transaction is redistributed automatically to $FLOH holders. You will receive the rewards automatically in your wallet or claim your rewards manually in our upcoming reward app tracker.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card text-bg-light mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <AiFillLinkedin size={60} color="" />

              <div className="card-body">
                <h5 className="card-title fw-bold">Anti-Whale Mechanism</h5>
                <p className="card-text">
                 Earn automatic Binance pegged USD ($BUSD), rewards by holding your Halloween Floki Coin – 4% of every buy, transfer and sell transaction is redistributed automatically to $FLOH holders. You will receive the rewards automatically in your wallet or claim your rewards manually in our upcoming reward app tracker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
