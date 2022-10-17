import React from "react";
import initialTimeData from "../App.js"

export default function Clock({timeData}) {
    console.log(timeData)

  return (
    <div className="clock">
      <div className="clock--long-hand"></div>
      <div className="clock--short-hand"></div>
      <h2 className="city-title"></h2>
      <h3 className="address-line-1"></h3>
      <h3 className="line-2"></h3>
      <h4 className="hh-mm"></h4>
    </div>
  );
}
