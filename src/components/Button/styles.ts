import styled from "styled-components";

type ButtonType = { bgColor: string }
export const Button = styled.div<ButtonType>`
    display: inline-flex;
    align-items: center;
    border-radius: 10px;  
    background-color: ${props => props.bgColor};
    font-size: 18px;
    padding: 10px 5px;
    cursor: pointer;
    margin: 0 5px;    
`;

export const ButtonIcon = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;    
`;