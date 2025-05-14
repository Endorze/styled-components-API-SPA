import { StyledButton } from "./Button.styles"
import type { FC } from "react";

type Props = {
    text: string,
    onClick: () => void;
}

const Button:FC<Props> = ({text, onClick}) => {
    return (
        <div>
            <StyledButton onClick={onClick}>{text}</StyledButton>
        </div>
    )
}

export default Button;