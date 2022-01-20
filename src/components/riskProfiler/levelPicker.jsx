import LevelButton from "./levelButton"
import riskLevelsData from "../../constants/riskLevelsData.json"

export default function LevelPicker (props){

    const {
        riskLevel,
        setRiskLevel
    } = props

    return(
        <div className="flex-container align-center-middle flex-dir-column large-flex-dir-row riskProfilerLevelPicker show-for-large">
            {riskLevelsData.map((item, index)=>{
                return(
                    <LevelButton
                        key={index}
                        riskLevel={riskLevel} 
                        setRiskLevel={setRiskLevel} 
                        value={item.risk}
                    />
                )
            })}
        </div>
    )
}