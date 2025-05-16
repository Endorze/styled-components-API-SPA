import styled from "styled-components"

export const SponsorsDiv = styled.div`
margin-top: ${({theme}) => theme.spacing.lg};
padding: ${({theme}) => theme.padding.normal};
display:flex;
flex-direction: column;
gap: ${({theme}) => theme.spacing.lg};
@media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
padding: ${({theme}) => theme.padding.mobile};
}
`

export const SponsorWrapper = styled.div`
display:flex;
justify-content: space-between;
gap: ${({theme}) => theme.spacing.md};
flex-wrap: wrap;

img {
height: 40px;
}

@media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
flex-direction: column;

img {
object-fit: contain;
}
}
`

export const SponsorText = styled.div`
background: ${({theme}) => theme.colors.heroBackground};
border-radius: 1rem;
padding: 2rem;
display:flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

button {
background: #ffffff;
color: ${({theme}) => theme.colors.buttonText};
font-weight: 550;
padding: 1rem;
border-radius: 10px;
outline: 0;
border: none;
}

button:hover {
background: #ffffff;
cursor:pointer;
}

@media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
flex-direction: column;
gap: 16px;
align-items: initial;
}

`


export const SponsorTitle = styled.div`
display:flex;
flex-direction:column;
gap: 16px;
`