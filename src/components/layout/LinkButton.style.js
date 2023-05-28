import styled from "styled-components";

export const Button = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #13678A;
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        margin: 0 auto;
        max-width: 250px;

        &:hover {
            background: #fff;
            color: #00AA95;
        }
    }

    .green {
        background: #00AA95;
    }
`