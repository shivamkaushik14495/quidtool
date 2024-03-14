import React from 'react'
// import '.data.js';
import testing from "./Receipt-Generator.jpg"
import './body.css';
const Body = () => {
  return (
    <div className='tools'>
        <a className='tool' href='./Quid_tool.png'><img src={testing} alt='toolimage'></img></a>
    </div>
  )
}

export default Body