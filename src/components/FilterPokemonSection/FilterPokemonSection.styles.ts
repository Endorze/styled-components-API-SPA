import styled from "styled-components";

export const FilterPokemon = styled.div`
padding: ${({theme}) => theme.padding.normal};
background-color:${({theme}) => theme.colors.sectionBackground1};

@media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    padding: ${({theme}) => theme.padding.mobile};
}
`

export const FilterCheckboxes = styled.div`
display:flex;
gap: 1rem;
margin: ${({theme}) => theme.spacing.lg} 0;
flex-wrap: wrap;

@media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    flex-direction: column;
    flex-wrap: wrap;
    max-height:100px;
}

@media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    justify-content: space-between;
}
`