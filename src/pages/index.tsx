import type { NextPage } from 'next'
import UserCard from '../components/UserCard.tsx'

const Home: NextPage = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",flexDirection:'column'}}>
      <h1>Hello World, Patrick</h1>
      <UserCard name='Shrimp' id={1} path='https://media.istockphoto.com/photos/shrimp-picture-id512284984'/>
    </div>
  )
}

export default Home
