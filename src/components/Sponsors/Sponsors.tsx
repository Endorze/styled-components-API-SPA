import { CurrentSponsors } from "../../data/sponsors";
import GradientTitle from "../GradientTitle/GradientTitle";
import { SponsorsDiv, SponsorText, SponsorTitle, SponsorWrapper } from "./Sponsors.styles";

const Sponsors = () => {
    return (
        <SponsorsDiv>
            <SponsorText>
                <SponsorTitle>
                    <GradientTitle text="Get Involved Today" />
                    <h2>Currently we're maintaining the support and trust of thousands of users</h2>
                </SponsorTitle>
                <button>Get Started</button>
            </SponsorText>
            <SponsorWrapper>
                {CurrentSponsors.map((image, index) => (
                    <img key={index} src={image.imgPath} alt="sponsor"/>
                ))}
            </SponsorWrapper>
        </SponsorsDiv>
    )
}

export default Sponsors;