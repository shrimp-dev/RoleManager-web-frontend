import Navbar from '../Navbar'
import TitlePage from '../TitlePage'
import {LayoutDiv} from './style'

type LayoutProps = {
    title:string
    row?:boolean
    children?:any
}

export default function Layout(props:LayoutProps) {
    return (
        <LayoutDiv>
            <Navbar/>
            <div className='Content'>
                <TitlePage title={props.title} row={props.row}/>
                {props.children}
            </div>
        </LayoutDiv>
    )
}
