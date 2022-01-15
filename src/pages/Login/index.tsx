
import route from 'next/router'
import Language from"../../../Language.json"
import {
  Background,
  Container,
  InputContainer,
  InputStructure,
  LoginContentContainer,
  RegisterContentContainer,
} from './style'
import { IconArrowLogin } from "../../components/Icons";

export default function Login() {
    function login(){
        route.push('/')
    }

    return (
    <Background>
        <RegisterContentContainer>
        <h2>Register</h2>
        </RegisterContentContainer>
        <LoginContentContainer>
        <Container>
            <h2>{Language.pt_br.LoginTitle}</h2>
            <InputContainer>
            <InputStructure>
                <label>{Language.pt_br.Username}</label>
                <input type="text"></input>
            </InputStructure>
            <InputStructure>
                <label>{Language.pt_br.Password}</label>
                <input type="password"></input>
            </InputStructure>
            </InputContainer>
        </Container>
        <Container>
            <button onClick={()=>login()}>{IconArrowLogin}</button>
            <p>Recebeu um convite e ainda não se cadastrou?</p>
            <p>Clique Aqui</p>
        </Container>
        </LoginContentContainer>
    </Background>
    );
}
