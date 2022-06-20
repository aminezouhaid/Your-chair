

import './css/dashbord.css'
export default function Dashbordadmin() {
	const signout =  () =>{
		const jwt =  localStorage.removeItem('token');
	   
		window.location="/login";
		return jwt;
	  
	  
	  }
  
  return (
    <div> 
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
	  <small>   <span className="btn" style={{cursor:'pointer'}}  onClick={signout} > Logout </span> </small>       </nav>


       <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
	<a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">YOU'R CHAIR</a>
	<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
	<ul class="navbar-nav px-3">
		
	</ul>
</nav>
<div class="container-fluid">
	<div class="row">
		<nav class="col-md-2 d-none d-md-block sidebar">
			<div class="sidebar-sticky">
				<ul class="nav flex-column">
					<li class="nav-item">
						<a class="nav-link active" href="/dashboardadmin">
                  <i class="zmdi zmdi-widgets"></i>
                  Dashboard <span class="sr-only">(current)</span>
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/reservation">
                  <i class="zmdi zmdi-file-text"></i>
                  Réservations
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/productes">
                  <i class="zmdi zmdi-shopping-cart"></i>
                  Products
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/customers">
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
			
			<div class="projects mb-4">
				<div class="projects-inner">
					<header class="projects-header">
						<div class="title">All Réservations</div>
						<div class="count">| 32 Réservation</div>
						<i class="zmdi zmdi-download"></i>
					</header>
					<table class="projects-table">
						<thead>
							<tr>
								<th>Réservation</th>
								<th>Time</th>
								<th>Customers</th>
								<th>Price</th>
								<th>Status</th>
								<th class="text-right">Actions</th>
							</tr>
						</thead>
						<tr>
							<td>
								<p>New Dashboard</p>
								<p>Google</p>
							</td>
							<td>
								<p>17th Oct, 15</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
							
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>$4,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-orange">In progress</span>
							</td>
							<td>
								<form class="form" action="#" method="POST">
								<select class="action-box">
									<option>Actions</option>
									<option>Start project</option>
									<option>Send for QA</option>
									<option>Send invoice</option>
								</select>
								</form>
							</td>
						</tr>
						<tr class="danger-item">
							<td>
								<p>New Dashboard</p>
								<p>Google</p>
							</td>
							<td>
								<p>17th Oct, 15</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
							
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>$4,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-red">Blocked</span>
							</td>
							<td>
								<form class="form" action="#" method="POST">
									<select class="action-box">
										<option>Actions</option>
										<option>Start project</option>
										<option>Send for QA</option>
										<option>Send invoice</option>
									</select>
								</form>
							</td>
						</tr>
						<tr>
							<td>
								<p>New Dashboard</p>
								<p>Google</p>
							</td>
							<td>
								<p>17th Oct, 15</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
							
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>$4,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-orange">In progress</span>
							</td>
							<td>
								<form class="form" action="#" method="POST">
									<select class="action-box">
						  <option>Actions</option>
						  <option>Start project</option>
						  <option>Send for QA</option>
						  <option>Send invoice</option>
						</select>
								</form>
							</td>
						</tr>
						<tr>
							<td>
								<p>New Dashboard</p>
								<p>Google</p>
							</td>
							<td>
								<p>17th Oct, 15</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
							
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>$4,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-blue">Early stages</span>
							</td>
							<td>
								<form class="form" action="#" method="POST">
									<select class="action-box">
						  <option>Actions</option>
						  <option>Start project</option>
						  <option>Send for QA</option>
						  <option>Send invoice</option>
						</select>
								</form>
							</td>
						</tr>
						<tr>
							<td>
								<p>New Dashboard</p>
								<p>Google</p>
							</td>
							<td>
								<p>17th Oct, 15</p>
								<p class="text-danger">Overdue</p>
							</td>
							<td class="member">
								
								<div class="member-info">
									<p>Myrtle Erickson</p>
									<p>UK Design Team</p>
								</div>
							</td>
							<td>
								<p>$4,670</p>
								<p>Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-orange">In progress</span>
							</td>
							<td>
								<form class="form" action="#" method="POST">
									<select class="action-box">
						  <option>Actions</option>
						  <option>Start project</option>
						  <option>Send for QA</option>
						  <option>Send invoice</option>
						</select>
								</form>
							</td>
						</tr>
					</table>
				</div>
			</div>
			
		</main>
	</div>
</div>
    </div>
  )
}
