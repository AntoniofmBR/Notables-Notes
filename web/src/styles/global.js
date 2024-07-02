import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.COLORS.background_dark_blue};
    color: ${({ theme }) => theme.COLORS.white};

    -webkit-font-smoothing: antialiased;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.white};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.gray};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`