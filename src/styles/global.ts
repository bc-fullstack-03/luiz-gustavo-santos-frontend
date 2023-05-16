import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::after,
    &::before {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }

  ${({ theme }) => css`
    body {
      width: 100%;
      background: ${theme.colors.mainBg};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family};
    }
  `}
`
