import styled from "styled-components";
import banner from "../../assets/img/banner.png"

export const Container = styled.div`
    border: 1px solid #000;
    background-image: url(${banner});
    width: 100%;
    height: 630px;
    background-position: right;
    box-sizing: border-box;
`;
export const Div = styled.div`
    margin-top: 30px;
    display:flex;
    flex-direction: column;
    padding: 0px 10px;
    span{
        font-family: 'Playfair Display', serif;
        color: #BE9667;
        font-size: 20px;
    }
    .text-alfaiate{
        font-size: 65px;
        color: #062936;
    }
    .text-end{
        text-align:end;
    }
    @media (min-width:500px){
        width: 100%;
        max-width: 360px;
        margin-left: 100px;
        .text-alfaiate{
            font-size: 80px;
        }
    }
`;

export const DivPromocao = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    div{
        display: flex;
        padding: 20px 30px;
        margin-top: 250px;
        p{
            width: 100%;
            font-family: 'Lato', sans-serif;
            font-weight:lighter;
            font-style: normal;
            color: #CAC9C9;
            .text-pagamento{
                font-weight: 400;
                color: #FDFDFD;
            }
        }
        
        .whatsapp{
            background: #25d366;
            border-radius: 100%;
            width: 65px;
            height:55px;
            display: flex;
            justify-content:center;
            align-items:center;
            margin-top: 10px;
            padding: 0px;
            svg{
                box-sizing:border-box;
                width:  40px;
                height: 40px;
                color: white;
                padding: 0px 0px 2px 0px;
            }
        }
    }    
    @media (min-width:500px){
        width: 100%;
        max-width: 400px;
        margin-left: 100px;
        align-items:flex-start;
        div{
            padding: 0px;
        }
        .whatsapp{
            visibility: hidden;
        }
    }
`;