import { Drink } from '../../../models/types'
import {TableContainer} from './style'

type ClosedDrinkTableProps = {
    drinks:Drink[]
}

export default function ClosedDrinkTable(props:ClosedDrinkTableProps) {
    const {drinks} = props
    return (
        <TableContainer>
            <h1 className='TitleTable' style={{alignSelf:'start',margin:'4px'}}>Em Aberto</h1>
            <table>
                <tr className='HeaderTable'>
                    <th style={{textAlign:'start',wordBreak:'break-word'}}>Descrição</th>
                    <th style={{textAlign:'end',width:'10%'}}>Paga em</th>
                    <th style={{textAlign:'end',width:'10%'}}>Criação</th>
                </tr>
                {
                    drinks.map((drink,i)=>{
                        return(
                            <tr key={drink.created+i}>
                                <td style={{textAlign:'start'}} >{drink.description}</td>
                                <td style={{textAlign:'end'}}>{drink.paidDate}</td>
                                <td style={{textAlign:'end'}}>{drink.created}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </TableContainer>
    )
}
