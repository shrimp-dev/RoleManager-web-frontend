import DrinkBanner from "../components/DrinkStuff/DrinkBanner";
import Layout from "../components/Layout";


export default function Drinks() {
    return (
        <Layout title="Suas Bebidas" row>
            <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                <DrinkBanner/>
                <div>
                    Pagina de drinks
                </div>
            </div>
        </Layout>
    )
}
