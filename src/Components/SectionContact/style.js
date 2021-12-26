import styled from "styled-components";

export const Container = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   width: 100%;
   @media(min-width:624px){
     .desk{
       display: flex;
       flex-direction: row-reverse;
       width: 100%;
       justify-content: space-around;
       align-items:center;
       .form{
         width: 50%;
         padding: 0px 20px;
         box-sizing:border-box;
       }
    }
   }
`;

export const DivContact = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   h2{
    font-family: Cormorant;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 46px;
    color: #1C86A4;
   }
   div{
       width: 40px;
       height: 2px;
       background: #70B0C4;
   }
   @media(min-width:624px){
    align-items:flex-start;
    margin-left: 30px;
    div{
      margin-left: 30px;
    }
   }
`;

export const Div = styled.div`
  margin-top: 100px;
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
`;  

export const Span = styled.span`
  color: #828282;
  margin-bottom:10px;
`;  

export const DivAtendimento = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  h2{
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    color: #1C86A4;
    margin: 20px 0px;
  }
  button{
      background: transparent;
      border: 1px solid #1C86A4;
      color: #014561;
      padding: 10px 50px;
      margin-bottom: 20px;
  }
  
  border-bottom: 1px solid #BE9667;
  margin-bottom: 20px;
  @media (min-width: 624px){
    border-bottom: 0px;
  }
`;  

export const Form = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:center;
  margin-top: 40px;
  width: 100%;
  input{
      padding: 10px 20px;
      margin-bottom: 10px;
      border: 1px solid #1C86A4;
  }
  .text-area{
      padding-bottom: 40px;
  }
`;  

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #C4C4C4;
    margin: 20px 0px;
    @media(min-width: 573px){
        visibility: hidden;
    }
`;

export const Rodape = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 139px;
    }
    h2{
        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        color: #BDBDBD;
        margin: 20px 0px 0px 0px;
    }
    span{
        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #4F4F4F;
    }
    margin-bottom: 20px;
    @media (min-width: 624px){
      width: 100%;
      border-top: 2px solid #BE9667;
      padding: 20px 20px;
      box-sizing:border-box;
      flex-direction: row;
      align-items: end;
      justify-content: space-around;
    }
`;

export const Subir = styled.div`
    filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
    background: #FFFFFF;
    border-radius: 4px;
    padding: 10px;
    position: relative;
    left: 120px;
    bottom: 35px;
    @media (min-width: 624px){
      display: flex;
      justify-content:center;
      margin-left: auto;
    }
`;