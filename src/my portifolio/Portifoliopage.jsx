import React from "react";
import Navigation from "./Navigation";

function Portifoliopage() {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-slate-400 to-slate-700">
      <Navigation />
      <br />
      <br />
      <div>
        <div className="text-black p-8 ">
          <h1>
            <b>PORTIFOLIO</b>
          </h1>
          <br /> <br />
          <div className="flex flex-col md:flex-row justify-center  justify-between m-top">
            <picture className="md:w-1/2 md:h-1/2">
              <img
                src="talent.png"
                alt=""
                className="rounded-md w-[300px] h-[200px]"
              />
            </picture>

            <div className="md:w-1/2">
              <img
                src="pro.png"
                alt=""
                className="rounded-md w-[300px] h-[200px]"
              />
            </div>
            <div className="md:w-1/2">
              <img
                src="movielab.png"
                alt=""
                className="rounded-md w-[300px] h-[200px]"
              />
            </div>
            <div className="md:w-1/2">
              <img
                src="templet.png"
                alt=""
                className="rounded-md w-[300px] h-[200px]"
              />
            </div>
            <div className="md:w-1/2">
              <img
                src="cal.png"
                alt=""
                className="rounded-md w-[300px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portifoliopage;
