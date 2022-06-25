import React from 'react'
import './css/reservation.css'
import Footer from './Footer'
import jwtdecode from 'jwt-decode'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
export default function Reservation() {
  const jwt =  localStorage.getItem('token');
  
    const {id}=useParams()
    console.log('id',id);

  // console.log("hhhhh",window.location.pathname[1]); 
  // const data1= window.location.pathname;
  // const reserv= data1.split
	const JWT1 =jwtdecode(jwt);

console.log('token',JWT1);

// const [data, setData] = useState({});
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchData = async (id) => {
//     try {
//       const { data: res} = await axios.get('http://localhost:8000/api/product/'+id);
//       setData(res);
//       console.log('helllllllllll',data)
//     } catch (error) {
//       console.error(error)
//     }
//     setLoading(false);
//   };

//   fetchData();
// }, []);


const handelChange = (e) => {
  e.preventDefault();
  setProduct({ ...order, [e.target.name]: e.target.value });
};

const [order, setProduct] = useState({});
const creatBooking = (eb) => {
  eb.preventDefault();


  

  try {
    axios.post(`http://localhost:8000/api/orders/add`).then(() => {
      window.location="/userhome";
  
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
    }
    console.log(error.message);
  }
  
};


  return (
  
    <div className='Allreserv'>
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
      <a className="navbar-brand mt-2 mt-lg-0 text-warning" href="/userhome">
      <h1>Home</h1>
      </a>
      {/* Left links */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Productes </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Our Bonuses</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link text-light " href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Contact</a>
        </li>
      </ul>
      {/* Left links */}
    </div>
    {/* Collapsible wrapper */}
    {/* Right elements */}
    <div className="d-flex align-items-center">
    <a className="nav-link text-light " href="#">Welcom <span className='text-warning'>  {JWT1.name}  {JWT1.username}</span></a>

      {/* Icon */}
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart text-light" />
      </a>
      {/* Notifications */}
      <div className="dropdown">
        <a className="text-reset me-3 dropdown-toggle hidden-arrow " href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          <i className="fas fa-bell text-light" />
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
           <div className='allCard'>
      <div className='CardAll'>
       <div className='photoR'>
       <div class="col d-none d-lg-block mb-5">
               <img class="w-100"
                    src={require("./img/coup1.jpg")} />
            </div>
       </div>
       <form onSubmit={creatBooking}>
       <div className='information'>
      <h3> NAME : </h3> 
      <h3> DESCRIPTION : </h3>
      <h3> PRICE : </h3>
      <div>
        <label htmlFor=""> Boook Date </label>
        <input type="date" onChange={handelChange} name='date' />
      </div>
      <div>
        <label htmlFor=""> Book Time</label>
        <input type="time"  onChange={handelChange} name='time' />
      </div>
      <button type="submit">book</button>
           </div>
      </form>
      </div>
      </div>


       <Footer/>
    </div>
  );

}
