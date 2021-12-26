import Banner from "../../Components/Banner";
import Header from "../../Components/Header";
import SectionContact from "../../Components/SectionContact";
import SectionDepoimentos from "../../Components/SectionDepoimentos";
import SectionMais from "../../Components/SectionMais";
import SectionProdutos from "../../Components/SectionProdutos";
import SectionPromo from "../../Components/SectionPromo";
import SectionSobre from "../../Components/SectionSobre";

function Home(){
    return(
        <>
            <Header></Header>
            <Banner></Banner>
            <SectionSobre></SectionSobre>
            <SectionMais></SectionMais>
            <SectionPromo></SectionPromo>
            <SectionProdutos></SectionProdutos>
            <SectionDepoimentos></SectionDepoimentos>
            <SectionContact></SectionContact>
        </>
    )
}

export default Home;