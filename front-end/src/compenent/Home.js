import React from 'react'
import './css/Home.css'
import Navbar from './Navbar'
export default function Home() {
  return (
    <div className='Container'>
    <Navbar/>
    
   <div className='bagrondblack'>
    <div className='text'>
      <h5 className='title1'>You Know You’r Barber Shop</h5>
      <h1 className='title2'>Time is precious to you, so book your Chair and win your time</h1>
      <a  className='buttonbook' href="#">BOOK NOW</a>
      
    </div>
    <a  className='flech' href="#">⇩</a>
   </div>
   <div className='images'>
    <img className='img1' src={require("./img/a.jpg")} alt="" />
    <img className='img1' src={require("./img/b.jpg")} alt="" />
    <img className='img1' src={require("./img/salon-coiffeur.png")} alt="" />

   
   </div>
   <div className='images'>
    <img className='img1' src={require("./img/c.jpg")} alt="" />
    <img className='img1' src={require("./img/h.jfif")} alt="" />
    <img className='img1' src={require("./img/nn.jpg")} alt="" />
   </div>
    </div>
  )
}
