import { IconBeer, IconLogout, IconMembersTwo, IconProfile, IconWallet, IconShrimpAux } from "../Icons";
import { Nav } from "./style";


export default function Navbar() {
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
                <li>{IconLogout}</li>
            </ul>
        </Nav>
    )
}
