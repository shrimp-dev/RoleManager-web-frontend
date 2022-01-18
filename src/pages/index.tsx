import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'

const Home: NextPage = () => {
  return (

    <Layout title='Membros' row contentTye=''>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column'}}>
        <h1>Hello World, Patrick</h1>
        <UserCard name='Shrimp' id={2} path='https://media.istockphoto.com/photos/shrimp-picture-id512284984' bgImg='https://media.istockphoto.com/photos/shrimp-picture-id512284984'/>
      </div>
    </Layout>
  )
}

export default Home
