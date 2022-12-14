import styled from "styled-components";
import { ThemeType } from '../../reducers/theme';

type ButtonType = { bgColor: string, themeOptions: ThemeType }
export const Button = styled.div<ButtonType>`
    display: inline-flex;
    align-items: center;
    border-radius: 10px;  
    background-color: ${props => props.bgColor};
    font-size: 18px;    
    cursor: pointer;
    margin: 0 5px;  
    padding: 10px 5px;
    transition: all ease .5s;

    &:hover {
        box-shadow: ${props => props.themeOptions.boxShadow};
    }

    @media (max-width: 500px) {
        padding: 5px 3px;
    }
`;

export const ButtonIcon = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;    
`;