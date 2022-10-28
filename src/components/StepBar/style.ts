import styled from "styled-components";

interface Props{
  step: number;
}

export const Container = styled.div`
  margin-top: 4rem;
  .wrapper_steps{
    margin-left: 11rem;
    width: 1000px;
    height: 10px;
    background-color: #F8C70E;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    overflow: none;
    margin-top: 6rem;
    display: none;
    .wrapper_steps{
      margin-left: 1.5rem;
      width: 350px;
      height: 12px;
      background-color: #F8C70E;
      border-radius: 10px;
    }
  }
`;
export const Point = styled.div<Props>`
    width: 32px;
    height: 32px;
    border: 2px solid #F8C70E;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -0px;
    background-color: ${props => props.step === 1 ? '#574BBC' : '#F8C70E'};
    position: absolute;
    top: 3.2rem;
    left: 8rem;
    @media (max-width: 768px) {
      left: -2.8rem;
    }
`;
export const SecondPoint = styled.div<Props>`
    width: 32px;
    height: 32px;
    border: 2px solid #F8C70E;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -12px;
    background-color: ${props => props.step === 2 ? '#574BBC' : '#F8C70E'};
    position: absolute;
    top: 3.2rem;
    left: 20rem;
    @media (max-width: 768px) {
      top: -3.1rem;
      left: 8rem;
    }
`;

export const ThreePoint = styled.div<Props>`
  width: 32px;
  height: 32px;
  border: 2px solid #F8C70E;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -12px;
  background-color: ${props => props.step === 3 ? '#574BBC' : '#F8C70E'};
  position: absolute;
  top: 3.2rem;
  left: 38rem;
  @media (max-width: 768px) {
    top: -5.3rem;
    left: 18rem;
  }
`;

export const FourPoint = styled.div<Props>`
  width: 32px;
  height: 32px;
  border: 2px solid #F8C70E;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -12px;
  background-color: ${props => props.step === 4 ? '#574BBC' : '#F8C70E'};
  position: absolute;
  top: 3.2rem;
  left: 54rem;
  @media (max-width: 768px) {
    top: -7.6rem;
    left: 29rem;
  }
`;

export const FivePoint = styled.div<Props>`
  width: 32px;
  height: 32px;
  border: 2px solid #F8C70E;
  border-radius: 50%;
  margin-left: 30px;
  margin-right: -12px;
  background-color: ${props => props.step === 5 ? '#574BBC' : '#F8C70E'};
  position: absolute;
  top: 3.2rem;
  left: 70rem;
  @media (max-width: 768px) {
    left: 38.4rem;
    top: -9.85rem;
  }
`;