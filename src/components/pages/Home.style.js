import styled from "styled-components";

export const Intro_Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 3rem;
    gap: 5rem;

    .intro {
        min-width: 350px;
        margin-rigth: 2rem;

        h1 {
            color: #028373;
            font-size: 5.5rem;
        }

        h3 {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 20px;
        }
    }

    .intro-img {
        display: flex;
        justify-content: center;

        img {
            width: 100%;
            max-width: 500px;
            min-width: 300px;
        }
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        text-align: center;

        .intro {
            h1 {
                font-size: 4rem;
            }

            h3 {
                font-size: 1.5rem;
                margin: 2rem;
            }
        }
    }
`

export const Exercise_Section = styled.section`
    height: 100%;
    padding: 2rem;
    margin-top: 2rem;

    h2 {
        width: 100%;
        text-align: center;
        font-size: 2.4rem;
        font-weight: 600;
        margin: 4rem 0;
    }

    @media screen and (max-width:1000px) {
        h2 {
          font-size: 1.7rem;
          line-height: 2.5rem;
        }
`

export const Recipes_Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 3rem;
    gap: 5rem;

    .recipes-intro {
        h2 {
            color: #13506a;
            text-align: center;
        }

        p {
            margin: 2rem 0 3rem;
            text-align: center;
        }
    }

    .recipes_img {
        display: flex;
        justify-content: center;

        img {
            width: 100%;
            max-width: 200px;
        }
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        text-align: center;
`