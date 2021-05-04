import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {

        margin: 0;
        padding: 0;
        outline: 0;
        min-width:0;
        min-height:0;
        box-sizing: border-box;
    }

    :root {

        font-size:62.25%;
        width:100%;
        height:100%;

        --color-very-dark-grayish-blue: hsl(217, 19%, 35%);
        --color-desaturated-dark-blue: hsl(214, 17%, 51%);
        --color-grayish-blue: hsl(212, 23%, 69%);
        --color-light-grayish-blue: hsl(210, 46%, 95%);
        --color-white: hsl(0, 0%, 100%);

    }

    body {

        position:relative;
        font-family: 'Manrope', sans-serif;
        padding:3rem;
        min-height:100%;
        display:flex;
        flex-direction:column;
        background-color: var(--color-light-grayish-blue);
        
    }

`;
 
export default GlobalStyle;