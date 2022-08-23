import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import * as C from './styles';

type Props = {
    content?: string;
    icon?: any;
    bgColorButton: string;
    onClick?: () => void;
}

export const Button = ({ content, icon, bgColorButton, onClick }: Props) => {
    const { state } = useContext(Context);

    return (
        <C.Button onClick={onClick} bgColor={bgColorButton} themeOptions={state.theme}>
            {icon &&
                <C.ButtonIcon src={icon} alt="" />
            }
            {content}
        </C.Button>
    );
}