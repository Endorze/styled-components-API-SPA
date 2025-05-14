import type { FC } from "react";
import { StyledInput } from "./Input.styles";

type Props = {
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:FC<Props> = ({placeholder, value, onChange}) => {
    return (
        <StyledInput placeholder={placeholder} value={value} onChange={onChange}/>
    )
}

export default Input;