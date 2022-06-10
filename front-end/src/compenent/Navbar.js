import React from 'react'
import './css/Navbar.css'
export default function Navbar() {
  return (
    <div className='allNav'>
      
      <div className='menu'>
        <a className='homebtn' href="#">HOME</a>
        <a className='btn' href="#">ABOUT</a>
        <a className='btn' href="#">CATEGORIES</a>
        <a className='btn' href="#">CONTACT</a>

      </div>

      <div className='logo'>
        <h5 className='logotext'>YOU'R</h5>
        <img className='imglogo' src={require("./img/logo2.png")}alt="" />
        <h5 className='logotext'>CHAIR</h5>

      </div>
     
      <div className='book'>
      <a href="#"> <img className='reseux' src={require("./img/facebook.png")}alt="" /></a>
      <a href="#"><img  className='reseux'  src={require("./img/linkedin.png")}alt="" /> </a>
      <a href="#"> <img  className='reseux'  src={require("./img/twitter.png")}alt="" /> </a>
      <a className='bookbtn' href="#"> BOOK NOW</a>
      </div>


    </div>
  )
}

