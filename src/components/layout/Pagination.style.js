import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;

    ul {
        display: flex;
        flex-direction: row;
    }

    li {
        background: rgba(0,0,0,.1);
        margin: .4rem;
        padding: .3rem;
    }

    li:hover {
        cursor: pointer;
    }

    .pagination-active a {
        color: red;
        font-weight: bold;
    }
`