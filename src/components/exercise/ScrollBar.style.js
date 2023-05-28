import { styled } from "styled-components";

export const ScrollMenu = styled.div`
    display: flex;
    margin: 4rem 1rem;

    .arrow {
        font-size: 22px;
        margin-top: 50px;

        &:hover {
            cursor: pointer;
            font-size: 25px;
        }
    }
`
export const Slider = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
    margin: 2rem 0;
`