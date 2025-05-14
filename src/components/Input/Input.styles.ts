import styled from "styled-components";

export const StyledInput = styled.input`
background-color: ${({ theme }) => theme.colors.buttonColor};
color: ${({ theme }) => theme.colors.buttonText};
cursor: pointer;
padding: 0.5rem 1rem;
font-size: 1rem;
line-height: 1.5rem;
outline: 0;
border:none;
flex: 0.8;
`