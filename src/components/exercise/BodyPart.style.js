import { styled } from "styled-components";

export const Container = styled.div`
    display: inline-block;
`

export const BodyPartCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 550;
    width: 150px;
    padding-right: 2rem;
    gap: 1rem;

    svg {
        background: rgb(0, 170, 149, 30%);
        border-radius: 50px;
        font-size: 3.5rem;
        padding: .5rem;
    }
`