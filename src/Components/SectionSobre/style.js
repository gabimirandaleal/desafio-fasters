import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:30px;
    padding: 0px 20px;
    .img-desktop{
        display: none;
    }
    .infos-desktop{
        display:flex;
        flex-direction: column;
        align-items: center;
        p{
            font-family: 'Lato', sans-serif;
            font-weight:lighter;
            font-style: normal;
            margin-bottom: 10px;
            color: #4F4F4F;
        }
        .frase{
            font-family: 'Cormorant', serif;
            font-weight: 400;
            font-style: italic;
            color: #1C86A4;
            text-align:center;
            font-size:20px;
            margin: 30px 0px;
        }
        .text-title{
            font-family: 'Cormorant', serif;
            font-weight: 300;
            font-style:normal;
            color: #70B0C4;
            font-size: 25px;
        }
        .img{
            height: 200px;
            width: 200px;
            object-fit:cover;
            margin-bottom: 30px;
        }
        .name{
            font-family: 'Cormorant', serif;
            font-weight: 500;
            font-style:normal;
            color: #828282;
            font-size: 18px;
            margin-bottom: 30px;
        }
    }
    @media(min-width: 600px){
        flex-direction: row;
        align-items:center;
        justify-content: center;
        .img{
            display:none;
        }
        .img-desktop{
            display: block;
            margin-right: 20px;
            
        }
        button{
                padding: 10px 50px;
        }
        .infos-desktop{
            display:flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .name{
            display: flex;
            width: 100%;
            justify-content: flex-end;
        }
    }
`;

export const DivLine = styled.div`
    width: 40px;
    height: 2px;
    background: #70B0C4;
    margin: 10px 0px 20px 0px;
`;

export const Whatsapp = styled.div`
    display: none;
    @media(min-width: 500px){
        background: #25d366;
        border-radius: 100%;
        margin-left: auto;
        position: relative;
        bottom: 30px;
        right: 20px;
        width: 65px;
        height:58px;
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
`;