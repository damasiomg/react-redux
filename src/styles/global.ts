import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #app{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
    }

    button {
        cursor: pointer;
    }

    .action-ceil{
        display: grid;
        grid-template-columns: 35px 35px;
        cursor: pointer;
    }

    a{
        color: #734bd1;
    }

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    a:active {
        text-decoration: none;
    }
`;