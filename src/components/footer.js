import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footernav'>
            <ul className='footerlinks'>
                <li className='footernavlinks'>About us</li>
                <li className='footernavlinks'>Explore Tools</li>
                <li className='footernavlinks'>Give Tools Suggestions</li>
            </ul>
            <div className='drop-email'>
            <form action="your-action-url" method="post">
            <input className = 'emailbox'type="email" id="email" name="email" placeholder="Drop your email" required></input>
            <button className='emailbutton' type="submit">Submit</button>
            </form>
            </div>
        </div>
        <h5 className='footerHeading'>Made in 🇮🇳 India with ❤️</h5>
    </div>
  )
}

export default Footer