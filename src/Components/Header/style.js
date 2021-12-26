import styled from "styled-components";

export const Container = styled.div`
    background: black;
    display:flex;
    justify-content: center;
    padding: 10px 10px 0px 0px;
`;
export const ContainerLogo = styled.div`
    background: black;
    display:flex;
    justify-content: center;
    padding-bottom:20px;
    @media (min-width: 690px){
        justify-content: flex-start;
        padding: 0px 0px 10px 10px;
    }
`;
