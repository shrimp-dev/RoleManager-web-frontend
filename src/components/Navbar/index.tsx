import { IconBeer, IconLogout, IconMembersTwo, IconProfile, IconWallet, IconShrimpAux } from "../Icons";
import { Nav } from "./style";
import router from "next/router";


export default function Navbar() {
    function logout(){
        router.push('/login')
    }

    return (
        <Nav>
            <h1 className="Logo">{IconShrimpAux}</h1>
            <ul className="ContainerMid">
                <li>{IconProfile}</li>
                <li>{IconMembersTwo}</li>
                <li>{IconWallet}</li>
                <li>{IconBeer}</li>
            </ul>
            <ul>
                <li onClick={()=>logout()}>{IconLogout}</li>
            </ul>
        </Nav>
    )
}
