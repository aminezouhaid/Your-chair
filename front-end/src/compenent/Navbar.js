import React from 'react'
import './css/Navbar.css'
export default function Navbar() {
  return (
    <div className='allNav'>
      
      <div className='menu'>
        <a className='homebtn' href="/">HOME</a>
        <a className='btn' href="#">PRODUCT</a>
        <a className='btn' href="#">OUR BONUSES</a>
        <a className='btn' href="#">ABOUT</a>
        <a className='btn' href="#">CONTACT</a>

      </div>

      <div className='logo'>
     
       <a href="/"> <img className='imglogo' src={require("./img/logo2.png")}alt="" /></a>
       

      </div>
     
      <div className='book'>
      <a href="#"> <img className='reseux' src={require("./img/facebook.png")}alt="" /></a>
      <a href="#"><img  className='reseux'  src={require("./img/linkedin.png")}alt="" /> </a>
      <a href="#"> <img  className='reseux'  src={require("./img/twitter.png")}alt="" /> </a>
      <a className='bookbtn' href="/login"> BOOK NOW</a>
      <a className='bookbtn' href="/login"> Login</a>
      </div>


    </div>
  )
}
 <script>
  
 </script>
