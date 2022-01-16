import DrinkBanner from "../components/DrinkStuff/DrinkBanner";
import OpenDrinkTable from "../components/DrinkStuff/OpenDrinkTable";
import Layout from "../components/Layout";


export default function Drinks() {
    return (
        <Layout title="Suas Bebidas" row>
            <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'20px'}}>
                <DrinkBanner/>
                <OpenDrinkTable drinks={[{description:"Teste",created:"12/01/2022",paidDate:"20/02/2022"}]}/>
            </div>
        </Layout>
    )
}
