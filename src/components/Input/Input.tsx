import type { FC } from "react";
import { StyledInput } from "./Input.styles";

type Props = {
    placeholder: string,
}

const Input:FC<Props> = ({placeholder}) => {
    return (
        <StyledInput placeholder={placeholder} />
    )
}

export default Input;