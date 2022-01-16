import styled from "styled-components";

export const BtnContainer = styled.div`
    
    button{
        width: 230px;
        height: 51px;
        font-size: 24px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }

    .Orange{
        background-color: var(--orange);
        color: var(--white);
    }

    .White{
        background-color: var(--white);
        color: var(--dark);
        border: 1px solid;
    }

    .Blue{
        background-color: var(--violet-blue);
        color: var(--white);
    }
`