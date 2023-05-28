import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }


  html, body {
    height: 100%;
    background:rgb(241, 255, 227);
  }

  p {
    color: #222;
    font-weight: 500;
    line-height: 1.5rem;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #222;
  }

 

  @media screen and (max-width:1000px) {
    p, span {
      font-size: 0.9rem;
    }

    h2 {
      font-size: 1.7rem;
      line-height: 2.5rem;
    }

    h1 {
      line-height: 2.7rem;
    }
  }
`

