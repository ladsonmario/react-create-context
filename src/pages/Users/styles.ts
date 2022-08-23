import styled from "styled-components";
import { ThemeType } from "../../reducers/theme";

type themeOptionsType = {themeOptions: ThemeType};

export const Container = styled.div``;

export const H2 = styled.h2`
    margin-bottom: 20px;
`;

export const TableUsers = styled.table`
    width: 100%;       
    display: flex;
    flex-direction: column;
`;

export const Thead = styled.thead``;

export const TDIV = styled.div<themeOptionsType>`
    border-bottom: 1px solid ${props => props.themeOptions.color};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        padding: 5px;
    }
`;

export const Tbody = styled.tbody``;

export const TH = styled.th`
    width: 100%;
    padding: 5px 0;
`;

export const TD = styled.td`
    text-align: center;
    padding: 5px 0;
`;

export const TR = styled.tr`
    display: flex;
`;

export const Empty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EmptyText = styled.span`
    font-size: 22px;
`;

export const EmptyImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 500px;
    object-fit: contain;
`;