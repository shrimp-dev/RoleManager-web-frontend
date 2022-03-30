import { IconBeer, IconLogout, IconMembersTwo, IconProfile, IconWallet, IconShrimpAux } from "../Icons";
import { Nav } from "./style";
import router from "next/router";
import Link from "next/link";


export default function Navbar() {
    function logout(){
        router.push('/login')
    }

    return (
        <Nav>
            <Link href='/' passHref>
            <h1 className="Logo">{IconShrimpAux}</h1>
            </Link>
            <ul className="ContainerMid">
                <Link href='/profile/1' passHref>
                    <li>{IconProfile}</li>
                </Link>

                <Link href='/' passHref>
                    <li>{IconMembersTwo}</li>
                </Link>
                
                <li>{IconWallet}</li>
                <Link href='/drinks' passHref>
                    <li>{IconBeer}</li>
                </Link>
                
            </ul>
            <ul>
                <li onClick={()=>logout()}>{IconLogout}</li>
            </ul>
        </Nav>
    )
}
