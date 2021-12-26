import Burguer from "../Burguer"
import logo from "../../assets/img/logo.png"
import {Container, ContainerLogo} from "./style"

function Header({}) {
    return(
        <>
            <Container>
                <Burguer></Burguer>
            </Container>
            <ContainerLogo>
                <img src={logo} alt="logo"/>
            </ContainerLogo>
        </>
    )
}

export default Header;