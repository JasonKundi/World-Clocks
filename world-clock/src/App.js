import logo from "./logo.svg";
import "./App.css";
import Clock from "./components/Clock.jsx"
import React, {useState, useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("pageLoaded")
  }, [])

  
  const initialTimeData = {
    longHand: "",
    shortHand: "",
    cityTitle: "" ,
    addressLine1: "",
    addressLine2: "",
  }
  const [timeData, setTimeData] = useState(initialTimeData)

  return (
    <div className="App">
      <Clock 
      timeData={timeData}/>
    </div>
  );
}

export default App;
