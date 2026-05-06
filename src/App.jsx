import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar/Navbar';
import { Route, BrowserRouter as  Router, Routes } from 'react-router-dom';
import Home from './Componets/Home';
import About from './Componets/About';
import Services from './Componets/Services';
import Contact from './Componets/Contact';

function App() {
  return (
    <div>
         <Router>
  <Navbar/>
  <Routes>
     <Route path='/index' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
     <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
  </Routes>
       </Router>
        </div>
  )
}
export default App;