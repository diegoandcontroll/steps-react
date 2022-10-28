import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#F8C70E' : '#fff'};
    border-radius: 10px;
    background-color: ${props => props.selected ? darken(0.1,'#8377EF'): '#8377EF'};
    width: 532px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 15px;
    align-items: center;
    text-align: center;
    cursor: pointer;
    opacity: ${props => props.selected? 1 : 0.6};
    transition: 0.5s;
    &:hover {
        opacity: 1;
    }
    @media (max-width: 768px) {
        width: 300px;
    }
`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #191A59;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
`;

export const Description = styled.div`
    font-size: 14px;
    color: #B8B8D4;
`;