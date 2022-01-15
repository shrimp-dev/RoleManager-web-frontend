import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--violet-blue);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
`;
export const RegisterContentContainer = styled.div`
  background-color: var(--white);
  width: 61vw;
  min-height: 100vh;
  display: none;
`;
export const LoginContentContainer = styled.div`
  background-color: var(--white);
  width: 39vw;
  min-height: 100vh;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12vh;
`;
export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 2.1rem;
  h2 {
    font-size: 20px;
    color: var(--black);
    font-weight: 700;
  }
  img {
    width: 7vw;
    height: auto;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;
export const InputStructure = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border: 1px solid #07004d;
    border-radius: 6px;
    width: 25vw;
    height: 5vh;
    padding: 0.5rem;
  }
  input:focus {
    background-color: black;
  }
  label {
    font-size: 12px;
    line-height: 36px;
    color: var(--black);
    :focus {
      color: var(--violet-blue);
    }
  }
`;
