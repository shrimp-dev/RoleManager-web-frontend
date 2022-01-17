import {BtnContainer} from './style'

type ButtonProps={
    type: "Blue"|"White"|"Orange"
    text: string
    handleClick?: any 
}

export default function Button(props:ButtonProps) {
    const {type,text} = props
    return (
        <BtnContainer >
            <button className={type}>{text}</button>
        </BtnContainer>
    )
}
