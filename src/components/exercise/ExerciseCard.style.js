import { styled } from "styled-components";

export const Container = styled.div`
    background: #fff;
    border-radius: 10px;
    margin: 2rem;
    box-shadow: 1px 2px 2px rgb(0, 0, 0, 2%);

    h5 {
        text-align: center;
        text-transform: capitalize;
        margin: .8rem;
    }

    img {
        width: 100%;
        min-width: 250px;
        max-width: 360px;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .btn {
        color: #fff;
        border: none;
        border-radius: 15px;
        font-size: 10px;
        text-transform: uppercase;
        padding: .5rem;
        margin: .5rem;
    }

    .bodyPart {
        background: #13678A;
    }

    .target {
        background: #00AA95;
    }
`