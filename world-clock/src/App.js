import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.jsx";
import React, { useState, useEffect } from "react";

export default function App() {
  const BASE_URL = "http://worldtimeapi.org/api/timezone";
  let timeZones = ["Europe/London", "America/NewYork", "Asia/Tokyo"];

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      fetch( BASE_URL + timeZones[i])
        .then((response) => response.json())
        .then((data) => (setTimeData(data)));
    }
  }, []);

  const initialTimeData = {
    longHand: "",
    shortHand: "",
    cityTitle: "",
    addressLine1: "",
    addressLine2: "",
  };
  const [LondonTimeData, setLondonTimeData] = useState(initialTimeData);
  const [timeData, setTimeData]= useState([])

  return (
    <div className="App">
      <Clock timeData={timeData} />
    </div>
  );
}
