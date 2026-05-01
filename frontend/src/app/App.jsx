import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
   axios.get('/api/users') 
   .then(res=>{
    setUsers(res.data)
   })
  },[])


  return (
    <>
    <h1>Users</h1>
     <ul>
      {users.map(user=>{
        return <li key={user.id}>{user.name}</li>
      })}
     </ul>
    </>
  )
}

export default App
