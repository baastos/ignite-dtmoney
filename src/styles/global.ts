import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --text: #969CB3;
        --title: #363F5F;
        --shape: #FFFFFF;
        --red: #E62E4D;
        --green: #33CC95 ;
        --blue: #5429CC;
        --blue-light: #6933FF;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px;
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    border-style, input, textarea, button{
        font-family: 'Poppins' sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }
    [disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content{
        width:100%;
        max-width:576px;

        position: relative;
        background: var(--background);
        padding: 3rem;

        border-radius: 0.25rem;

    }
`;