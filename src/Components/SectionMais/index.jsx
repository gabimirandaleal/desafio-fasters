import { Container, DivText, DivImg } from "./style";
import img2 from "../../assets/img/img-2.png"
import img3 from "../../assets/img/img-3.png"

function SectionMais({}) {
    return(
        <Container>
            <DivImg>
                <img src={img3} alt="" />
                <img className="img-filter" src={img2} alt="" />
            </DivImg>
            <DivText>
                <p>“Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é impecável em todos os detalhes, desde a  costura ao caimento. O Renee tem uma equipe de mestre!”</p>
                <span>Nelson Garey</span>
                <p className="advogados">Advogado  |  Nelson Garey Advogados Associados</p>
            </DivText>
        </Container>
    )
}

export default SectionMais;