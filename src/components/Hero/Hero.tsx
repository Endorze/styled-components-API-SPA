import { Quote } from 'lucide-react';
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

    const getCreepyFlavorText = (entries: any[]): string => {
        const versions = ["y", "moon", "ultra-moon", "legends-arceus", "sword", "shield"];

        const filtered = entries.filter((entry) => entry.language.name === "en" && versions.includes(entry.version.name));

        const entry = filtered[0] || entries.find(e => e.language.name === "en");
        return entry?.flavor_text.replace(/\f/g, " ") || "No flavor text found.";

    }

    const fetchPokemon = async () => {
        try {
            const name = pokemonName.toLocaleLowerCase();

            const [pokemonResponse, speciesResponse] = await Promise.all([
                fetch(`https://pokeapi.co/api/v2/pokemon/${name}`),
                fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`),
            ])

            const pokemon = await pokemonResponse.json();
            const species = await speciesResponse.json();

            const flavorText = getCreepyFlavorText(species.flavor_text_entries)

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
                    <h3>  <Quote size={48} fill="currentColor"/> We should be thanking our lucky stars that Drifloon's doesn't dominate our skies - Expert in Pokémonology</h3>
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