import { createGlobalStyle } from 'styled-components'

const GlobalSyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  html, body, #__next{
    height: 100%;
  }

  body{
    font-family: -apple-system, 'Montserrat', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1{
    font-size: ${(props) => props.theme.h1};
    font-weight: 500;
    color: ${(props) => props.theme.black};
  }
`

export default GlobalSyles
