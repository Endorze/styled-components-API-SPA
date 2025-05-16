import { useEffect, useState } from "react";
import { FilterCheckboxes, FilterPokemon } from "./FilterPokemonSection.styles";

const FilterPokemonSection = () => {

    const TYPES = ["electric", "fire", "water", "grass", "flying", "bug", "psychic", "normal", "rock", "ground", "ghost", "poison"]; // lägg till fler vid behov
    const [allPokemon, setAllPokemon] = useState<any[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

    const handleTypeChange = (type: string) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((pokemonType) => pokemonType !== type) : [...prev, type]
        );
    };

    //Function that renders the pokemon based on type selected, if no type is selected then all 151 is shown.
    const getVisiblePokemon = () => {
        if (selectedTypes.length === 0) return allPokemon;

        return allPokemon.filter((pokemon) => {
            const pokemonTypes = pokemon.types.map((pokemonType: any) => pokemonType.type.name);

            return selectedTypes.every((type) => pokemonTypes.includes(type));
        });
    };

    const resetValues = () => {
        setSelectedTypes([]);
    };


    //For own reminder. This function gets ALL pokemon from gen 1, saves them with state.
    const fetchAllPokemon = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await response.json();

            //Gets the name of pokemon and image Url from API
            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon: { name: string, url: string }) => {
                    const res = await fetch(pokemon.url);
                    return await res.json();
                })
            );

            setAllPokemon(pokemonDetails)

        } catch (err) {
            console.log(err, "Something went wrong");
        }
    }

    //When page render it makes sure to fetch all 151 pokemon from gen 1
    useEffect(() => {
        fetchAllPokemon();
    }, [])

    return (
        <FilterPokemon>
            <p>Filter Pokémon by selecting the filter tags</p>
            <button onClick={resetValues}>Reset Filters</button>
            <FilterCheckboxes>
                {TYPES.map((type) => (
                    <label key={type}>
                        <input
                            type="checkbox"
                            value={type}
                            checked={selectedTypes.includes(type)}
                            onChange={() => handleTypeChange(type)}
                        />
                        {type}
                    </label>
                ))}
            </FilterCheckboxes>

            <div>
                {getVisiblePokemon().map((pokemon, index) => (
                    <img
                        key={index}
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                ))}
            </div>
        </FilterPokemon>
    )
}

export default FilterPokemonSection;