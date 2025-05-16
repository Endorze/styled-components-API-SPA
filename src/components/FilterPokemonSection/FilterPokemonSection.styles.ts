import styled from "styled-components";

export const FilterPokemon = styled.div`
padding: ${({theme}) => theme.padding.normal};
background-color:rgb(19, 0, 0);

`

export const FilterCheckboxes = styled.div`
display:flex;
justify-content: space-between;
margin: ${({theme}) => theme.spacing.lg} 0
`