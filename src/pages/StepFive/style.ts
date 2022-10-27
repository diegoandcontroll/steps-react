import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  margin-left: 20rem;
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  gap: 10rem;
`;
export const WrapperItem = styled.div``;

export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25rem;
  flex-direction: column;

  h1{
    margin-top: 1rem;
    margin-left: 20rem;
    font-weight: 500;
    font-size: 65px;
    line-height: 79px;
    text-align: center;
  }

  .inputs_step_1{
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
        border-radius: 50px;
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