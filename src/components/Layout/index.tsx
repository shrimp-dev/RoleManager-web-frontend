import Navbar from '../Navbar'
import TitlePage from '../TitlePage'
import {LayoutDiv} from './style'

type LayoutProps = {
    title:string
    row?:boolean
    children?:any
    contentTye:''|'Banner';
}

export default function Layout(props:LayoutProps) {
    return (
        <LayoutDiv>
            <Navbar/>
            <div className={`Content${props.contentTye}`}>
                <div className='TitleLayout'>
                    <TitlePage title={props.title} row={props.row}/>
                </div>
                {props.children}
            </div>
        </LayoutDiv>
    )
}
