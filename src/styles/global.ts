import { darken } from 'polished';
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
    background-image: linear-gradient(to left, #502BBe,#651BBC,#574BBC, #574BBC );
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
    width: 225px;
    height: 40px;
    background-color: #83E193;
    border-radius: 25px;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    line-height: 42px;
  }
  .button{
    width: 225px;
    height: 40px;
    border-radius: 25px;
    background-color: #83E193;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 42px;
    text-align: center;
    outline: none;
    border: none;
    opacity: 0.6;
    transition: 0.3s;
    &:hover{
      opacity: 1;
    }
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
  .point{
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: red;
  }
  .stepper-wrapper {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: -50%;
  z-index: 2;
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  margin-bottom: 6px;
}

.stepper-item .active {
  font-weight: bold;
}

.stepper-item .completed .step-counter {
  background-color: #4bb543;
}

.stepper-item .completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #4bb543;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 3;
}

  .stepper-item:first-child::before {
    content: none;
  }
  .stepper-item:last-child::after {
    content: none;
  }
  }
`;