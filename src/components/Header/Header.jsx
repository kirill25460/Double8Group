import logo from "images/first-logo.PNG"
import {LogoHeader,Container, AppBar} from "./Header.styled"

export const Header = () => {
    return  (
 <AppBar>
    <Container>
    <LogoHeader src={logo} alt="Logo" /> 
    </Container>

 </AppBar>

    )
}