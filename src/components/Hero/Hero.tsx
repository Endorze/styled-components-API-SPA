import Button from "../Button/Button";
import GradientTitle from "../GradientTitle/GradientTitle";
import Input from "../Input/Input";
import { HeroDiv, InputButtonDiv, Vertical16Gap } from "./Hero.styles";

const Hero = () => {

    const consoleLog = (): void => {
        return console.log("Hello")
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
                        <Input placeholder="Enter a Pokémon" />
                        <Button text="Search" onClick={() => consoleLog} />
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