import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar/Navbar'

const App2 = () => {
  return (
    <div>App2
      <h2>App Component</h2>
      <button style={{backgroundColor:"blue",color:"black"}}>Test</button>
      <Navbar/>
    </div>
  )
}

export default App2


