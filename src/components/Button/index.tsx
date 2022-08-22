import * as C from './styles';

type Props = {
    content?: string;
    icon?: any;
    bgColorButton: string;
    onClick?: () => void;
}

export const Button = ({ content, icon, bgColorButton, onClick }: Props) => {
    return (
        <C.Button onClick={onClick} bgColor={bgColorButton}>
            {icon &&
                <C.ButtonIcon src={icon} alt="" />
            }
            {content}
        </C.Button>
    );
}