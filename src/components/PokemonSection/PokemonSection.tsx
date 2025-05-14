import type { FC } from "react";
import { SectionDiv } from "./PokemonSection.styles";
import type { PokemonData } from "../../data/pokemondata";

type Props = {
    data: PokemonData | null;
}

const PokemonSection: FC<Props> = ({ data }) => {
    if (!data) return null;

    return (
        <SectionDiv>
            <h2>{data.name}</h2>
            <img src={data.sprites.front_default} alt={data.name} />
            <p>Height: {data.height}</p>
            <p>Weight: {data.weight}</p>
            <p>Types: {data.types.map(t => t.type.name).join(", ")}</p>
            <p>Flavortext: {data.flavorText}</p>
        </SectionDiv>
    )
}

export default PokemonSection;