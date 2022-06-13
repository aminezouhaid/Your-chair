import Home from './compenent/Home';
import Login from './compenent/Login';
import Register from './compenent/Register';
import './App.css';
import { Routes,Route } from 'react-router';

function App() {
  return (
    <div className="App">
   <Routes>
   <Route path='/' element={<Home/>} /> 
   <Route path='/login' element={<Login/>} /> 
   <Route path='/register' element={<Register/>} /> 

   

   </Routes>
    </div>
  );
}

export default App;
