import styled from "styled-components";

export const Container = styled.ul`    
    background-color: #013145;
    top: 0;
    right: 0;
    height: 100vh;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: fixed;
    width: 100%;
    z-index:2;
    ul{
      padding-top: 40px;
      transition: transform 0.3s ease-in-out;
      list-style: none;
      display: flex;
      flex-flow: column nowrap;
      align-items:center;
      
    }
    li {
      a{
        text-decoration:none;
        font-family: 'Lato', sans-serif;
        font-weight:lighter;
        font-style: normal;
        color: #BE9667;
        padding: 18px 10px;
        cursor: pointer;
      }
    }

    @media (min-width: 690px){
      width: 100%;
      height: 20px;
      list-style: none;
      transform: initial;
      padding: 0px;
      transition: unset;
      background-color: transparent;
      position: initial;
      ul{
        display: flex;
        justify-content: end;
        align-items: center;
        flex-flow: row nowrap;
      }
      li {
        padding: 0px 10px;
      }
    }
    
`

export const Div = styled.div`

  margin-top: 200px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  font-family: 'Lato', sans-serif;
  font-weight:lighter;
  font-style: normal;
  p{
    color: #1C86A4;
    margin-bottom:10px;
  }
  @media (min-width: 690px){
      display: none;
    }
`;  

export const Span = styled.span`
  color: #828282;
  margin-bottom:10px;
`;  