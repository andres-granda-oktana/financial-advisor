import { useDispatch, useSelector } from "react-redux";
import { setRiskLevelAction } from "../../state/reducers/financialAdvisor"

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
        <div className="container flex-container align-center-middle flex-dir-column">
            <h3 className="riskProfilerTitle">Risk Profiler</h3>
            <div className="flex-container align-center-middle riskProfilerPickerContainer">
                <ActionButton
                    label="CLEAR" 
                    name=""
                    onClick={(e)=>setRiskLevel(e.target.name)} 
                    className="riskProfilerClear"
                />
                <LevelPicker 
                    riskLevel={riskLevel} 
                    setRiskLevel={setRiskLevel}
                />
                <RouteButton
                    label="CONTINUE" 
                    href="/portfolioAdvisor"
                    active={riskLevel}
                    className="riskProfilerContinue" 
                />
            </div>
            <div className="flex-container align-center-middle flex-dir-column large-flex-dir-row">
                <LevelsTable 
                    riskLevel={riskLevel} 
                    setRiskLevel={setRiskLevel}
                />
                {!!riskLevel && 
                    <DonutChart
                        width="370px" 
                        height="370px" 
                        riskLevel={riskLevel}
                    />
                }
            </div>
        </div>
    )
}