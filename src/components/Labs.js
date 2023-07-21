import React from 'react'
import { useNavigate } from 'react-router-dom'
function Labs() {
    const navigate=useNavigate();
    function clickHandler(){
        navigate("/supportss");
    }
    function backHandler() {
        navigate(-1);
    }
  return (
    <div>
     <div>This is Labs page</div>
    <button  onClick={clickHandler} >Move to support Page</button>
    <button  onClick={backHandler} >Go Back</button>
    </div>
   
  )
}

export default Labs