import styled from "styled-components";

export const SectionDiv = styled.div`
display:flex;
padding: ${({ theme }) => theme.padding.normal};
justify-content: center;
gap: ${({ theme }) => theme.spacing.lg};
align-items: top;
flex-wrap: wrap;

div img {
    min-width:390px;
    display: flex;
    justify-content: center;
}

div {
flex: 1;
text-align: left;
max-width: 390px;
}
`

export const GradientDivider = styled.div`
width: 75px;
min-height: 5px;
background: ${({ theme }) => theme.colors.gradientDiv};
border-radius: 4px;
margin: 16px 0;
`

export const LoreDiv = styled.div`

margin-top: ${({ theme }) => theme.spacing.six};

h2 {
    font-weight: 800;
    font-size: ${({theme}) => theme.fontSizes.lg};
    line-height: 42px;
}

p {
font-size:  ${({theme}) => theme.fontSizes.md};
line-height: 32px;
color: ${({ theme }) => theme.colors.subtitleColor};
}
`

export const PokemonDiv = styled.div`
margin-top: ${({ theme }) => theme.spacing.six};

h2 {
    font-weight: 800;
    font-size: ${({theme}) => theme.fontSizes.lg};
    line-height: 42px;
}

p {
font-size:  ${({theme}) => theme.fontSizes.sm};
line-height: 32px;
color: ${({ theme }) => theme.colors.subtitleColor};
}
`