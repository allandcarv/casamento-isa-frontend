import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #fffafc;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  header {
    height: 80px;
  }

  main {
    flex: 1;
  }

  footer {
    height: 40px;
  }

  button {
    cursor: pointer;
  }
`;
