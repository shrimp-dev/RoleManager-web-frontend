import { useRouter } from 'next/router'
import { useEffect,useState } from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import DebitUserList from '../../components/ProfileStuff/DebitUserList';
import DrinkUserList from '../../components/ProfileStuff/DrinkUserList';
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
            if(id=='1'){
                let userAux:User={
                    id:+id,
                    name:"Joseph Joestar, O filha da puta",
                    drinks:[],
                    description:'Um cara muito pica... que trai a mulher as vezes',
                    profileImgPath:'https://cdn.discordapp.com/attachments/469630958811742212/933113751626997800/maxresdefault.png',
                    bannerImgPath:'https://cdn.discordapp.com/attachments/469630958811742212/933114011061473290/d61s52c-e43f8972-3e83-4fbc-804b-abaed608f0ae.png'
                }
                setUser(userAux)
            }else{
                let userAux:User={
                    id:+id,
                    name:"Jolyne Kujo, A NÃO pior jojo",
                    drinks:[],
                    description:'Jojo mais underrated da historia',
                    profileImgPath:'https://cdn.discordapp.com/attachments/469630958811742212/933154900773314611/51245626081fab919cffcd5ac31287d06b0a61bdr1-667-606v2_00.png',
                    bannerImgPath:'https://cdn.discordapp.com/attachments/469630958811742212/933157306634477669/jojos-bizzare-adventur-part-6-stone-ocean.png'
                }
                setUser(userAux)
            }

            
            if(id==='1'){
                setIsVisitant(false);
            }
        }
        setLoaded(true);

    },[id])


    return (
        <Layout title={myTitle()} contentTye='Banner'>
            {(loaded&&user)&&(
                <ProfileContainer>
                    <div className='bannerUser' style={{backgroundImage : `url(${user.bannerImgPath}`}}></div>

                    <div className='ProfileBody'>
                        <div className='ProfileContent'>
                            <img src={user.profileImgPath} className='ProfileImg' alt='imgProfile'/>
                            <h1>{user.name}</h1>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'.55rem'}}>
                                <p>{user.description}</p>
                                {!isVisitant&&<Button type='Blue' text='Editar Perfil'/>}
                            </div>
                        </div>

                        <div className='ListProfileContent'>
                            <DrinkUserList />
                            <DebitUserList />
                        </div>
                    </div>
                </ProfileContainer>
            )}
        </Layout>
    )
}
