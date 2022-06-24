import React from 'react'
import Navbar from './Navbar'
import './css/Login.css'
import Axios from 'axios';
import jwtdecode from "jwt-decode";
import toastr from 'toastr';
import { useState } from 'react'
import Footer from './Footer';
export default function Login() {

  const url="http://localhost:8000/api/users/login-user"
  const [values, setvalues] = useState ({
      email:"",
      password:"",});
      const submit = (e) => {
        e.preventDefault();
        Axios.post(url, {
        //   name: values.name,
          email: values.email,
        //   email: values.email,
          password: values.password,
        }).then((res) => {
  
    if(res.data.error){
      toastr.error(res.data.error)
    }
    else{
  
   
          
  
          localStorage.setItem('token',res.data.token)
          const jwt =  localStorage.getItem('token');
          if(jwt === undefined){
            console.log('undifend');
          }
          const JWT1 =jwtdecode(jwt);
          console.log('jwt parse',JWT1.role);
        }
        const jwt =  localStorage.getItem('token');
        const JWT1 =jwtdecode(jwt);
     if(JWT1.role==="user"){
        
        toastr.success('Welcome User' ,{
          positionClass: "toast-bottom-left",

          
        })
        
        
        window.location="/userhome";alert("done Bro <3")
      }else{
        window.location="/dashboardadmin"
        toastr.success('Welcome Admin')
        alert("wellcoom Admin")
        
  
      }
         
          
        });
        
        
        };

        const handleFormSubmit=(event)=>{
          const newdata ={...values}
          newdata[event.target.id]=event.target.value
          setvalues(newdata)
          console.log(newdata);
        
          // event.prevntDefault();
          // setErrors(validation(values));
        };
    


  return (

    <div>
<Navbar/>

     <section className="h-screen ">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      
      <div className="md:w-8/12 lg:w-5/12  md:mb-0">
        <img src={require('./img/logoin.png')} alt="Phone image" />
        <h1 className='welcom'>WELCOOM-TO-BARBER </h1>
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">    
      
        
        <form  onSubmit={submit}>
  <h1 className='titlelogin'>Login Now</h1>
          {/* Email input */}
          <div className="mb-4">
            <input type="text"  name="email" id="email"  onChange={(event)=>handleFormSubmit(event)} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
          </div>
          {/* Password input */}
          <div className="mb-6">
            <input type="password" name="password"  id="password"  onChange={(event)=>handleFormSubmit(event)} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
          </div>
            

          <div className="flex  mb-4">
           <p className='parag'>Dont Have account ? </p>
           <a href="/Register" className="Registterbtn">Register
          </a>
           
         </div>
          {/* Submit button */}
          <button type="submit" className="  mb-4 loginbutton inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-#eeb413-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
            Sign in
          </button>
          
    
        </form> 
        <a href="/loginadmin">
            <button className="loginbutton2 inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
            Are You Admin ?
          </button>
          </a>
      </div>
    </div>
  </div>
</section>
 <Footer/>
     
  </div>
  )
}
