import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html {
      font-size: 62.5%;
      background-color: #000;
      scroll-behavior: smooth;
    }
    body {
      font-size: 1.6rem; /* equivalente a 16px */
      line-height: 1.5;
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
