import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px;
    @media (min-width: 500px){
        display: flex;
    }
`;

export const DivImg = styled.div`
        display: flex;
        background: rgba(2, 75, 104, 0.81);
        width: 100%;
        img{
            width: 50%;
        }
        .img-filter{
            filter: drop-shadow(0px 0px 0px #013145) opacity(20%);
        }
        @media (min-width: 500px){
            order:2;
        }
`;

export const DivText = styled.div`
    display: flex;
    flex-direction:column;
    text-align:center;
    align-items:center;
    background: #EFF7F9;
    padding: 0px 10px;
    span{
        font-family: 'Cormorant', serif;
        font-weight: 400;
        font-style: italic;
        color: #014561;
        font-size:20px;
    }
    p{
        font-family: 'Lato', sans-serif;
        font-weight:lighter;
        font-style: normal;
        color: #828282;
        margin: 20px 0px;
        font-size: 18px;
    }
    .advogados{
       color: #BE9667;
       font-size: 13px;
    }
    @media (min-width: 500px){
            order:1;
            justify-content:center;
    }
`;