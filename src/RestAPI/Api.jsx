import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Api = () => {
  const [data, setData] = useState([])
 
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setData(res.data.products) // data is ARRAY
      })
      .catch((err) => { 
        console.log(err)
      })    
  }, [])

  return (
    <div>
      <h2>API Data</h2>

      {
        data.length > 0 ? (
          <table border={3}>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        ) : (
          <h2>No Data</h2>
        )
      }
    </div>
  )
}

export default Api