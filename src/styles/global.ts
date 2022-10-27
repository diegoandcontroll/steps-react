import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #574BBC;
    --secondary: #F8C70E;
    --tertiary: #8377EF;
    --white: #EBEFF2;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    color: #ffffff;
  
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: var(--primary);
    -webkit-font-smoothing: antialiased;
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body, input, textarea, button {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  a{
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .finally_button{
    border: none;
    outline: none;
    font-size: 54px;
    line-height: 67px;
    text-align: center;
    font-weight: 700;
    background: transparent;
  }
  .prev-button{
    font-size: 54px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    line-height: 66px;
  }
  .button{
    width: 266px;
    height: 50px;
    border-radius: 50px;
    background-color: #83E193;
    font-weight: 700;
    font-size: 37px;
    line-height: 42px;
    text-align: center;
    outline: none;
    border: none;
  }
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 680px;
    max-height: 700px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    @media (max-width: 768px) {
      width: 380px;
      height: 568px;
    }
  }
  .fpZDAb:hover:enabled, .fpZDAb:focus:enabled{
    background: transparent !important;
    box-shadow: none!important;
    color: var(--primary)!important;
  }
  .jGlQPw:hover:enabled, .fpZDAb:focus:enabled{
    background: transparent !important;
    box-shadow: none!important;
    color: var(--primary)!important;
  }
  .fpZDAb,
  .jGlQPw{
    box-shadow: none!important;
  }
  .bcPFoY,
  .eifAwN{
    color: var(--primary)!important;
    background-color: var(--primary)!important;
    box-shadow: 0 0 1px 3px var(--primary)!important;
  }
  
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
  .banner{
    width: 1350px;
    height: 630px;
    @media (max-width: 768px) {
    width: 395px;
    height: 345.67px;
  }
  }
`;