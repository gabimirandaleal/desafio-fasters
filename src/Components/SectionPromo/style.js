import styled from "styled-components";

export const Container = styled.div`
    background: #063040;
    padding: 30px 20px;
    .img-desktop{
        display:none;
    }
    .desk{
        h2{
            font-family: 'Cormorant', serif;
            font-style: normal;
            font-weight: normal;
            line-height: 64px;
            color: #BE9667;
            font-size:53px;
            margin: 20px 0px;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        h3{
            font-family: 'Cormorant', serif;
            font-weight: 400;
            font-style: italic;
            color: #BE9667;
            font-size:20px;
            margin-bottom: 10px;
        }
        ul {
                list-style: none; /* Remove list bullets */
                padding: 0;
                margin: 0;
        }
        li{
            font-family: 'Lato', sans-serif;
            font-weight:300;
            font-style: normal;
            color: #828282;
            margin: 20px 0px;
            font-size: 18px;
        }

        span{
            font-family: 'Lato', sans-serif;
            font-weight:400;
            font-style: normal;
            color: #828282;
            margin: 20px 0px;
            font-size: 18px;
            color: white;
        }
        li::before {
            content: "-"; /* Insert content that looks like bullets */
            padding-right: 8px;
        }
        button{
            width:100%;
            background: #BE9667;
        }
    }
    
    @media(min-width:676px){
        display: flex;
        justify-content:center;
        .img-desktop{
            display: block;
            order:2;
            margin-left: 10px;
        }
        .desk{
            order: 1;
            button{
                width:300px;
                background: #BE9667;
            }
        }
    }
`;