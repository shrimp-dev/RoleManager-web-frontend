import styled from "styled-components";

export const Nav = styled.aside`
    min-height: 100vh;
    background-color: var(--violet-blue);
    width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    ul{
        width: 100%;
        list-style: none;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    li{
        cursor: pointer;
    }

    .Logo{
        color: #fff;
    }

    .ContainerMid{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8vh;
    }
`;
