
import route from 'next/router'
import Language from"../../../Language.json"
import {
  Background,
  Container,
  InputContainer,
  InputStructure,
  LoginContentContainer,
  RegisterContentContainer,
} from './styles'
import { IconArrowLogin } from "../../components/Icons";
  
export default function Login() {
    function login(){
        route.push('/')
    }
    function register(){
        route.push('/register')
    }
    const text: {} = Language
    return (
    <Background>
        <RegisterContentContainer>
        <h2>Register</h2>
        </RegisterContentContainer>
        <LoginContentContainer>
        <Container>
            <h2>Entre com a sua conta</h2>
            
            <InputContainer>
            <InputStructure>
                <label>Email</label>
                <input type="text"></input>
            </InputStructure>
            <InputStructure>
                <label>Senha</label>
                <input type="password"></input>
            </InputStructure>
            </InputContainer>
        </Container>
        <Container>
            <button onClick={()=>login()}>{IconArrowLogin}</button>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <p>Recebeu um convite e ainda não se cadastrou?</p>
                <p onClick={()=> register()}>Clique Aqui</p>
            </div>
            
        </Container>
        </LoginContentContainer>
    </Background>
    );
}
