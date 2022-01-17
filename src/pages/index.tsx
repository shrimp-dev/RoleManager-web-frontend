import type { NextPage } from 'next'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'

const Home: NextPage = () => {
  return (

    <Layout title='Membros' row>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:'column'}}>
        
        <UserCard name='Shrimp' id={1} path='https://media.discordapp.net/attachments/580125063186087966/932695936499585145/97647654.png' bgImg='https://th.bing.com/th/id/OIP.rG9GfWZEI3tsie-Ex8st3QHaE8?pid=ImgDet&rs=1'/>
      </div>
    </Layout>
  )
}

export default Home
