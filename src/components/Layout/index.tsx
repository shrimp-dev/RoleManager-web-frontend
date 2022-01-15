import Navbar from '../Navbar'
import {LayoutDiv} from './style'

type LayoutProps = {
    children?:any
}

export default function Layout(props:LayoutProps) {
    return (
        <LayoutDiv>
            <Navbar/>
            <div style={{padding:'1rem'}}>
                <div>Title</div>
                {props.children}
            </div>
        </LayoutDiv>
    )
}
