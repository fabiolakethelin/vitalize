import styled from "styled-components";

export const Container_Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: #fff;
    padding: 3rem;
    gap: 4rem;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        text-align: justify;

        h1 {
            text-align: center;
        }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 8rem;
    

    h1 {
        font-size: 2.5rem;
        text-transform: capitalize;
    }

    h3 {
        margin-bottom: 2rem;
    }

    .benefits {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        img {
            width: 50px;
            background: rgb(0, 170, 149, 30%);
            border-radius: 50px;
            padding: 0.6rem;
        }

        span {
            margin-left: 0.7rem;
            vertical-align: 20px;
        }
    }

    .repetitions {
        p {
            margin-bottom: 1rem;
        }
    }
`

export const ExerciseImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        min-width: 350px;
        max-width: 600px;
    }
`