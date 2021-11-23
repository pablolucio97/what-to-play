import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     *{
        font-family: 'Oswald', sans-serif;
        letter-spacing: .04rem;
    }

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    a{
        text-decoration-line: none;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }

    button{
        outline: none;
        border: none;
        cursor: pointer;
    }
`;
