import React, {useState} from 'react'



export default function Textform(props) {
  const handleUpClick = ()=>{
   let newtext= text.toUpperCase();
    setText(newtext)
  }

  const handleLwClick = ()=>{
   let newtext= text.toLowerCase();
    setText(newtext)
  }


  const handleReverse = ()=>{
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newtext = strArr.join("");
    setText(newtext);
  }

  const handleClear =()=>{
    let newtext = ("");
    setText(newtext)
  }


  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState("Hi Asif");
  return (

    <>
<div className="container">
    <h2>{props.heading}</h2>
  <textarea className="form-control my-3" value={text} id="mytext" rows="8" onChange={handleOnChange} placeholder="Enter text here"></textarea>
  <button className="btn btn-outline-success m-2" onClick={handleUpClick}>TO UPPER CASE</button>
   <button className="btn btn-outline-success m-2" onClick={handleLwClick} >to lower case</button>
   <button className="btn btn-outline-success m-2" onClick={handleReverse} >Reverse Text</button>
   <button className="btn btn-outline-success m-2" onClick={handleClear}>Clear Text</button>
   
  
</div>
<div className="container my-3">
    <h3>Word Counter:</h3>
    <i><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters and <b>{0.008 * text.split(" ").length}</b> minutes Reading time</i>
    
    <div className=" my-3">
    <h3>Preview:</h3>
    <p>{text}</p>
    </div>
</div>
</>
    

  )
}
