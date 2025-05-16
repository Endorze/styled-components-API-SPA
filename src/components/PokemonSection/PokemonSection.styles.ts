import styled from "styled-components";

export const SectionDiv = styled.div`
display:flex;
padding: ${({ theme }) => theme.padding.normal};
justify-content: center;
gap: ${({ theme }) => theme.spacing.lg};
background-color: ${({ theme }) => theme.colors.background};

div {
flex: 1;
}

div img {
background-color:rgba(105, 105, 105, 0.58);
border-radius: 15px;
height: 100px;
width: 100px;
}

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
flex-direction: column;
gap: 0;
padding:  ${({ theme }) => theme.padding.mobile};

div {
margin-top: ${({ theme }) => theme.spacing.md};
}
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

h2 {
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 42px;
}

p {
font-size:  ${({ theme }) => theme.fontSizes.md};
line-height: 32px;
color: ${({ theme }) => theme.colors.subtitleColor};
}


@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
p {
font-size: ${({ theme }) => theme.fontSizes.sm}
}

h2 {
font-size: ${({ theme }) => theme.fontSizes.md};
}
}
`

export const PokemonDiv = styled.div`
h2 {
    font-weight: 800;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 42px;
}

p {
font-size:  ${({ theme }) => theme.fontSizes.sm};
line-height: 32px;
color: ${({ theme }) => theme.colors.subtitleColor};
}

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
p {
font-size: ${({ theme }) => theme.fontSizes.sm}
}

h2 {
font-size: ${({ theme }) => theme.fontSizes.md};
}
}
`