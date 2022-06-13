import React from 'react'
import Navbar from './Navbar'
import './css/Login.css'
export default function Login() {
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
      
        
        <form>
  <h1 className='titlelogin'>Login Now</h1>
          {/* Email input */}
          <div className="mb-4">
            <input type="text" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
          </div>
          {/* Password input */}
          <div className="mb-6">
            <input type="password" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
          </div>
            

          <div className="flex  mb-4">
           <p className='parag'>Dont Have account ? </p>
           <a href="/Register" className="Registterbtn">Register
          </a>
           
         </div>
          {/* Submit button */}
          <button type="submit" className="loginbutton inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-#eeb413-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
            Sign in
          </button>
    
        </form>
      </div>
    </div>
  </div>
</section>

     
  </div>
  )
}
