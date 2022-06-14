import Home from './compenent/Home';
import Login from './compenent/Login';
import Register from './compenent/Register';
import Loginadmin from './compenent/Loginadmin';
import Dashbordadmin from './compenent/Dashbordadmin';
import Customers from './compenent/Customers';
import Reservation from './compenent/Reservation';

import './App.css';
import { Routes,Route } from 'react-router';

function App() {
  return (
    <div className="App">
   <Routes>
   <Route path='/' element={<Home/>} /> 
   <Route path='/login' element={<Login/>} /> 
   <Route path='/register' element={<Register/>} /> 
   <Route path='/loginadmin' element={<Loginadmin/>} /> 
   <Route path='/dashboardadmin' element={<Dashbordadmin/>} /> 
   <Route path='/customers' element={<Customers/>} /> 
   <Route path='/reservation' element={<Reservation/>} /> 
   

   

   </Routes>
    </div>
  );
}

export default App;
