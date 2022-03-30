import route from "next";
import React, {useState} from "react";
import PasswordChecklist from "react-password-checklist"
import { ContentContainer, EditContainer, Form, FormContainer, FormTitleContainer } from "./styles";

export default function Register(){
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    return(
        <div style={{display: "flex"}}>
            <ContentContainer>
                <FormTitleContainer><h1>Criação de usuário</h1></FormTitleContainer>
                <FormContainer>
                    <Form>
                        <label>Nome</label>
                        <input type= "text"></input>
                    </Form>
                    <Form>
                        <label>Email</label>
                        <input type= "email"></input>
                    </Form>
                    <Form>
                        <label>Senha</label>
                        <input type= "password" onChange={ e => setPassword(e.target.value)} value={password}></input>

                    </Form>
                    <PasswordChecklist 
                    rules={["minLength","specialChar","number","capital","match","maxLength"]}
                    minLength={8}
                    maxLength={20}
                    value={password}
                    valueAgain={passwordCheck}
                    onChange={(isValid)=> {}}
                    messages={{
                        
                        minLength: "Mais de 8 caracteres",
                        maxLength: "Menos de 20 caracteres",
					    specialChar: "Um Caractere especial",
					    number: "Um numero",
					    capital: "Falta uma letra maiuscula",
					    match: "Igual à confirmação",
                    }}
                    />
                    <Form>
                        <label>Confirmação da senha</label>
                        <input type="password" onChange={ e => setPasswordCheck(e.target.value)} value={passwordCheck}></input>
                    </Form>
                    
                    
                    
                    
                </FormContainer>
                

            </ContentContainer>
            <EditContainer></EditContainer>
        </div>
    )

}