import { useEffect, useState } from 'react'
import axios from 'axios'

const Employee = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resp) => {
        setUsers(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <h3>Employee Component</h3>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}

export default Employee