import riskLevelsData from "../../constants/riskLevelsData.json"

export default function LevelsTable (props) {

    const {
        riskLevel,
        setRiskLevel
    } = props

    return(
        <table className="hover unstriped text-center">
            <thead>
                <tr>
                    <th>Risk</th>
                    <th>Bonds %</th>
                    <th>Large Cap %</th>
                    <th>Mid Cap %</th>
                    <th>Foreign %</th>
                    <th>Small Cap %</th>
                </tr>
            </thead>
            <tbody>
                {riskLevelsData.map((level,i)=>{
                    
                    const rowLevelClass = level.risk===riskLevel ? "riskProfilerLevelsTableRow riskProfilerLevelsTableRow-active" : "riskProfilerLevelsTableRow" 

                    return(
                        <tr 
                            key={i+1} 
                            onClick={(e)=>setRiskLevel(level.risk)}
                            className={rowLevelClass}
                        >
                            <td>{level.risk}</td>
                            <td>{level.bonds}</td>
                            <td>{level.largeCap}</td>
                            <td>{level.midCap}</td>
                            <td>{level.foreign}</td>
                            <td>{level.smallCap}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>            
    )
}