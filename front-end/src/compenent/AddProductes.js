import React from 'react'
import './css/addP.css'
import Footer from './Footer'
import Navbar from './Navbar'
export default function AddProductes() {
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
         
          <form className="requires-validation" noValidate>
         
            <div className="col-md-6">
            <label className="form-check-label">Name</label>
              <input className="form-control" type="text" name="name" placeholder="Full Name" required />
             
            </div>
            <div className="col-md-6">
            <label className="form-check-label "size="50">Discription</label>
              <input className="form-control" type="email" name="email" placeholder="E-mail Address" required />
             
            </div>
            
            <div className="col-md-12 mb-6" >
             <div className="col-md-12">
              <label classname="form-check-label">Price</label>
               <input classname="form-control" type="text" name="name" placeholder="Full Name" required />
             </div>
  
           
            <div className="col-md-12">
            <label className="form-check-label">Image</label>
              <input className="form-control" type="file" required  />
              </div>

            </div>
            <div className="form-button ">
              <button id="submit" type="submit" className="btn btn-primary">Add Product</button>
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
