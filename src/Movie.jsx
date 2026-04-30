import React from 'react'  

function Movie() {
     let movie_name="Durandhar 2 The Revenge"
    let actor="Ranveer Singh"
    let img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKuNhDc-uXpTkmxEBVS55Uw3IL8qgv8bHU6g&s"
  return (
    <div>
        <h1> Movie name:{movie_name}</h1>
        <h2>Hero Name:{actor}</h2>
        <img src={img} alt="My Image"/>
    </div>
  )
}

export default Movie