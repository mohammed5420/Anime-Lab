import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --bg-color: #fff;
        --p-color: #2699FB;
        --s-color: #171717;
        --accent-color: #FFA200;
        --text-dark: #2b2727;
        --text-gray: #707070;
        --text-white: #fff;
        --text-light: #5a5a5a;
        --duration: 600ms;
    }

    html {
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
        @media screen and (max-width: 1520px){
            font-size: calc(72.5%);
        }
        @media screen and (max-width: 1220px){
            font-size: calc(68.5%);
        }
        @media screen and (max-width: 1028px){
            font-size: calc(60.5%);
        }
        @media screen and (max-width: 480px){
            font-size: calc(56.5%);
        }
        @media screen and (max-width: 360px){
            font-size: calc(52.5%);
        }
    }

    


    body {
        font-family: 'Nunito', sans-serif;
       background-color: #fafafa;
       color: #fff;
    }

    a {
        text-decoration: none;
        display: inline-block;
    }
    h1 {
        font-size: 6rem;
        text-transform: capitalize;
        
    }
    h2 {
        font-size: 2.4rem;
        text-transform: capitalize;
    }
    h3 {
        font-size: 2rem;
        text-transform: capitalize;
    }

    @keyframes scale {
        0% {
            opacity: 1;
            transform: scale(1);
        }

        100% {
            opacity: 0;
            transform: scale(1.3);
        }
    }



.btn {
    position: relative;
    text-align: center;
    padding: 1.2rem 2rem;
    background-color: var(--p-color);
    border-radius: 30rem;
    font-size: 1.6rem;
    color: var(--text-white);
    margin: 1rem 1rem 4rem;
    text-transform: capitalize;
    transition: all 0.3s ease;
    border: 0.2rem solid var(--p-color);


    &:hover {
      transform: scale(1.04);
      background-color: transparent;
      color: var(--p-color);
    }
}

    

`;
