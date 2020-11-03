import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Rubik-Regular;
    src: url("/static/fonts/Rubik-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: Rubik-Medium;
    src: url("/static/fonts/Rubik-Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: GothamPro;
    src: url("/static/fonts/GothamPro-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: PT Sans;
    src: url("/static/fonts/PTSans-Regular.ttf") format("truetype");
    font-weight: normal;
  }
  @font-face {
    font-family: PT Sans;
    src: url("/static/fonts/PTSans-Bold.ttf") format("truetype");
    font-weight: bold;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 14px;
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
  p {
    margin: 0;
    padding: 0;
  }
  button,
  input {
    outline: none;
  }
  a {
    color: inherit;
    &:hover {
      color: inherit;
    }
  }
  .btn:focus {
    box-shadow: none !important;
  }
  
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    @media ${device.middle} {
      max-width: 1190px;
    }
  }
  
  textarea.form-control {
    min-height: calc(1.5em + .75rem + 2px);
  }
`;

export default GlobalStyle;
