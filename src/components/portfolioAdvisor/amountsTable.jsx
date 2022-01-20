import AmountsTableRow from "./amountsTableRow"

export default function AmountsTable (props) {

    const {
        amounts,
        newAmounts,
        differences,
        handleInput
    } = props

    const tableData = [
        {
            type: "Bonds $:",
            amount: {
                name: "bonds",
                value: amounts.bonds
            },
            newAmount: newAmounts.bonds,
            difference: differences.bonds
        },
        {
            type: "Large Cap $:",
            amount: {
                name: "largeCap",
                value: amounts.largeCap
            },
            newAmount: newAmounts.largeCap,
            difference: differences.largeCap
        },
        {
            type: "Mid Cap $:",
            amount: {
                name: "midCap",
                value: amounts.midCap
            },
            newAmount: newAmounts.midCap,
            difference: differences.midCap
        },
        {
            type: "Foreign $:",
            amount: {
                name: "foreign",
                value: amounts.foreign
            },
            newAmount: newAmounts.foreign,
            difference: differences.foreign
        },
        {
            type: "Small Cap $:",
            amount: {
                name: "smallCap",
                value: amounts.smallCap
            },
            newAmount: newAmounts.smallCap,
            difference: differences.smallCap
        },
    ]

    return(
        <table className="unstriped text-left amountsTable">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>New Amount</th>
                    <th>Difference</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, index)=>{
                    return(
                        <AmountsTableRow 
                            key={index}
                            type={item.type}
                            amount={item.amount}
                            newAmount={item.newAmount}
                            difference={item.difference}
                            handleInput={handleInput}
                        />
                    )
                })}
            </tbody>
        </table>            
    )
}