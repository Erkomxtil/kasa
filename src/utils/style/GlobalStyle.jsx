import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 100px 0 100px;
    height: 100%;

    font-family: Montserrat, sans-serif;
    @media (max-width: 768px) {
      max-width: unset;
      width:100%;
      padding: 100px 20px 0 20px;
    };
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle