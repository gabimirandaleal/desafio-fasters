import Button from "../Button"
import {Container, DivContact, Div, Span, Form, DivAtendimento, Rodape, Subir}  from "./style"
import { VscCircleFilled } from "react-icons/vsc";
import logo from "../../assets/img/logo-2.png"
import { AiOutlineUp} from "react-icons/ai";


function SectionContact({}) {
    
    return(
        <Container id="contato">    
            <div className="desk">
                <div className="form">
                    <DivContact>
                        <h2>Contato</h2>
                        <div></div>
                    </DivContact>
                    <Form>
                        <input type="text" placeholder="Nome"/>
                        <input type="text" placeholder="E-mail"/>
                        <input className="text-area" type="text" placeholder="Mensagem"/>
                        <Button text="Enviar Mensagem"></Button>
                    </Form>
                </div>
                <div>
                    <Div>
                        <p>TELEFONES</p>
                        <Span>+55 (11) 3088-0757</Span>
                        <p>E-MAIL</p>
                        <Span>renee@reneetrajar.com.br</Span>
                    </Div>
                    <DivAtendimento>
                        <h2>Atendimento Personalizado</h2>
                        <Button text="Clique Aqui!"></Button>
                    </DivAtendimento>
                </div>
            </div>
            <Rodape>
                <div className="desk-rodape">
                    <img src={logo} alt="" />
                    <h2>CNPJ:04.487.685/0001-01</h2>
                </div>
                <Subir>
                    <a href="#"><AiOutlineUp/></a>
                </Subir>
                <div className="direitos">
                    <span>Copyright: 2021 © Renee Trajar</span>
                    <span>Todos os direitos reservados.</span>
                </div>
            </Rodape>
        </Container>
    )
}
export default SectionContact;