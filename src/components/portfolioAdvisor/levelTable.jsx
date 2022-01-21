export default function LevelTable (props) {

    const {
        riskLevelData
    } = props

    return(
        <table className="hover unstriped text-center levelTable">
            <thead>
                <tr>
                    <th>Bonds %</th>
                    <th>Large Cap %</th>
                    <th>Mid Cap %</th>
                    <th>Foreign %</th>
                    <th>Small Cap %</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{riskLevelData.bonds}</td>
                    <td>{riskLevelData.largeCap}</td>
                    <td>{riskLevelData.midCap}</td>
                    <td>{riskLevelData.foreign}</td>
                    <td>{riskLevelData.smallCap}</td>
                </tr>
            </tbody>
        </table>            
    )
}