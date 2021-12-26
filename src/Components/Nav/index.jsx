import {Container, Div, Span} from "./style"

function Nav({open}) {
    return (    
         <Container open={open}>
                <ul>
                    <li><a href="#empresa">EMPRESA</a></li>
                    <li><a href="#camisaria">CAMISARIA</a></li>
                    <li><a href="#alfaiataria">ALFAIATARIA</a></li>
                    <li><a href="#depoimentos">DEPOIMENTOS</a></li>
                    <li><a href="#contato">CONTATO</a></li>
                </ul>
                <Div>
                    <p>TELEFONES</p>
                    <Span>+55 (11) 3088-0757</Span>
                    <p>E-MAIL</p>
                    <Span>renee@reneetrajar.com.br</Span>
                </Div>
            </Container>
    )
}

export default Nav