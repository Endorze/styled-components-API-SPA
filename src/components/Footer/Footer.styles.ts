import styled from "styled-components";

export const FooterContainer = styled.div`
padding: ${({theme}) => theme.padding.normal};
background-color: ${({theme}) => theme.colors.sectionBackground1};
display: flex;
flex-direction:column;
align-items: center;

p, h3 {
font-size: ${({theme}) => theme.fontSizes.footer}
}

h3 {
margin-bottom: 1rem;
}

img {
height: 40px;
width: 140px;
}

button {
background: ${({theme}) => theme.colors.sectionBackground1};
border: 1px solid white;
padding: 1rem;
color: #ffffff;
margin: 2rem;
cursor:pointer;

}
@media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    padding: ${({theme}) => theme.padding.mobile};
    padding-top: 6rem;
}
`

export const FooterLinks = styled.div`
display:flex;
justify-content: space-between;
width: 100%;

div {
display:flex;
flex-direction: column;
}

@media (max-width: 768px}) {
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.lg};
}

@media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.lg};
}
`

export const Copyright = styled.div`
margin-top: 4rem;
`