import ClosedDrinkTable from "../components/DrinkStuff/ClosedDrinkTable";
import DrinkBanner from "../components/DrinkStuff/DrinkBanner";
import OpenDrinkTable from "../components/DrinkStuff/OpenDrinkTable";
import Layout from "../components/Layout";


export default function Drinks() {
    return (
        <Layout title="Suas Bebidas" row contentTye="">
            <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'20px'}}>
                <DrinkBanner/>
                <OpenDrinkTable drinks={[{description:"Teste",created:"12/01/2022",paidDate:"20/02/2022"}]}/>
                <ClosedDrinkTable drinks={[{description:"Amigo de merda",created:"05/01/2022",paidDate:"01/02/2022"},
                                         {description:"Isso é uma descrição",created:"22/12/2021",paidDate:"13/01/2022"}]} />
            </div>
        </Layout>
    )
}
