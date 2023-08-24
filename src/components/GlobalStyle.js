import { createGlobalStyle, styled } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background: black;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

    p {
        padding: 0;
    }

    tbody {
        border: none;
    }
    `;

    export const Container = styled.div`
        padding: 50px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    `;