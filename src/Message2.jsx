import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
const Message2 = () => {
    let[msg,setMsg]=useState("Hello")
    let updateHandler=(value)=>{
        console.log(value)
        setMsg(value)
    }
  return (
    <div>
        Message2
        <h2>value:{msg}</h2>
        <button onClick={updateHandler.bind(null,"Gm")}>GM</button>
        <button onClick={updateHandler.bind(null,"Ga")}>GM</button>
        <button onClick={updateHandler.bind(null,"Gn")}>GM</button>
        <button onClick={updateHandler.bind(null,"Ga")}>GM</button><br></br>
        <button className="btn btn-success">Test</button>
        </div>
  )
}
export default Message2