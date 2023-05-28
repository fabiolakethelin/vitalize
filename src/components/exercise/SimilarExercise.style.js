import { styled } from "styled-components";

export const Container = styled.div`
    height: 100%;
    background: #fff;
    padding: 3rem;

    h2 {
        color: #13678A;
        margin-bottom: 4rem;
    }
`

export const Similar_Exercises = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 300px;
    margin: auto;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`