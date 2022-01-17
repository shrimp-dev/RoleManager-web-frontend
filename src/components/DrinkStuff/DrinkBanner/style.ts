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
    
    .IconContent{
        flex: 1;
        background: linear-gradient(152.3deg, #5D5FEF 7.75%, rgba(93, 95, 239, 0.88) 91.39%);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius:10px;
        border-bottom-left-radius:10px;
        max-height: 300px;
    }

    .CardContent{
        display: flex;
        gap: 1px;
        height: 100%;
        flex-wrap: wrap;
    }

    @media(max-width: 1266px) {
        .IconContent{
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;
        }
        .CardContent{
            min-width: 100%;
            flex: 1;
            justify-content: space-evenly;
            background: linear-gradient(152.3deg, #5D5FEF 7.75%, rgba(93, 95, 239, 0.88) 91.39%);
            height: 300px;
            border-radius: 10px;

        }
    }

    @media(max-width:791px){
        .CardContent{
            background:var(--white);
            height: 600px;
        }
    }
`