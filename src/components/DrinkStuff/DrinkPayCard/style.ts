import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);
    height: 100%;
    background: linear-gradient(152.3deg, #5D5FEF 7.75%, rgba(93, 95, 239, 0.88) 91.39%);
    padding: 1rem;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    .ContentCard{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .DrinksClose{
        font-weight: 700;
        font-size: 96px;
    }
`