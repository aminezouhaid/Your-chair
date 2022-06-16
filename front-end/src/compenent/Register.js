import React, { useState } from 'react'
import './css/Register.css'
import toastr from 'toastr';
import Axios from 'axios';
import Navbar from './Navbar'
import Footer from './Footer';
export default function Register() {
  
  const url = "http://localhost:8000/api/users/register-user";
	const [values, setvalues] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
    phone:"",
	});

  const submit = (e) => {

		e.preventDefault();
		Axios.post(url, {
			name: values.name,
			username: values.username,
			email: values.email,
			password: values.password,
      phone: values.phone
		})


			.then((res) => {
				console.log("🚀 ~ file: Register.js ~ line 29 ~ .then ~ res", res.data)

				if (res.data.error) {
             alert('Samthing input is empty')
					toastr.error(res.data.error)
       

				} else {
					window.location="/Login"
					toastr.success('done')
          alert('Register Succes Thank You')

					
				}

				 
			})
	};

	const handle = (event) => {
		const newdata = { ...values };
		newdata[event.target.id] = event.target.value;
		setvalues(newdata);
		console.log(newdata);

		// event.prevntDefault();
		// setErrors(validation(values));
	};




  return (

    <div>
      <div><Navbar/></div>
    
  <section className="h-screen ">
  <div className="container px-6 py-12 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      
      <div className="md:w-8/12 lg:w-5/12  md:mb-0">
        <img src={require('./img/logoin.png')} alt="Phone image" />
        <h1 className='welcom'>WELCOOM-TO-BARBER </h1>
      </div>
      <div className="md:w-8/12 lg:w-5/12 lg:ml-20">    
      
        
        <form   onSubmit={submit}>
  <h1 className='titlelogin'>Register Now</h1>
          {/* Email input */}
          <div className="flex justify-between mb-3">
            <input type="text" onChange={(event) => handle(event)} id="name" name="name" className="input1 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="First Name" />
            <input type="text" onChange={(event) => handle(event)} id="username"  name="username" className="input2 form-control block  w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Last Name" />

          </div>
          
          {/* Password input */}
          <div className="mb-3">
            <input type="email" onChange={(event) => handle(event)} id="email" name="email" className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Exemple@gmail.com" />
          </div>
          <div className="mb-3 flex justify-between">
            <input type="password" onChange={(event) => handle(event)} id="password" name="password" className="input3 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
            <input type="password" onChange={(event) => handle(event)}  name="password" className="input3 form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder=" Confirm Password" />



          </div>
          <div className="mb-3 flex">
         
          
            <input type="telephone" onChange={(event) => handle(event)} id="phone" name="phone"  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder=" +212 Phone" />
          </div>
          
          {/* Submit button */}
          <button type="submit"  className="loginbutton mb-3 inline-block px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-#eeb413-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
            Sign up
          </button>
         
          
          <div className="flex mb-3">
           <p className='parag'>Already have an account ?   </p>
           <a href="/Login" className="Registterbtn">  Login   </a>
          </div>

      
    
        </form>
      </div>
    </div>
  </div>
</section>

 <Footer/>
    </div>
  )
}
