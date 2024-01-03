import './App.css';
import {NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About2 from './components/About2';
// import NotFound from './components/NotFound';
// import Support2 from './components/Support2';
// import Labs2 from './components/Labs2';
// import { Link } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Navbar from './components/Navbar';
import Contact from "./components/Contact"
import Login from "./components/Login"
import Register from "./components/Register"
import  Service  from './components/Service';


function App() {
  return (

    <div className="App">
         {/* <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support2</NavLink>
            </li>
            <li>
              <NavLink to="/about">About2</NavLink>
            </li>
                <li>
                  <NavLink to="/labs">Labs2</NavLink></li> 
                  
          </ul>
         </nav> */}


<Navbar/>
         <Routes>
         <Route path="/navbar" element={<Navbar/>}/>
              <Route index element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About2/>}/>
            <Route path="/contact" element={<Contact/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    
          
          
         </Routes>
    </div>
  );
}

export default App;
