export default function TransfersTableRow (props) {

    const {
        rowTransfers
    } = props

    const labelsMap = {
        "bonds": "Bonds",
        "largeCap": "Large Cap",
        "midCap": "Mid Cap",
        "foreign": "Foreign",
        "smallCap": "Small Cap"
    }

    return (
        <tr>
            <td>
                {rowTransfers?.length>0 ? rowTransfers.map((rowTransfer, index)=>{
                    let result
                    if(index === 0){
                        result = `$${rowTransfer.val} to ${labelsMap[rowTransfer.to]}`;
                    }else{
                        result = ` / $${rowTransfer.val} to ${labelsMap[rowTransfer.to]}`;
                    }
                    return(result)
                }) : ""}
            </td>
        </tr>
    )
}