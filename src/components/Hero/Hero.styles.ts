import styled from "styled-components";

export const HeroDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: auto;
align-items: center;
background: ${({theme}) => theme.colors.heroBackground};
padding: 4rem 6rem;
gap: ${({theme}) => theme.spacing.lg};
div {
flex: 1
}

div img {
    display: flex;
    justify-content: center;
    margin: auto;
}

img {
    width: 80%;
    height: auto;
    object-fit: cover;
}

p {
    font-size: ${({theme}) => theme.fontSizes.lg};
}

h3 {
    font-size: ${({theme}) => theme.fontSizes.xl};
    color: ${({theme}) => theme.colors.subtitleColor};
}
`

export const InputButtonDiv = styled.div`
display: flex;
gap: 4px;
`

export const Vertical16Gap = styled.div`
display:flex;
flex-direction: column;
gap: ${({theme}) => theme.spacing.md};
`