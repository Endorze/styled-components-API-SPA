import Button from "../Button/Button";
import Input from "../Input/Input";

const Hero = () => {

    const consoleLog = (): void => {
        return console.log("Hello")
    }

    return (
        <div>
            <div>
                <h1>Hero</h1>
                <p>Did you know that some Pokémon are horrifying in real life?</p>
                <h3>Find out more</h3>
                <div>
                    <Input placeholder="Enter a Pokémon"/>
                    <Button text="Search" onClick={() => consoleLog}/>
                </div>
            </div>
            <div>
                <img src="/mew.png"/>
            </div>
        </div>
    )
}

export default Hero;