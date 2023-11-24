// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the correct time immediately
updateClock();

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").innerText = timeString;
}


/*

import React from "react"
import ReactDom from "react-dom"

function App() {
     const date = new Date()
     const hours = date.getHours() 
     const minutes = date.getMinutes()
     let timeOfDay
     
     if (hours < 12) {
         timeOfDay = " Good Morning"
     } else if (hours >=12 && hours < 17) {
         timeOfDay = "Good Afternoon"
     } else {
         timeOfDay = "Good Night"
     }
      
    return (
    <h3> {timeOfDay} </h3>
    )
}


ReactDom.render(<App />, document.getElementById("roots"))

*/
