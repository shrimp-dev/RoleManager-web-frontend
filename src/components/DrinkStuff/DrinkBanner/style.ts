import styled from "styled-components";

export const Banner = styled.div`
    background: var(--white);
    width: 85%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    gap: 1px;
    max-height: 300px;

    .IconContent{
        flex: 1;
        background: linear-gradient(152.3deg, #5D5FEF 7.75%, rgba(93, 95, 239, 0.88) 91.39%);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
    }
`