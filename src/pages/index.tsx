import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'

const Home: NextPage = () => {
  return (

    <Layout title='Membros' row contentTye=''>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column'}}>
        <h1>Hello World, Patrick</h1>
        <UserCard name='Shrimp' 
                  id={2} 
                  path='https://cdn.discordapp.com/attachments/469630958811742212/933154900773314611/51245626081fab919cffcd5ac31287d06b0a61bdr1-667-606v2_00.png' 
                  bgImg='https://cdn.discordapp.com/attachments/469630958811742212/933157306634477669/jojos-bizzare-adventur-part-6-stone-ocean.png'/>
      </div>
    </Layout>
  )
}

export default Home
