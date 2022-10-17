import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.jsx"
import React, {useState, useEffect } from "react";

function App() {
  const BASE_URL = 'http://worldtimeapi.org/api/timezone'
  const URL_LOCATION = findTimeZones(timeZones)
  let timeZones = ["Europe/London", "America/NewYork", "Asia/Tokyo"]

  useEffect((BASE_URL + URL_LOCATION) => {
    fetch()
    .then((response) => response.json())
    .then((data) => console.log(data));
  }, []);

  const findTimeZones = (timeZones) => {
    for (let timezone of timeZones) {
      return timezone

  }



  const initialTimeData = {
    longHand: "",
    shortHand: "",
    cityTitle: "" ,
    addressLine1: "",
    addressLine2: "",
  }
  const [LondonTimeData, setLondonTimeData] = useState(initialTimeData)
  const [timeData, setTimeData] useState({
    
  })

  return (
    <div className="App">
      <Clock 
      timeData={timeData}/>
    </div>
  );
}

export default App;
