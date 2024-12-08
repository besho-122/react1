import React, { useState } from 'react'

export default function App() {
  let text1=false;
  const [counter,setCounter ] =useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  }
  const Reset = () => {
    setCounter(0);
  }

  return (
    <div className="bg-success 2-50 text-center m-auto  ">
      <h1>counter is {counter} ! </h1>
      <button className="btn1"onClick={increaseCounter}>Increase</button>
      <button className="btn1"onClick={Reset}>Reset</button>
      <button className="btn1"onClick={Text}>Show | Hide Text</button>
      <div id="text">
  
      </div>


    </div>
  )
  function Text() {
    if (text1) {
      document.getElementById("text").innerHTML = "";
      text1=false;
    }
    else {
      document.getElementById("text").innerHTML = '<h1>Mohammad Nihad Bishawi</h1>';
      text1=true;
    }
    
  }




}
