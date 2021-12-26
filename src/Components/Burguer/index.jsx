import Nav from "../Nav"
import {StyledBurger, Container} from "./style"
import { useState } from "react"

const Burger = () => {
    const [open, setOpen] = useState(false)
    
    return (
      <Container>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <Nav open={open}/>
      </Container>
    )
  }
  
  export default Burger