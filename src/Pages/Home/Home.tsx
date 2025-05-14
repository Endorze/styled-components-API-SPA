import { useState } from "react";
import Hero from "../../components/Hero/Hero";
import PokemonSection from "../../components/PokemonSection/PokemonSection";
import type { PokemonData } from "../../data/pokemondata";


const Home = () => {

    const [pokemon, setPokemon] = useState<PokemonData | null>(null)

    return (
        <>
        <Hero onFetch={setPokemon}/>
        <PokemonSection data={pokemon}/>
        </>
    )
}

export default Home;