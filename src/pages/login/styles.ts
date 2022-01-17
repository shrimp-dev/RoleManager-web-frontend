import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--violet-blue);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
`;
export const LeftSide = styled.div`
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
    font-size: 2.25rem;
    color: var(--black);
    font-weight: 700;
    width: 32vw;
    color: var(--dark);
  }
  
  button{
      width: 5rem;
      height: auto;
      border: none;
      background-color: inherit;
      cursor: pointer;
    }
    border: none;
    outline: none;
    svg{
      width: 100%;
      height: 100%;
    }
    :last-child{
      gap: 10vh;
    }
  }
  p{
    font-size: 1.1rem;
    :last-child{
      margin-top: 0;
      font-weight: 700;
      color: var(--violet-blue);
      cursor: pointer;
    }
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
    border: 1px solid var(--dark);
    outline: none;
    border-radius: 6px;
    width: 32vw;
    height: 5vh;
    padding: 0.5rem;
  }
  input:focus {
    border: 1px solid var(--violet-blue);
    color: var(--violet-blue)
  }
  label {
    padding: .5rem;
    font-size: 1.5rem;
    line-height: 36px;
    color: var(--black);
    :focus {
      color: var(--violet-blue);
    }
  }
  
`;
