import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    padding: 1rem;
    margin: 2rem auto;
`

export const Searcher = styled.div`
    display: flex;
    justify-content: center;

    input {
        min-width: 70%;
        background: transparent;
        border: 2px solid #13678A;
        border-radius: 5px;
        font-weight: 600;
        padding: .5rem;
    }

    svg {
        color: #13678A;
        font-size: 1.4rem;
        font-weight: 500;
        margin: auto 0 auto 20px;

        &:hover {
            cursor: pointer;
            font-size: 1.5rem;
        }
    }
`