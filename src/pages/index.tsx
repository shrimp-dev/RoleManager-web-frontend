import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import api from '../services/api'

const Home: NextPage = () => {
  const [userList, setUserList] = useState([{}])
  useEffect( () => {
   api.get('/user').then((res)=>{
     setUserList(res.data);
     console.log(userList);
   }).catch((err)=>console.log(err))
    
  }, [])
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh"}}>
      <h1>Hello World, Patrick</h1>
    </div>
  )
}

export default Home
