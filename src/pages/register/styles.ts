import styled from "styled-components";
export const ContentContainer = styled.div`
  background-color: var(--white);
  width: 61vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
  
`;
export const FormTitleContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
justify-content: flex-start;
h1{
      font-size: 3rem;
      color: var(--dark);
  }
  `
  export const FormContainer = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3vh;
  
  
  `
  export const Form = styled.div`
  display: flex;
  flex-direction: column;
  label{
      font-size: 1.5rem;
      color: var(--dark);
  }
  input{
      width: 100%;
      height: 4.5vh;
      border-radius: 6px;
      padding: 1rem;
      outline: none;
      border: 1px solid var(--dark);
      :focus{
        border: 1px solid var(--violet-blue);
    color: var(--violet-blue)
      }
  }`;
export const EditContainer = styled.div`
  background-color: var(--violet-blue);
  width: 39vw;
  min-height: 100vh;
  margin-left: auto;
  gap: 12vh;
`;