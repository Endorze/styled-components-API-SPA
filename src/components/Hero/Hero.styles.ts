import styled from "styled-components";

export const HeroDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: auto;
align-items: center;
background: ${({ theme }) => theme.colors.heroBackground};
padding: ${({ theme }) => theme.padding.normal};
gap: ${({ theme }) => theme.spacing.lg};
min-height: 90vh;

@media (max-width:${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
}

@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    img {
    max-width: 300px;
    }
}


div {
flex: 1
}

div img {
    display: flex;
    justify-content: center;
    margin: auto;
}

img {
    min-width: 390px;
    height: auto;
    object-fit: cover;
}

p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 650;
    line-height: 32px
}

h3 {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.subtitleColor};
}

@media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
h3 {
font-size: ${({ theme }) => theme.fontSizes.md};
}

p {
font-size: ${({ theme }) => theme.fontSizes.sm};
}

}

`

export const InputButtonDiv = styled.div`
display: flex;
gap: ${({ theme }) => theme.spacing.xs};
`

export const Vertical16Gap = styled.div`
display:flex;
flex-direction: column;
gap: ${({ theme }) => theme.spacing.md};
`

