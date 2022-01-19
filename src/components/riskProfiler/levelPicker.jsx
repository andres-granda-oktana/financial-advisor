import LevelButton from "./levelButton"
import riskLevelsData from "../../constants/riskLevelsData.json"

export default function LevelPicker (props){

    const {
        riskLevel,
        setRiskLevel
    } = props

    return(
        <>
            {riskLevelsData.map((item, index)=>{
                return(
                    <LevelButton
                        key={"levelButton"+index}
                        riskLevel={riskLevel} 
                        setRiskLevel={setRiskLevel} 
                        value={item.risk}
                    />
                )
            })}
        </>
    )
}