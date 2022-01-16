import Button from '../../Button'
import {Card} from './style'

type DrinkPayCardProps = {
    drinksCloseds:number
}

export default function DrinkPayCard(props:DrinkPayCardProps) {
    const {drinksCloseds} = props
    return (
        <Card>
            <header><h1>Já Pagas</h1></header>
            <div className='ContentCard'>
                <h1 className='DrinksClose'>{drinksCloseds<10&&0}{drinksCloseds}</h1>
                <Button text='Atualizar' type='Orange'/>
            </div>
        </Card>
    )
}
