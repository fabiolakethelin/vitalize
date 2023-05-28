import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
    padding: 1rem;
    margin: 2rem auto;

    input {
        background: transparent;
        border: 2px solid #13678A;
        border-radius: 5px;
        font-weight: 600;
        padding: .5rem;
    }

    svg {
        color: #13678A;
        font-size: 2rem;
        margin-left: 20px;
        
        &:hover {
            cursor: pointer;
            font-size: 2.2rem;
        }
    }

    @media screen and (max-width: 760px) {
        flex-wrap: wrap;

        input {
            margin: .7rem;
        }

        svg {
            font-size: 1.5rem;

            &:hover {
                font-size: 1.7rem;
            }
        }
    }
`

export const Search_input = styled.div`
    width: 100%;

    input {
        min-width: 80%;
    }

`

export const Calories_input = styled.div`
    input {
        max-width: 150px;
    }
`