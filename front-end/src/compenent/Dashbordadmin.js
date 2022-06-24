import axios from 'axios';
import { useEffect,useState } from 'react';
import './css/dashbord.css'
import Lougout from './lougout';
export default function Dashbordadmin() {
	const signout =  () =>{
		const jwt =  localStorage.removeItem('token');
	   
		window.location="/login";
		return jwt;
	  
	  
	  }
	  const [reservations, getreservations] = useState(false);
	  const url = "http://localhost:8000/api/orders"
	  const getAllreservations =  async () => {
       await axios.get(url)
            .then((res) => {
                const allreservatons = res.data.order;
                getreservations(allreservatons);
                console.log('res',res);
				
            })
            .catch(error => console.error(`error:${error}`));
    }
    useEffect(() => {
        getAllreservations();
    }, []);
	


	const  deletOrders = async (id) => {
   
        try{
            
     
            const response = await axios.delete('http://localhost:8000/api/orders/'+id);

            let data = response.data.category
       window.location="/dashboardadmin";
    
        }catch(err){
    console.log('this is error');
    
        }
    }

  
  return (
    <div> 
		<Lougout/>    
		
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
				  Statique
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
						<div class="count">| {reservations.length} Réservation</div>
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
						
				{ reservations && reservations.map(reservation =><tr>
							<td>
								<p>{reservation.product_id.name}</p>
								<p> {reservation.product_id.description}</p>
							</td>
							<td>
								
								<p class="text-danger">{reservation.time} Min </p>
							</td>
							<td class="member">
							
								<div class="member-info">
									<p>{reservation.user_id.name}</p>
									<p>{reservation.user_id.username}</p>
								</div>
							</td>
							<td>
								<p> {reservation.product_id.price} DH</p>
								<p>Not Paid</p>
							</td>
							<td class="status">
								<span class="status-text status-orange">{reservation.status}</span>
							</td>
							<td>
							<button onClick={() => deletOrders(reservation.id)} type='submit'><i class="fa-solid fa-trash-can btndelet"></i></button>  
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
