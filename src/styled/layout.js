import styled from 'styled-components/macro';

const Main = styled.main`

    display:flex;
    align-items:center;
    justify-content:center;
    flex-grow:1;

`;

const Footer = styled.footer`

    position: absolute;
    bottom:5px;
    text-align:center;
    left:0;
    right:0;

    a {
        color: var(--color-very-dark-grayish-blue);
        text-decoration:none;
        font-weight: 700;
    }

`;

export {
    Main,
    Footer
}