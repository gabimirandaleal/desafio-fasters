import { useState } from "react";
import Button from "../Button"
import {Container, Line}  from "./style"
import img4 from "../../assets/img/img-4.png"
import img5 from "../../assets/img/img-5.png"

function SectionProdutos({}) {
    const [produtos, setProdutos] = useState([
        {name: "CAMISARIA", subName: "confeccionadas artesanalmente", infos: 
            [
            "100% Algodão",
            "Monograma",
            "Slim",
            "Nacionais e Importadas",
            "Tradicionais e Esportivas",
            "Casamentos"], 
            img: img5
        }, 
        {name: "ALFAIATARIA", subName: "totalmente  feito a mão  sob medida", infos: 
            [
                "Fio Super 120 e 130",
                "Lã fria Australiana",
                "Botões Importados",
                "Ternos e Calças",
                "Paletós e Smokings",
                "Sociais e Esportivos"
            ],
            img: img4
        }
        ])
    return(
        <Container>    
                   <div id="camisaria" className="produtos-1">
                       <div className="img">
                            <img order={1} src={produtos[0].img} alt="" />
                       </div>
                       <div className="img-text" order={2}>
                        <h3>{produtos[0].name}</h3>
                        <h4>{produtos[0].subName}</h4>
                        <ul>
                                {
                                    produtos[0].infos.map((itemInfo, index) => (
                                            <li key={index}>{itemInfo}</li>
                                    ))
                                }
                            </ul>
                            <Button text="Quero um orçamento"></Button>
                            <Line></Line>  
                        </div>
                   </div>

                   <div id="alfaiataria" className="produtos-2">
                       <div className="img">
                            <img  order={2} src={produtos[1].img} alt="" />
                        </div>
                        <div className="img-text" order={1}>
                            <h3>{produtos[1].name}</h3>
                            <h4>{produtos[1].subName}</h4>
                            <ul>
                                    {
                                        produtos[1].infos.map((itemInfo, index) => (
                                                <li key={index}>{itemInfo}</li>
                                        ))
                                    }
                                </ul>
                                <Button text="Quero um orçamento"></Button>
                        </div>
                    </div>
               
           
        </Container>
    )
}
export default SectionProdutos;