import img from "../../assets/img/img-1.png"
import Button from "../Button"
import {Container, DivLine, Whatsapp}  from "./style"
import { FaWhatsapp } from "react-icons/fa";
function SectionSobre({}) {
    return(
        <div id="empresa">
            <Whatsapp>
                <FaWhatsapp/>
            </Whatsapp>
            <Container>
                <div>
                    <img className="img-desktop" src={img} alt="" />
                </div>
                <div className="infos-desktop">
                    <span className="text-title">Renne Trajar</span>
                    <DivLine></DivLine>
                    <img className="img" src={img} alt="" />
                    <p>
                    Com mais de 35 anos de experiência em camisas, calças e ternos sob medida, possuímos profissionais experientes e altamente qualificados. 
                    </p>
                    <p>
                    Cada cliente tem seu molde exclusivamente desenvolvido para seu biotipo através das medidas tiradas pelo próprio Sr. Renee, no escritório ou residência do cliente.
                    </p>
                    <p className="frase"> “Nosso objetivo é superar a expectativa do cliente proporcionando-lhe satisfação ao usar nossos produtos, aliado a um relacionamento franco e honesto, valorizando o ser humano.” </p>
                    <span className="name">Renee Trajar</span>
                    <Button text="Agende uma visita!"></Button>
                </div>
            </Container>
        </div>
    )
}
export default SectionSobre;