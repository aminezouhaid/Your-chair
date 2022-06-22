import React from 'react'
import './css/Customers.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
export default function Customers() {

	const [users, getusers] = useState(false);
	const getAllUsers = () => {
        axios.get('http://localhost:8000/api/client/')
            .then((res) => {
                const allUsers = res.data.data;
                getusers(allUsers);
                console.log('res',allUsers);
            })
            .catch(error => console.error(`error:${error}`));
    }
    useEffect(() => {
        getAllUsers();
    }, []);

	const  deletClient = async (id) => {
   
        try{
            
     
            const response = await axios.delete('http://localhost:8000/api/client/'+id);

            let user = response.data.users
       window.location="/customers";
    
        }catch(err){
    console.log('this is error');
    
        }
    }
	

  return (
    <div>
            <nav className='navdash'>
          <div className='logoadmin'>
           <div><img className='logoimgsdash'  src={require("./img/logo2.png")}/></div>
          </div>
          <div className='menu'>
        <a className='homebtn' href="/">HOME</a>
        <a className='btn' href="#">ABOUT</a>
        <a className='btn' href="#">PRODUCT</a>
        <a className='btn' href="#">CONTACT</a>

      </div>
          <div className='profile'><a className='btn'  href=""><button>Logout</button></a> </div>
       </nav>


       <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
	<a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">YOU'R CHAIR</a>
	<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
	<ul class="navbar-nav px-3">
		<li class="nav-item text-nowrap">
		
		</li>
	</ul>
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
						<a class="nav-link " href="/reservation">
                  <i class="zmdi zmdi-file-text"></i>
                  Réservation
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/productes">
                  <i class="zmdi zmdi-shopping-cart"></i>
                  Products
                </a>
					</li>
					<li class="nav-item">
						<a class="nav-link active " href="/customers">
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
						<div class="count">| {users.length} Réservation</div>
						<i class="zmdi zmdi-download"></i>
					</header>
					<table class="projects-table">
						<thead>
							<tr>
								<th>Full Name</th>
								<th>Age</th>
								<th>Email</th>
								<th>Sex</th>
								<th>Phone</th>
								
							</tr>
						</thead>
						
				{ users && users.map(user =><tr>
							<td>
								<p>{user.name}</p>
								<p>{user.username}</p>
							</td>
							<td>
								
								<p class="text-danger">17 ans </p>
							</td>
							<td class="member">
							
								<div class="member-info">
									<p>{user.email}</p>
									
								</div>
							</td>
							<td>
								<p>Homme</p>
								
							</td>
							<td class="status">
						     	<i class="fa-solid fa-phone"></i>  : 
								<span >   {user.phone} </span>
							</td>
							<td>
							<button onClick={ () => deletClient(user.id)}  type='submit'><i class="fa-solid fa-trash-can btndelet"></i></button>  
							</td>
						</tr>
						)}
						
						
						
					</table>
				</div>
			</div>
			
		</main>

	</div>
</div>
    </div>
  )
}
