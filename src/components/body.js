import React from 'react'
import testing from './sample-image.jpg'
import './body.css'
const Body = () => {
  return (
    <div className='tools'>
        <a className='tool' href='./Quid_tool.png'><img src={testing} alt='toolimage'></img></a>
        <a className='tool' href='./Quid_tool.png'><img src={testing} alt='toolimage'></img></a>
        <a className='tool' href='./Quid_tool.png'><img src={testing} alt='toolimage'></img></a>
        <a className='tool' href='./Quid_tool.png'><img src={testing} alt='toolimage'></img></a>
        <a className='tool' href='./Quid_tool.png'><img src={testing} alt='toolimage'></img></a>
        <a className='tool' href='./Quid_tool.png'><img src={testing} alt='toolimage'></img></a>
    </div>
  )
}

export default Body