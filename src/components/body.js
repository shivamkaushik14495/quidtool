import React from 'react'
import data from './data.json';
import testing from "./Receipt-Generator.jpg"
import './body.css';
const Body = () => {
  return (
    <div className='tools'>
      {/* Uncomment this to fetch data from json file */}
      {/* {data.tooldata.map(user =>(<a className='tool' href='./Quid_tool.png' key={user.id}><img src={user.imglink} alt={user.tooName}></img></a>))} */}
        <a className='tool' href='./Quid_tool.png'><img src={testing} alt='toolimage'></img></a>
    </div>
  )
}

export default Body