import styled from "styled-components";

export const TableContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--dark);
    
    .TitleTable{
        font-weight: 500;
        font-size: 18px;
    }

    table{
        width: 100%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-right: 0.5px solid #C4C4C4;
        border-left: 0.5px solid #C4C4C4;
        border-bottom: 0.5px solid #C4C4C4;
        border-collapse: collapse;
    }

    th{
        border-bottom: 0.5px solid #C4C4C4;
        font-weight: 400;
    }
    
    th,td{
        padding: .7rem;
    }

    tr{
        cursor: pointer;
        border-bottom: 0.5px solid #C4C4C4;
    }
`