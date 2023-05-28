import { styled } from "styled-components";

export const Recipes_Container = styled.div`
    width: 100%;
    padding: 3rem;
    text-align: center;

    h1 {
        margin-bottom: 2rem;
        color: #028373;
    }

    p {
        margin-bottom: 1rem;
    }
`

export const RecipeList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    width: 70%;
    margin: 5rem auto;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`