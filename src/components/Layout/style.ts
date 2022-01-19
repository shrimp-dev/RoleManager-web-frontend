import styled from "styled-components";

export const LayoutDiv = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;

    .Content,.ContentBanner{
        width: 100%;
        display: flex;
        flex-direction: column;
        max-height: 100vh;

        overflow-y: auto;
        overflow-x: hidden;
    }

    .Content{
        gap: 2rem;
        padding: .75rem 2rem;
    }

    .ContentBanner{
        gap: .2rem;
        padding: .75rem 0rem;
    }

    .ContentBanner .TitleLayout{
        margin-left:2rem ;
    }

    @media(max-width:500px){
        .TitleLayout{
            display: none;
        }
        .ContentBanner{
        gap: .2rem;
        padding: 0;
        }
    }
`;
