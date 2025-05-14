import { forwardRef, type FC } from "react";
import { GradientDivider, LoreDiv, PokemonDiv, SectionDiv } from "./PokemonSection.styles";
import type { PokemonData } from "../../data/pokemondata";

type Props = {
    data: PokemonData | null,
}

const PokemonSection = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
    if (!data) return null;

    return (
        <SectionDiv ref={ref}>
            <div>
                <img src={data.sprites.front_default} alt={data.name} />
            </div>
            <PokemonDiv>
                <GradientDivider />
                <h2>{data.name.slice(0, 1).toUpperCase() + data.name.slice(1).toLowerCase()}</h2>
                <p>Height: {data.height} - Units</p>
                <p>Weight: {data.weight} - Kilograms</p>
                <p>Type: {data.types.map(t => t.type.name).join(", ")}</p>
                
            </PokemonDiv>
            <LoreDiv>
                <GradientDivider />
                <h2>Lore</h2>
                <p>{data.flavorText}</p>
            </LoreDiv>


        </SectionDiv>
    )
});

export default PokemonSection;