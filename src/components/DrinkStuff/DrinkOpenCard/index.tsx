import Button from '../../Button'
import {Card} from './style'

type DrinkOpenCardProps ={
    drinksOpen:number
}

export default function DrinkOpenCard(props:DrinkOpenCardProps) {
    const {drinksOpen} = props

    return (
        <Card>
            <header><h1>Em Aberto</h1></header>
            <div className='ContentCard'>
                <h1 className='DrinksOpen'>{drinksOpen<10&&0}{drinksOpen}</h1>
                <Button text='Abrir nova' type='Orange'/>
            </div>
        </Card>
    )
}
