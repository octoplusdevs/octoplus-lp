import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body{
        background-color: #000;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container {
        width: 100%;
        max-width: 128.6rem;
        margin: 0 auto;
        padding: 0px 1.5rem;
    }

`
