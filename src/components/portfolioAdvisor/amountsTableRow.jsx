export default function AmountsTableRow (props) {
    
    const {
        type,
        amount,
        newAmount,
        difference,
        handleInput
    } = props

    const inputDifference = !difference ? "" : difference > 0 ? "inputDifferencePositive" : "inputDifferenceNegative"

    return (
        <tr key={1} style={{cursor:"pointer"}}>
            <td>{type}</td>
            <td><input autoComplete="chrome-off" name={amount.name} value={amount.value} onChange={(e)=>handleInput(e.target.name, e.target.value)}/></td>
            <td><input value={newAmount} disabled/></td>
            <td><input value={difference} disabled className={inputDifference}/></td>
        </tr>
)
}