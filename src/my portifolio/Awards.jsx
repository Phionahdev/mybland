import React from "react";
import Navigation from "./Navigation";

function Awards() {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-slate-400 to-slate-700">
      <Navigation />
      <br />
      <br />

      <div className="text-[20px] p-12">
        <h1>
          <b>
            
              {" "}
              <div className="  text-sky-100 text-center font-extrabold  h-[100px] w-[200px]">
                AWARDS
              </div>
           
          </b>
        </h1>
      </div>
      <div className="md:flex items-center">
        <picture className="md:w-1/2">
          <img src="awrd.png" alt="" className="h-20 md:h-[420px]" />
        </picture>
        <div className="text-sky-100 md:text-[50px]">
          <li>
            <b>TOUTH IMPACT MISSION (YIM)</b>
          </li>
          <li>
            <b>AERG CERTIFICATE</b>
          </li>
          <li>
            <b>SOFTWARE DEVELOPMENT CERTIFICATE</b>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Awards;
