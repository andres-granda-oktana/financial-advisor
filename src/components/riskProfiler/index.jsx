import { useDispatch, useSelector } from "react-redux";
import { setRiskLevelAction } from "../../state/actions/financialAdvisor"

import ActionButton from "../common/actionButton";
import LevelPicker from "./levelPicker"
import RouteButton from "../common/routeButton";
import LevelsTable from "./levelsTable"
import DonutChart from "./donutChart";

export default function RiskProfiler(){

    const dispatch = useDispatch();
    const {riskLevel} = useSelector((store) => store.financialAdvisor);

    function setRiskLevel (riskLevel) {
        dispatch(setRiskLevelAction(riskLevel));
    }

    return (
        <div className="grid-y align-middle">
            <h3 style={{paddingBottom:"1ch"}}>Risk Profiler</h3>

            <div className="grid-x" style={{paddingBottom:"1ch"}}>
                <ActionButton 
                    label="CLEAR" 
                    name=""
                    onClick={(e)=>setRiskLevel(e.target.name)} 
                    className="clearRiskProfiler"
                />
                <LevelPicker 
                    riskLevel={riskLevel} 
                    setRiskLevel={setRiskLevel}
                />
                <RouteButton
                    label="CONTINUE" 
                    href="/portfolioAdvisor"
                    active={riskLevel}
                    className="continueButton" 
                />
            </div>
            
            <div className="grid-x align-middle">
                <LevelsTable 
                    riskLevel={riskLevel} 
                    setRiskLevel={setRiskLevel}
                />
                {!!riskLevel && 
                    <DonutChart 
                        width="400px" 
                        height="400px" 
                        riskLevel={riskLevel}
                    />
                }
            </div>
        </div>
    )
}