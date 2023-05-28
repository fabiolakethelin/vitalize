import { styled } from "styled-components";

export const Container_Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem;
    gap: 6rem;

    img {
        width: 100%;
        min-width: 350px;
        max-width: 500px;
        margin-top: 1rem;
    }

    h3 {
        margin: 1rem;
    }

    span {
        display: block;
        width: 100%;
        border-bottom: 1px solid black;
        margin: 1rem 0;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`

export const Instructions = styled.div`
    li {
        margin: 1rem 0;
    }

    .source {
        text-decoration: underline;
    }
`

export const Ingredients = styled.div`
    margin-left: 3rem;

    li {
        margin: 1rem 0;
        list-style: circle;
        text-align: left;
    }
`