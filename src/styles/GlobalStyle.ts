import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     *{
        font-family: 'Open Sans', sans-serif;
        letter-spacing: .04rem;
    }

    html{
        font-size: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        background: #000;
        color: #fff;
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

    .active-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 320px;
        height: 160px;
        padding: 1rem;
        background: #fff;
        margin: 25% auto;

        strong{
            font-size: 1.24rem;
            color: ${(props) => props.theme.colors.gray3}
        }
  }

  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
  }
`;
