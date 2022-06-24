import React from 'react'

export default function lougout() {
    const signout =  () =>{
		const jwt =  localStorage.removeItem('token');
	   
		window.location="/login";
		return jwt;
	  
	  
	  }
  return (
    <div> <nav className='navdash'>
    <div className='logoadmin'>
     <div><a href="/"><img className='logoimgsdash'  src={require("./img/logo2.png")}/></a></div>
    </div>
    <div className='menu'>
  <a className='homebtn' href="/">HOME</a>
  <a className='btn'  href="#">ABOUT</a>
  <a className='btn' href="#">CATEGORIES</a>
  <a className='btn' href="#">CONTACT</a>

</div>
<h2 class="navbar-brand col-sm-3 col-md-2 mr-0" ></h2>
<small>   <span className="btn" style={{cursor:'pointer'}}  onClick={signout} > Logout </span> </small>       </nav>


 <nav class="navbar navbar-dark sticky-top flex-md-nowrap p-0">
<a class="navbar-brand col-sm-3 col-md-2 mr-0" href="/">WELCOOM ADMIN </a>
<input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
<ul class="navbar-nav px-3">
  
</ul>
</nav>
</div>
  )
}
