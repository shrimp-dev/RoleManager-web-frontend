import { IconTwoDrinks } from '../../Icons'
import DrinkOpenCard from '../DrinkOpenCard'
import {Banner} from './style'

export default function DrinkBanner() {
    return (
        <Banner>
            <div>{IconTwoDrinks('200','200')}</div>
            <DrinkOpenCard drinksOpen={6}/>
        </Banner>
    )
}
