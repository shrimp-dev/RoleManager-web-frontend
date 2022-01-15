import styled from "styled-components";

export const Card = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  width: 16.3rem;
  height: 22.5rem;
  img {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    align-self: center;
    border: 5px solid rgb(255, 255, 255);
  }
  p {
    margin-top: 1rem;
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    align-self: center;
    justify-self: center;
    font-family: "Comfortaa", cursive;
  }
  .CardContent {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  .CardColor {
    background-color: gray;
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .CardContainer {
    padding: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .ProfileName {
    color: black;
  }
  .CardProfileButton {
    width: 15rem;
    height: 2.2rem;
    background-color: #c4c4c4;
    margin-top: 4rem;
    cursor: pointer;
    border-radius: 5px;
    justify-self: center;
    align-self: center;
    font-weight: 500;
    justify-self: flex-end;
    font-size: 24px;
    line-height: 36px;
    font-family: "Poppins", sans-serif;
  }
`;
