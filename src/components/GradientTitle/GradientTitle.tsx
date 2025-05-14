import type { FC } from "react";
import { StyledTitle } from "./GradientTitle.styles";

type Props = {
    text: string,
}

const GradientTitle:FC<Props> = ({text}) => {
    return (
        <StyledTitle>
            {text}
        </StyledTitle>
    )
}

export default GradientTitle;