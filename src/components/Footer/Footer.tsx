import GradientTitle from "../GradientTitle/GradientTitle";
import { Copyright, FooterContainer, FooterLinks } from "./Footer.styles";
import logo from "/images/sponsors/carlex.png"

const Footer = () => {
    return (
        <FooterContainer>
            <GradientTitle text="Carlex Coorporation"/>
            <button>Get Involved Today</button>
            <FooterLinks>
                <div>
                    <img src={logo}/>
                    <h3>Uppsala SE &copy; 2025 All Rights Reserved</h3>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                </div>
                <div>
                    <h3>Media</h3>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                </div>
                <div>   
                    <h3>My Websites</h3>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                    <p>Placeholder</p>
                </div>
            </FooterLinks>
            <Copyright>
                <p>&copy; 2025 All Rights Reserved</p>
            </Copyright>
        </FooterContainer>
    )
}

export default Footer;