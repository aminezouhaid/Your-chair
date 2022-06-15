import React from 'react'
import './css/reservation.css'
export default function Reservation() {
  return (
    <div>
         <nav className='navdash'>
          <div className='logoadmin'>
           <div><img className='logoimgsdash'  src={require("./img/logo2.png")}/></div>
          </div>
          <div className='menu'>
        <a className='homebtn' href="/">HOME</a>
        <a className='btn' href="#">ABOUT</a>
        <a className='btn' href="#">CATEGORIES</a>
        <a className='btn' href="#">CONTACT</a>

      </div>
      <div className='profile'><a className='btn'  href=""><button>Logout</button></a> </div>
       </nav>

       <div class="container-fluid">
		
	<div class="row">
		<nav class="col-md-2 d-none d-md-block sidebar">
			<div class="sidebar-sticky">
				<ul class="nav flex-column">
					<li class="nav-item">
						<a class="nav-link " href="/dashboardadmin">
                  <i class="zmdi zmdi-widgets"></i>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" href="/reservation">
                  <i class="zmdi zmdi-file-text"></i>
                  Réservation
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
                  <i class="zmdi zmdi-shopping-cart"></i>
                  Products
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link " href="/customers">
                  <i class="zmdi zmdi-accounts"></i>
                  Customers
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
                  <i class="zmdi zmdi-chart"></i>
                  Reports
                </a>
					</li>
					
				</ul>
                
			
				
			</div>
		</nav>
		<main role="main" class="col-md-9 ml-sm-auto col-lg-10 my-3">

			
		</main>
	</div>
</div>

    </div>
  )
}
