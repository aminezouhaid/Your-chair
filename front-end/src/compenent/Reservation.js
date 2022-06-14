import React from 'react'

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
			<div class="card-list">
				<div class="row">
                <header class="projects-header">
						<div class="title">All Customers</div>
						<div class="count">| 32 Customer</div>
						<i class="zmdi zmdi-download"></i>
					</header>

					<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
						<div class="card blue">
							<div class="title">all projects</div>
							<i class="zmdi zmdi-upload"></i>
							<div class="value">89</div>
							<div class="stat"><b>13</b>% increase</div>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
						<div class="card green">
							<div class="title">team members</div>
							<i class="zmdi zmdi-upload"></i>
							<div class="value">5,990</div>
							<div class="stat"><b>4</b>% increase</div>
						</div>
					</div>
					<div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
						<div class="card orange">
							<div class="title">total budget</div>
							<i class="zmdi zmdi-download"></i>
							<div class="value">$80,990</div>
							<div class="stat"><b>13</b>% decrease</div>
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
