import { createGlobalStyle } from 'styled-components'
import themeBase from './theme'

const GlobalStyle = createGlobalStyle`
  html, body, #__next{
    height:100%;
  }

  body {
    padding: 0;
    margin: 0;
    background: ${props => (props.theme.main.background)};
    font-family: ${props => props.theme.main.font}
  }
`

export const theme = themeBase

export default GlobalStyle