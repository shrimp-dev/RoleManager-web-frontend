import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import {ProfileContainer} from './style'

export default function Profile() {

    const router = useRouter();

    const {id} = router.query;

    function myTitle(){
        return id=='1'? 'Meu Perfil':'Perfil do amigo';
    }
    

    return (
        <Layout title={myTitle()} >
            <ProfileContainer>
                Profile {id}
            </ProfileContainer>
        </Layout>
    )
}
