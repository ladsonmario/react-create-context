import styled from 'styled-components';
import { ThemeType } from './reducers/theme';

type ThemeOptionsType = { themeOptions: ThemeType }

export const Body = styled.div<ThemeOptionsType>`
    background-color: ${props => props.themeOptions.bgColor};
    color: ${props => props.themeOptions.color};
    min-height: 100vh;
`;

export const Container = styled.div<ThemeOptionsType>`
    max-width: 1028px;
    width: 100%;
    margin: auto;
    box-shadow: ${props => props.themeOptions.boxShadow};
    padding: 10px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div``;

export const Theme = styled.div`
    display: flex;
    align-items: center;
`;

export const ThemeImg = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;

export const ThemeContainer = styled.div`
    background-color: #fff;    
    width: 40px;
    height: 15px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;      
`;

export const ThemeCircle = styled.div<ThemeOptionsType>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.themeOptions.bgColor};
    position: absolute;
    transition: all ease .5s;
    right: ${props => props.themeOptions.status === 'dark' ? '20px' : '0'};
    left: ${props => props.themeOptions.status === 'light' ? '20px' : '0'};
    border: 1px solid ${props => props.themeOptions.color};
`;

