export default function TransfersTableRow (props) {

    const {
        rowTransfers
    } = props

    return (
        <tr style={{cursor:"pointer"}}>
            <td>
                {rowTransfers?.length>0 ? rowTransfers.map((rowTransfer, index)=>{
                    let result
                    if(index === 0){
                        result = `$${rowTransfer.val} to ${rowTransfer.to}`;
                    }else{
                        result = ` / $${rowTransfer.val} to ${rowTransfer.to}`;
                    }
                    return(result)
                }) : ""}
            </td>
        </tr>
    )
}