import styled from "styled-components";

export const StyledButton = styled.button`
background-color: ${({ theme }) => theme.colors.buttonColor};
color: ${({ theme }) => theme.colors.buttonText};
cursor: pointer;
padding: 0.5rem 1rem;
font-size: 1rem;
line-height: 1.5rem;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border: none;
outline: 0;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

&:hover {
background-color: #f1cbd2;
}
`