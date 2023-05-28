import styled from "styled-components";

export const Header = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(241, 255, 227);
    height: 65px;
    width: 100%;
    position: sticky;
    top: 0;
    padding: 1rem;
    box-shadow: rgba(40, 76, 3, 10%) 1px 2px 2px;

    img {
        height: 55px;
    }
`

export const NavIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        cursor: pointer;
        z-index: 2;
        font-size: 20px;
        color: #13678A;
    }
`

export const NavContent = styled.div`
    display: flex;
    width: 100%;

    .list {
        margin: auto;
    }

    ul {
        display: flex;
    }

    li {
        padding: 0 2rem;
    }

    a {
        font-size: 0.9rem;
        font-weight: 550;

        &:hover {
            color: #00AA95;
            transition: 0.2s ease-in-out;
        }
    }

    @media screen and (max-width: 768px) {
        display: ${({open}) => (open ? 'flex' : 'none')};
        flex-direction: column;
        text-align: center;
        background: rgb(223 253 193);
        height: 100%;
        width: 230px;
        padding: 1rem 2rem;
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 1;

        .list ul {
            display: flex;
            flex-direction: column;
        }

        .list a {
            display: block;
            font-size: 1.1rem;
            margin: 3rem 0;
        }
    }
`

export const CloseMenu = styled.div`
    display: ${({open}) => (open ? 'block' : 'none')};
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;

    @media screen and (min-width: 768px) {
        display: none;
    }
`