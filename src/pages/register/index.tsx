import route from "next";
import React from "react";
import { ContentContainer, EditContainer, Form, FormContainer, FormTitleContainer } from "./styles";

export default function Register(){

    return(
        <div style={{display: "flex"}}>
            <ContentContainer>
                <FormTitleContainer><h1>Criação de usuário</h1></FormTitleContainer>
                <FormContainer>
                    <Form><label>Nome</label>
                    <input type= "text"></input></Form>
                    <Form><label>Email</label>
                    <input type= "email"></input></Form>
                    <Form><label>Senha</label>
                    <input type= "password"></input></Form>
                    <Form><label>Confirmação da senha</label>
                    <input type= "password"></input></Form>
                    
                    
                    
                    
                </FormContainer>
                

            </ContentContainer>
            <EditContainer></EditContainer>
        </div>
    )

}