import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction:column;
    align-items:center;
    padding: 0px 20px;
    img{
        width:300px;
        height: 300px;
    }
    h3{
        font-family: Cormorant;
        font-style: normal;
        font-weight: 300;
        font-size: 40px;
        line-height: 61px;
    }

    h4{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 20px;
    }
    h4::before {
        content: "—"; /* Insert content that looks like bullets */
        padding-right: 8px;
        margin-left:5px;
    }
    ul{
        list-style: disc;
        padding: 0px 30px;
    }
    li{
        font-family: Cormorant;
        font-style: italic;
        font-weight: normal;
        font-size: 22px;
        line-height: 27px;
    }
    button{
        width: 100%;
        margin-top:10px
    }
    .produtos-2{
        margin-bottom: 20px;
    }
    @media(min-width: 942px){
        .produtos-1{
            display: flex;
            align-items:center;
            justify-content: space-between;
            align-items:center;
            width: 50%;
            
            .img{
                display: flex;
                align-items:center;
                justify-content:center;
                img{
                    height:400px;
                    width: 400px;
                }
                
            }
            .img-text{
                    margin-left:20px;
                    box-sizing:border-box;
                    display: flex;
                    flex-direction:column;
                    ul{width:100%}
            }
        }
        .produtos-2{
            display: flex;
            justify-content: space-between;
            align-items:center;
            width: 50%;
            flex-direction: row-reverse;
            margin: 40px 0px;
                .img{
                    display: flex;
                    align-items:center;
                    justify-content:center;
                    img{
                        height:400px;
                        width: 400px;
                    }
                }
                .img-text{
                        margin-right:20px;
                        box-sizing:border-box;
                        display: flex;
                        flex-direction:column;
                        ul{width:100%}
                }
            
        }
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