import Navbar from './Navbar1/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/index' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      </Router>
  
        </div>
  )
}
export default App;