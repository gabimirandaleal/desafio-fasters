import Button from "../Button"
import {Container}  from "./style"
import img from "../../assets/img/img-6.png"

function SectionPromo({}) {
    return(
        <Container>
            <div className="img-desktop">
                    <img  src={img} alt="" />
            </div>
            <div className="desk">
                <h2>Condição Imperdível</h2>
                <h3>Compre hoje e garanta:</h3>
                <ul>
                    <li>12% de desconto e pagamento em até <span>3x sem juros;</span></li>
                    <li>Até <span>10 meses</span> para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuíram, estará sempre elegante;</li>
                    <li>Condição muito especial por <span>tempo limitado;</span></li>
                    <li>Poder presentear alguém com uma roupa de alta costura, <span>exclusiva.</span></li>
                </ul>
                <Button text="Garanta essa condição especial!"></Button>
            </div>
        </Container>
    )
}
export default SectionPromo;