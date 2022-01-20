import TransfersTableRow from "./transfersTableRow"

export default function TransfersTable (props) {

    const { transfers } = props

    const bondsTransfers     = transfers?.filter((transfers)=>transfers.from === "bonds")
    const largeCapTransfers  = transfers?.filter((transfers)=>transfers.from === "largeCap")
    const midCapTransfers    = transfers?.filter((transfers)=>transfers.from === "midCap")
    const foreignTransfers   = transfers?.filter((transfers)=>transfers.from === "foreign")
    const smallCapTransfers  = transfers?.filter((transfers)=>transfers.from === "smallCap")

    return(
        <table className="unstriped text-left transfersTable show-for-large">
            <thead>
                <tr>
                    <th>Transfers</th>
                </tr>
            </thead>
            <tbody>
                <TransfersTableRow rowTransfers={bondsTransfers}/>
                <TransfersTableRow rowTransfers={largeCapTransfers}/>
                <TransfersTableRow rowTransfers={midCapTransfers}/>
                <TransfersTableRow rowTransfers={foreignTransfers}/>
                <TransfersTableRow rowTransfers={smallCapTransfers}/>
            </tbody>
        </table>            
    )
}