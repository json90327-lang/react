// import React from 'react'
// import { Route } from 'react-router-dom'

// const Navbar = () => {
//   return    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
//                 <a href='/index' className='navbar-brand'>Logo</a>
//                 <div className='ms-auto'>
//                     <ul className='navbar-nav'>
//                         <li><a href="/index" className='nav-link'>Home</a></li>
//                         <li><a href="/about" className='nav-link'>About</a></li>
//                         <li><a href="/services" className='nav-link'>Services</a></li>
//                         <li><a href="/contact" className='nav-link'>Contact</a></li>
//                     </ul>
//                 </div>
//                        </nav> 
// }
// export default Navbar
// import React from 'react'
// import {Link} from 'react-router-dom';
// const Navbar = () => {
//   return   ( 
//   <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
//                 <Link to='/index' className='navbar-brand'>Logo</Link>
//                 <div className='ms-auto'>
//                     <ul className='navbar-nav'>
//                         <li><Link to="/index" className='nav-link'>Home</Link></li>
//                         <li><Link to="/about" className='nav-link'>About</Link></li>
//                         <li><Link to="/services" className='nav-link'>Services</Link></li>
//                         <li><Link to="/contact" className='nav-link'>Contact</Link></li>
//                     </ul>
//                 </div>
//             </nav>
//             )
  
// }
// export default Navbar
import { Link } from 'react-router-dom'
import img1 from '../assets/img1.webp'
const Navbar = () => {  
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/index' className='navbar-brand'>
       <div>
         <img src={img1}  alt='LOGO'
          width="80"/>
       </div>
        </Link>
        <div className='ms-auto'>
            <ul className='navbar-nav'>
                <li><Link to='/index'className='nav-link'>Home</Link></li>
                <li><Link to='/contact' className='nav-link'>Contact</Link></li>
                <li><Link to='/login' className='nav-link'>Login</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;


