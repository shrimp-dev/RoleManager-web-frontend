import { Drink } from '../../../models/types'
import {TableContainer} from './style'

type OpenDrinkTableProps = {
    drinks:Drink[]
}

export default function OpenDrinkTable(props:OpenDrinkTableProps) {
    const {drinks} = props
    return (
        <TableContainer>
            <h1 className='TitleTable' style={{alignSelf:'start',margin:'4px'}}>Em Aberto</h1>
            <table>
                <tr className='HeaderTable'>
                    <th style={{textAlign:'start'}}>Descrição</th>
                    <th style={{textAlign:'end'}}>Criação</th>
                </tr>
                {
                    drinks.map((drink,i)=>{
                        return(
                            <tr key={drink.created+i}>
                                <td style={{textAlign:'start'}} >{drink.description}</td>
                                <td style={{textAlign:'end'}}>{drink.created}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </TableContainer>
    )
}
