import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Productes() {
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

        <div>
           

            <nav className='navdash'>
                <div className='logoadmin'>
                    <div><img className='logoimgsdash' src={require("./img/logo2.png")} /></div>
                </div>
                <div className='menu'>
                    <a className='homebtn' href="/">HOME</a>
                    <a className='btn' href="#">ABOUT</a>
                    <a className='btn' href="#">PRODUCT</a>
                    <a className='btn' href="#">CONTACT</a>

                </div>
                <div className='profile'><a className='btn' href=""><button>Logout</button></a> </div>
            </nav>


            <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
                <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">YOU'R CHAIR</a>
                <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
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
                                    <a class="nav-link active " href="/productes">
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

                  

                  
                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 my-3"  >
                        <div class="card-list">
                            <div class="row">
                         
                                <header class="projects-header"  >
                                    <div class="title">All Productes</div>
                                    <div class="count"> {productes.length} product</div>
                                    <i class="zmdi zmdi-download"></i>
                                </header>
                                 
                                {/* { productes &&   productes.map(producte => 
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                                    <div class="card blue">
                                        <div class="title">{producte.name}</div>
                                        <i class="zmdi zmdi-upload"></i>
                                        <div class="value">{producte.description}</div>
                                        <div class="stat"><b>{producte.price}</b>DH </div>
                                    </div>
                                </div>

                                 ) } */}
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
    <div className="image_container4" >
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
      <i className="fas fa-map-marker-alt" />
      <span className=" locate">Youssoufia</span>
      </div>
    </div>
  </div>
</div>
 ) }
                              
                            </div>
                        </div>


                    </main>
                   
                </div>
            </div>
        </div>
    )
}
