import Button from '../../Button'
import {Card} from './style'

type DrinkOpenCardProps ={
    drinksOpen:number
}

export default function DrinkOpenCard(props:DrinkOpenCardProps) {
    return (
        <Card>
            <header><h1>Em Aberto</h1></header>
            <div>
                <h1 className='DrinksOpen'>{props.drinksOpen}</h1>
                <Button text='Abrir nova' type='Orange'/>
            </div>
        </Card>
    )
}
