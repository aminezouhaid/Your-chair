import React from 'react'
import './css/addP.css'
import Footer from './Footer'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
export default function AddProductes() {

  const [product, setProduct] = useState({});

  const handelChange = (e) => {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
 
  const creatProduct = () => {
    const data = new FormData();
    data.append("name", product.name);
    data.append("description", product.description);
    data.append("price", product.price);
    data.append("image_cover", product.image_cover);
    try {
      axios.post(`http://localhost:8000/api/product/add`, data).then(() => {
        window.location="/productes";
    
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
      console.log(error.message);
    }
  };
  return (
    <div className='Cont'>
    <nav className='navdash'>
          <div className='logoadmin'>
           <div><a href="/"><img className='logoimgsdash'  src={require("./img/logo2.png")}/></a></div>
          </div>
          <div className='menu'>
        <a className='homebtn' href="/">HOME</a>
        <a className='btn'  href="#">ABOUT</a>
        <a className='btn' href="#">CATEGORIES</a>
        <a className='btn' href="#">CONTACT</a>

      </div>
	  <small>   <span className="btn" style={{cursor:'pointer'}}   > Logout </span> </small>       </nav>


       <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
	<a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">YOU'R CHAIR</a>
	<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
	<ul class="navbar-nav px-3">
		
	</ul>
</nav>
<div class="container-fluid">
	<div class="row">
		
		<main role="main" class="allmain">
			
			<div class="project mb-4">
				<div class="projects-inner">
					<header class="projects-header">
						<div class="title">All Réservations</div>
						<div class="count">| Réservation</div>
						<i class="zmdi zmdi-download"></i>
					</header>
					
						
				
						<div>
  <div class="form-body">

  <div className="row">
    <div className="form-holder">
      <div className="form-content">
        <div className="form-items">
         
          <form className="requires-validation" >
         
            <div className="col-md-6">
            <label className="form-check-label">Name</label>
              <input className="form-control" onChange={handelChange} type="text" name="name" id="name" placeholder="Full Name"  />
             
            </div>
            <div className="col-md-6">
            <label className="form-check-label "size="50">Description</label>
              <input className="form-control" onChange={handelChange} type="text" name="description" id='description' placeholder="E-mail Address"  />
             
            </div>
            
            <div className="col-md-12 mb-6" >
             <div className="col-md-12">
              <label classname="form-check-label">Price</label>
               <input classname="form-control" onChange={handelChange} type="text" name="price" id='price' placeholder="Full Name"  />
             </div>
  
           
            <div className="col-md-12">
            <label className="form-check-label">Image</label>
              <input className="form-control"  onChange={handelChange} type="file"  name='image_cover' id='image_cover'   />
              </div>

            </div>
            <div className="form-button ">
              <button  onClick={() => creatProduct()} id="submit" type="submit" className="btn btn-primary">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
                        </div> 

						
             
				</div>
			</div>
			</div>
		</main>
	</div>	
</div>
    </div>
    
    
  )
}
