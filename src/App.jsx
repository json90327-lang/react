import Navbar from './Navbar1/Navbar';
import Home from './Componets/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './Componets/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div>
   

        <Navbar />

        <Routes>
          <Route path='/index' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
   
    </div>
  );
}
export default App;