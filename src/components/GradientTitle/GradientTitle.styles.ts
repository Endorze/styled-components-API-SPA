import styled from "styled-components";

export const StyledTitle = styled.h2`
    background: ${({theme}) => theme.colors.gradientTitle};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: ${({theme}) => theme.fontSizes.xxl};
    line-height: 1.2;

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        font-size: ${({theme}) => theme.fontSizes.xl}
    }

     @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: ${({theme}) => theme.fontSizes.lg}
    }
`