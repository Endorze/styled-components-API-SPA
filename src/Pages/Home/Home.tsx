import { useState, useRef, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import PokemonSection from "../../components/PokemonSection/PokemonSection";
import type { PokemonData } from "../../data/pokemondata";


const Home = () => {
    const [pokemon, setPokemon] = useState<PokemonData | null>(null)
    const sectionRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
    if (pokemon && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [pokemon]);



    return (
        <>
        <Hero onFetch={setPokemon}/>
         {pokemon && <PokemonSection ref={sectionRef} data={pokemon} />}
        </>
    )
}

export default Home;