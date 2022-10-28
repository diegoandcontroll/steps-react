import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BarsWrapper = styled.div`

`;
export const Point = styled.div`
    width: 32px;
    height: 32px;
    border: 2px solid #F8C70E;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -0px;
    background-color: #F8C70E;
    position: relative;
    top: -0.8rem;
    left: -2rem;
`;
export const SecondPoint = styled.div`
    width: 32px;
    height: 32px;
    border: 2px solid #F8C70E;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -12px;
    background-color: #F8C70E;
    position: relative;
    top: -2.8rem;
    left: 12rem;
`;

export const ThreePoint = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #F8C70E;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -12px;
  background-color: #F8C70E;
  position: relative;
  top: -4.85rem;
  left: 30rem;
`;

export const FourPoint = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #F8C70E;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -12px;
  background-color: #F8C70E;
  position: relative;
  top: -6.85rem;
  left: 45rem;
`;

export const FivePoint = styled.div`
  width: 32px;
  height: 32px;
  border: 2px solid #F8C70E;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -12px;
  background-color: #F8C70E;
  position: relative;
  top: -8.85rem;
  left: 59rem;
`;
export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25rem;
  flex-direction: column;

  h3{
    font-weight: 500;
    font-size: 45px;
    line-height: 79px;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-left: 6.4rem;
  }

  .inputs_step_1{
    margin-left: 12.5rem;
    label {
      font-size: 26px;
      line-height: 31px;
      input, select{
        display: block;
        margin-top: 8px;
        box-sizing: border-box;
        width: 532px;
        height: 50px;
        background-color: #8377EF;
        border-radius: 10px;
        border: 2px solid #fff;
        color: #fff;
        font-size: 31px;
        line-height: 38px;
        text-align: center;
        margin-bottom: 2rem;
        outline: none;
      }
    }
  }
`
export const Select = styled.select`
  display: block;
  margin-top: 8px;
  box-sizing: border-box;
  width: 532px;
  height: 50px;
  background-color: #8377EF;
  border-radius: 50px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 31px;
  line-height: 38px;
  text-align: center;
  margin-bottom: 2rem;
  outline: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    &:hover{
      background-color: #fff;
    }
  }
  
  option:not(:checked) {
    background-color: #fff;
  }

`