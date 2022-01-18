import { useRouter } from 'next/router'
import { useEffect,useState } from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import { User } from '../../models/types';
import {ProfileContainer} from './style'


export default function Profile() {

    const [loaded,setLoaded] = useState(false);
    const [isVisitant, setIsVisitant] = useState(true)
    const [user,setUser] = useState<User|null>(null)

    const router = useRouter();

    const {id} = router.query;

    function myTitle(){
        return id=='1'? 'Meu Perfil':'Perfil de '+user?.name;
    }
    
    useEffect(()=>{
        /* 
            Aqui iremos verifcar : 
            - Se o usuario logado é um visitante ou não 
            - Fazer a req da api pra pegar o usuario pelo id 
        */

        if(id){
            let userAux:User={
                id:+id,
                name:"Joseph Joestar, O filha da puta",
                drinks:[],
                description:'Um cara muito pica... que trai a mulher as vezes',
                profileImgPath:'https://cdn.discordapp.com/attachments/469630958811742212/933113751626997800/maxresdefault.png',
                bannerImgPath:'https://cdn.discordapp.com/attachments/469630958811742212/933114011061473290/d61s52c-e43f8972-3e83-4fbc-804b-abaed608f0ae.png'
            }

            setUser(userAux)
            if(id==='1'){
                setIsVisitant(true);
            }
        }
        setLoaded(true);

    },[])


    return (
        <Layout title={myTitle()} contentTye='Banner'>
            {(loaded&&user)&&(
                <ProfileContainer>
                    <div className='bannerUser' style={{backgroundImage : `url(${user.bannerImgPath}`}}></div>
                    <div className='ProfileContent'>
                    <img src={user.profileImgPath} className='ProfileImg' alt='imgProfile'/>
                        <h1>{user.name}</h1>
                        <p>{user.description}</p>
                        <Button type='Blue' text='Editar Perfil'/>
                    </div>
                </ProfileContainer>
            )}
        </Layout>
    )
}
