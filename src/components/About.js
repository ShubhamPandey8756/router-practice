import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate=useNavigate();
  function clickHandler(){
      navigate("/");
  }
  return (
    <>
    <div>This is about page</div>
    <div>
           <button onClick={clickHandler}>Go Home</button>
    </div>
     
    </>
   
  )
}

export default About