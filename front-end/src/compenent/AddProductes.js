import React from 'react'
import './css/addP.css'
import { useState } from 'react'
import axios from 'axios'
import jwtdecode from "jwt-decode";

export default function AddProductes() {

  const jwt =  localStorage.getItem('token');

	const JWT1 =jwtdecode(jwt);

console.log('token',JWT1);

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
           <a className=' text-light'>DASHBOARD ADMIN</a>

          </div>
          <div className='menu'>
        <a className='homebtn' href="/">HOME</a>
        <a className='btn'  href="#">ABOUT</a>
        <a className='btn' href="#">CATEGORIES</a>
        <a className='btn' href="#">CONTACT</a>

      </div>
	  <small>   <span className="btn" style={{cursor:'pointer'}}   > Logout </span> </small>       </nav>


       <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
       <a class="navbar-brand col-sm-3  col-md-2 mr-0" href="#"> WELCOOME  <br/> <span className="text-warning ml-2">  {JWT1.name} {JWT1.username} </span> </a>
	<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
	<ul class="navbar-nav px-3">
		
	</ul>
</nav>
<div class="container-fluid">
	<div class="row">
		
		<main role="main" class="allmain">
			  <a href="/productes"><button className='buttonAdd col-md-1 m-6'>Back</button></a>
			<div class="project mb-4">
				<div class="projects-inner">
					<header class="projects-header">
        
						<div class="title">Add Product</div>
						<div class="count">| New</div>
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
              <input className="form-control" onChange={handelChange} type="text" name="name" id="name" placeholder=" Product Name"  />
             
            </div>
            <div className="col-md-6">
            <label className="form-check-label "size="50">Description</label>
              <input className="form-control" onChange={handelChange} type="text" name="description" id='description' placeholder="description"  />
             
            </div>
            
            <div className="col-md-12 mb-6" >
             <div className="col-md-12">
              <label classname="form-check-label">Price</label>
               <input classname="form-control" onChange={handelChange} type="text"  name="price" id='price' placeholder="0 DH "  />
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
