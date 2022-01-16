import useWindowDimensions from '../../../utils/useWindowDimensions '
import { IconTwoDrinks } from '../../Icons'
import DrinkOpenCard from '../DrinkOpenCard'
import {Banner} from './style'

export default function DrinkBanner() {
    const {height,width} = useWindowDimensions()

    function renderIcon(){
        if(width>1053)
            return <div>{IconTwoDrinks("30rem","45vh")}</div>
        return <div>{IconTwoDrinks("50vw","20vh")}</div>
    }

    return (
        <Banner>
            {renderIcon()}
            <DrinkOpenCard drinksOpen={6}/>
        </Banner>
    )
}
