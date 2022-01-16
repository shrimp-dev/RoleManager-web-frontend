import useWindowDimensions from '../../../utils/useWindowDimensions '
import { IconTwoDrinks } from '../../Icons'
import DrinkOpenCard from '../DrinkOpenCard'
import DrinkPayCard from '../DrinkPayCard'
import {Banner} from './style'

export default function DrinkBanner() {
    const {height,width} = useWindowDimensions()

    function renderIcon(){
        if(width>1020)
            return <div>{IconTwoDrinks("30rem","45vh")}</div>
        return <div>{IconTwoDrinks("50vw","45vh")}</div>
    }

    return (
        <Banner>
            <div className='IconContent'> 
                {renderIcon()}
            </div>
            <DrinkOpenCard drinksOpen={6}/>
            <DrinkPayCard drinksCloseds={6}/>
        </Banner>
    )
}
