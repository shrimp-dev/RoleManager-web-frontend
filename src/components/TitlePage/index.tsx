import {Title} from './style'

type TitlePageProps = {
    title:string
    row?:boolean;
}

export default function TitlePage(props:TitlePageProps) {
    const {title,row} = props
    return (
        <Title>
            <h1>{title}</h1>
            {row&& (
                <hr></hr>
            )}
        </Title>
    )
}
