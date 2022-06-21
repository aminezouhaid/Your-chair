import React from 'react'
import './css/Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import './css/hllo.css'
export default function Home() {
  return (
    <div className='Container'>
    <Navbar/>
    
   <div className='bagrondblack'>
    <div className='text'>
      <h5 className='title1'>You Know You’r Barber Shop</h5>
      <h1 className='title2'>Time is precious to you, so book your Chair and win your time</h1>
      <a  className='buttonbook' href="/Login">BOOK NOW</a>
      
    </div>
  
    <a href=""><img className='flech' src={require("./img/flech.png")} alt="" /></a>
   </div>
   
   <div className='images'>
    <img className='img1' src={require("./img/a.jpg")} alt="" />
   <h1 className='ptudcut'>Product Lifestyle Gallery</h1>
    <img className='img1' src={require("./img/salon-coiffeur.png")} alt="" />

    
   </div>
   <div className='images'>
   <img className='img1' src={require("./img/b.jpg")} alt="" />
   <img className='img1' src={require("./img/c.jpg")} alt="" />
    <img className='img1' src={require("./img/h.jfif")} alt="" />
   </div>

   <div className='coupeCheveux'>

<div className="restaurant">
  <div className="reservation_btn">
    Réserver
  </div>
  <div className="close_it">
    <i className="fas fa-times" />
  </div>
  <div className="infos_left">
    <div className="image_container1" >
    </div>
    <div className="prix_block">
      <span className="text_prix">Prix : </span>
      <span className="prix">40 DH</span>
    </div>
    <div className="block_infos">
      <h1>Normal Haircut</h1>
      <div className="adress_block">
        <i className="fas fa-map-marker-alt" />
        <span className="adress">Rue Saada</span>
      </div>
      <div className="adress_block">
      <span className="locate">Youssoufia</span>

      </div>
    </div>
  </div>
</div>


<div className="restaurant">
  <div className="reservation_btn">
    Réserver
  </div>
  <div className="close_it">
    <i className="fas fa-times" />
  </div>
  <div className="infos_left">
    <div className="image_container5" >
    </div>
    <div className="prix_block">
      <span className="text_prix">Prix : </span>
      <span className="prix">250  DH</span>
    </div>
    <div className="block_infos">
      <h1>Haircut + Keratin</h1>
      <div className="adress_block">
        <i className="fas fa-map-marker-alt" />
        <span className="adress">Rue Saada</span>
      </div>
      <div className="adress_block">
      <span className="locate">Youssoufia</span>

      </div>
    </div>
  </div>
</div>
<div className="restaurant">
  <div className="reservation_btn">
    Réserver
  </div>
  <div className="close_it">
    <i className="fas fa-times" />
  </div>
  <div className="infos_left">
    <div className="image_container2" >
    </div>
    <div className="prix_block">
      <span className="text_prix">Prix : </span>
      <span className="prix">100 DH</span>
    </div>
    <div className="block_infos">
      <h1>Hard Haircut</h1>
      <div className="adress_block">
        <i className="fas fa-map-marker-alt" />
        <span className="adress">Rue Saada</span>
        
      </div>
      <div className="adress_block">
      <span className="locate">Youssoufia</span>
      </div>
    </div>
  </div>
</div>

<div className="restaurant">
  <div className="reservation_btn">
    Réserver
  </div>
  <div className="close_it">
    <i className="fas fa-times" />
  </div>
  <div className="infos_left">
    <div className="image_container3" >
    </div>
    <div className="prix_block">
      <span className="text_prix">Prix : </span>
      <span className="prix">220 DH</span>
    </div>
    <div className="block_infos">
      <h1>Haircut + Color</h1>
      <div className="adress_block">
        <i className="fas fa-map-marker-alt" />
        <span className="adress">Rue Saada</span>
        
      </div>
      <div className="adress_block">
      <span className="locate">Youssoufia</span>
      </div>
    </div>
  </div>
</div>




</div>
   <Footer/>
   
    </div>
  )
}
