import Button from "../Button/Button";
import GradientTitle from "../GradientTitle/GradientTitle";
import Input from "../Input/Input";
import { HeroDiv, InputButtonDiv, Vertical16Gap } from "./Hero.styles";
import type { PokemonData } from "../../data/pokemondata";
import { useState, type FC } from "react";

type Props = {
    onFetch: (data: PokemonData) => void;
};

const Hero: FC<Props> = ({ onFetch }) => {

    const [pokemonName, setPokemonName] = useState("");

    const fetchPokemon = async () => {
        try {
            const name = pokemonName.toLocaleLowerCase();

            const [pokemonResponse, speciesResponse] = await Promise.all([
                fetch(`https://pokeapi.co/api/v2/pokemon/${name}`),
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`),
            ])

            const pokemon = await pokemonResponse.json();
            const species = await speciesResponse.json();

            const flavorText = species.flavor_text_entries.find((entry: any) => entry.language.name === "en")?.flavor_text.replace(/\f/g, " ") || "No flavor text Found.";

            const allData = {
                ...pokemon,
                flavorText
            };

            onFetch(allData);
        } catch (err) {
            alert("Pokémon not found, make sure you're not spelling it wrong!")
        }
    }

    return (
        <div>
            <HeroDiv>
                <Vertical16Gap>
                    <GradientTitle text="Discover the horrifying reality of Pokémon" />
                    <p>Did you know that some Pokémon would be horrifying in real life?</p>
                    <h3>We should be thanking our lucky stars that drifbloom doesn't dominate our skies - Expert in Pokémonology</h3>
                    <p>Search for your favorite Pokémon</p>
                    <InputButtonDiv>
                        <Input value={pokemonName} placeholder="Enter a Pokémon" onChange={(e) => setPokemonName(e.target.value)} />
                        <Button text="Search" onClick={fetchPokemon} />
                    </InputButtonDiv>
                </Vertical16Gap>
                <div>
                    <img src="/mew.png" />
                    <div />
                </div>
            </HeroDiv>
        </div >
    )
}

export default Hero;