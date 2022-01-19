import styled from "styled-components";

export const ProfileContainer = styled.div`

    
    .bannerUser{
        width: 100%;
        height: 321px;
        background-image: url('');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .ProfileBody{
        display: flex;
        width: 100%;
        gap: 10rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .ProfileImg{
        max-width: 338px;
        height: 338px;
        border-radius: 50%;
        border: 15px solid var(--white);
        border-radius: 50%;
        border: 15px solid #FFFFFF;
    }


    .ProfileContent{
        margin-top: -12.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 40%;
        gap: .5rem;
    }

    @media(max-width: 1033px) {
        .ProfileImg{
            max-width: 260px;
            height: 260px;
        }

        .ProfileContent{
            margin-top: -10.5rem;
            max-width: 100%;
        }
    }

    .UserInfoProfile{
        width: 40%;
    }

    .ProfileContent h1{
        width: 70%;
        color: var(--dark);
        text-align: center;
        font-weight: 500;
    }

    .ProfileContent p{
        text-align: center;
    }

    .ListProfileContent{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
    }

`