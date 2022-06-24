import React from 'react'
import './css/userhome.css'
import Footer from './Footer'
import { useState,useEffect } from 'react'
import axios from 'axios'


export default function UserHome() {


    const [productes, getProductes] = useState(false);

    const getAllProductes = () => {
        axios.get('http://localhost:8000/api/product')
            .then((res) => {
                const allProductes = res.data.data;
                getProductes(allProductes);
                console.log('res',allProductes);
            })
            .catch(error => console.error(`error:${error}`));
    }
    useEffect(() => {
        getAllProductes();
    }, []);
  return (
    <div className='alluserhome'>
      
         
           <div className='petit-nav'>
       {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-light ">
  {/* Container wrapper */}
  <div className="container-fluid">
    {/* Toggle button */}
    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fas fa-bars" />
    </button>
    {/* Collapsible wrapper */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* Navbar brand */}
      <a className="navbar-brand mt-2 mt-lg-0" href="/">
      <h1>Home</h1>
      </a>
      {/* Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Productes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Our Bonuses</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
    {/* Right elements */}
    <div className="d-flex align-items-center">
      {/* Icon */}
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart" />
      </a>
      {/* Notifications */}
      <div className="dropdown">
        <a className="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-bell" />
          <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a className="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      {/* Avatar */}
      <div className="dropdown">
        <a className="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle"  alt="Black and White Portrait of a Man" loading="lazy" />
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
          <li>
            <a className="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    {/* Right elements */}
  </div>
  {/* Container wrapper */}
</nav>
{/* Navbar */}

           </div>
           <div className='petit2'>
           <h1 className='grandTitle2'>Chose Your Favorite Haircut </h1>
           </div>
           <div className='petit1'>

           { productes &&   productes.map(producte =>                         
 <div className="restaurant">
  <a href="/login">
  <div className="reservation_btn">
    Réserver
  </div></a>
 


  <div className="close_it">
    <i className="fas fa-times" />
  </div>
  <div className="infos_left">
    <div className="image_container1"  >
        <img src={producte.image_cover} alt="" />
    </div>
    <div className="prix_block">
      <span className="text_prix">Prix : </span>
      <span className="prix">{producte.price} </span>
    </div>
    <div className="block_infos">
      <h1>{producte.description}</h1>
      <div className="adress_block">
       
        <span className="adress">{producte.name}</span>
       
      </div>
      <div className="adress_block"> 
   
        <i className="fas fa-map-marker-alt" /><span className=" locate">Youssoufia</span>
      </div>
      
    </div>
  
  </div>
  
</div>
 ) }
           </div>
          

           <div className='prestation'>
  <h1 className='grandTitle'> Nos Produits </h1>
  <div className='allproducte'>
 
  <div className="col-3 style1 Tous  coiffants ">
  <div className="hovereffect">
    <div className="content-txt2">
        <div>
            <p className="prodTitle">Huile à barbe</p>
            <h1 className="prodTitle">BEARD OIL</h1>
       </div>
      
      <a href="#">
    <i class="shp fa-solid fa-cart-shopping"></i>
 </a>
    </div>
    <img className="img-responsive" src="https://thebarbercompany.fr/wp-content/uploads/2019/09/2019-10_571x571_BEARDOIL_TBC.jpg" alt />
   
  </div>
</div>


<div className="col-3 style1 Tous  coiffants ">
  <div className="hovereffect">
    <div className="content-txt2">
        <div>
      <p className="prodTitle">Poudre Texturisante</p>
      <h2 className="prodTitle">DESIGN POWDER</h2>
      </div>
      <a href="#">
    <i class="shp fa-solid fa-cart-shopping"></i>
 </a>
    </div>
    <img className="img-responsive" src="https://thebarbercompany.fr/wp-content/uploads/2021/12/DESIGN-POWDER.jpg" alt />
    
  </div>
</div>

<div className="col-3 style1 Tous  coiffants ">
  <div className="hovereffect">
    <div className="content-txt2">
        <div>
      <p className="prodTitle">Pâte Modelante</p>
      <h2 className="prodTitle">DESIGN PASTE</h2>
      </div>
      <a href="#">
    <i class="shp fa-solid fa-cart-shopping"></i>
 </a>
    </div>
    <img className="img-responsive" src="https://thebarbercompany.fr/wp-content/uploads/2021/03/BARBER-COMPANY-PASTE-V2.jpg" alt />
    
  </div>
</div>


  </div>

</div> 

       <Footer/>
    </div>
  )
}
