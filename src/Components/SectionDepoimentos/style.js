import styled from "styled-components";

export const Container = styled.div`
   background: rgba(0, 36, 50);
   display:flex;
   flex-direction:column;
   align-items:center;
`;

export const DivDepoimentos = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   h2{
    font-family: Cormorant;
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 46px;
    color: #F2F2F2;
   }
   div{
       width: 40px;
       height: 2px;
       background: #70B0C4;
   }
`;

export const DivInfoCliente = styled.div`
   display: flex;
   flex-direction:column;
   align-items:center;
   margin-top:20px;
   img{
        margin-bottom:20px;
       border-radius:100px;
       border: 2px solid #BE9667;
   }
   p{
    font-family: Cormorant;
    font-style: italic;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #C4C4C4;
   }
   h4{
    font-family: Cormorant;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #BE9667;
    margin: 20px 0px 10px 0px;
   }
   span{
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #949494;
    margin: 0px 0px 30px 0px;
   }
`;

export const DivNext = styled.div`
    display: flex;
    align-items:center;
    div{
        width: 20px;
        height: 20px;
        margin: 0px 10px;
        border-radius: 100%;
        border: 2px solid white;
    }
    .color-blue{
        background: #014561;
    }
    .transparent{
        background: transparent;
    }
    svg{
            width: 50px;
            height: 50px;
            color: #BE9667;
            cursor: pointer;
        }
`;

