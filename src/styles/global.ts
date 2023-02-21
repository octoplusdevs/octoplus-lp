import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body{
        background-color: #000;
        font-size: 16px;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
    }
    .container {
        width: 100%;
        max-width: 128.6rem;
        margin: 0 auto;
        padding: 0px 1.5rem;
    }
    .show{
        display: block;
    }
    .hidden {
        display: none;
    }

`
