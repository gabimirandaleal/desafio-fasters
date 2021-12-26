
import {Container, Div, DivPromocao} from "./style" 
import { FaWhatsapp } from "react-icons/fa";
import Button from "../Button";

function Banner({}) {
    return(
        <Container>
            <Div>
                <span>Elegante é ter um</span>
                <span className="text-alfaiate">ALFAIATE</span>
                <span className="text-end">para chamar de seu.</span>
            </Div>
            <DivPromocao>
                <div>
                    <p>COMPRE HOJE, <span className="text-pagamento">PAGUE EM ATÉ 3X COM 12% DE DESCONTO</span> E TENHA 10 MESES PARA CONFECCIONAR </p>
                    <div className="whatsapp">
                        <FaWhatsapp/>
                    </div>
                </div>
                <Button text="FAÇA JÁ UM ORÇAMENTO"></Button>
            </DivPromocao>
            
        </Container>
    )
}

export default Banner;