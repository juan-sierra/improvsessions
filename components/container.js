import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  } 
  *::selection {
    background: #f4c95d;
  }
  html, body {
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }
`

function GSWrapper() {
  return <GlobalStyle />
}

export default GSWrapper
