import { Container, DivDepoimentos, DivInfoCliente, DivNext} from "./style";
import cliente1 from "../../assets/img/cliente-1.png"
import cliente2 from "../../assets/img/cliente-2.png"
import cliente3 from "../../assets/img/cliente-3.png"
import cliente4 from "../../assets/img/cliente-4.png"
import cliente5 from "../../assets/img/cliente-5.png"
import { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";


function SectionDepoimentos({}) {
    const [depoimentos, setDepoimentos] = useState([
        {depo: "“Há mais de 10 anos sou cliente da Renee Trajar. A qualidade, caimento e possibilidade de customização das roupas, aliados ao excelente atendimento e prazo de entrega são fatores decisivos para mim.”",
        name: "Josimar Henrique da Silva",
        cargo: "Diretor Presidente  |  Grupo Hebron", 
        img: cliente1
        },
        {depo: "Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já tem uma história de décadas com o querido Renee. O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.”",
        name: "William H. M. Garey",
        cargo: "Advogado  |  Nelson Garey Advogados Associados.", 
        img: cliente2 
        },
        {depo: "Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos tem elogiado a vestimenta. Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há mais de vinte anos.",
        name: "Domingos Orestes Chiomento",
        cargo: "DOC Contabilidade Empresarial", 
        img: cliente3  
        },
        {depo: "Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.",
        name: "José Mauro Marques",
        cargo: "Advogado", 
        img: cliente4
        },
        {depo: "“Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.”",
        name: "Custódio Pereira",
        cargo: "Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP", 
        img: cliente5
        },

    ])
    const [posi, setPosi] = useState(0)

    const nextPosi = () => {
        setPosi((posi+1)%depoimentos.length)
    }
    const PreviousPosi = () => {
        if(posi === 0){
            setPosi(depoimentos.length-1)
        }else {
            setPosi(posi-1)
        }
    }
    return(
        <Container id="depoimentos">
            <DivDepoimentos>
                <h2>Depoimentos</h2>
                <div></div>
            </DivDepoimentos>
            <DivInfoCliente>
                <img src={depoimentos[posi].img} alt="" />
                <p>{depoimentos[posi].depo}</p>
                <h4>{depoimentos[posi].name}</h4>
                <span>{depoimentos[posi].cargo}</span>
            </DivInfoCliente>
            <DivNext>
                <AiOutlineLeft onClick={PreviousPosi}/>
                    <div className={posi === 0 ? "color-blue" : "transparent"}></div>
                    <div className={posi === 1 ? "color-blue" : "transparent"}></div>
                    <div className={posi === 2 ? "color-blue" : "transparent"}></div>
                    <div className={posi === 3 ? "color-blue" : "transparent"}></div>    
                    <div className={posi === 4 ? "color-blue" : "transparent"}></div>     
                <AiOutlineRight onClick={nextPosi}/>
            </DivNext>
        </Container>
    )
}

export default SectionDepoimentos;