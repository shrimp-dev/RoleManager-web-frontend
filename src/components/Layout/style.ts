import styled from "styled-components";

export const LayoutDiv = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;

    .Content{
        width: 100%;
        padding: .75rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-height: 100vh;

        overflow: scroll;
    }
`;
