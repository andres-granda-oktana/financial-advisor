import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LevelTable from "./levelTable";
import AmountsTable from "./amountsTable";
import TransfersTable from "./transfersTable";
import { calculatePortfolioTransfers, validateNumericInput } from "../../utils/portfolioAdvisorCalculator";
import ActionButton from "../common/actionButton";
import { setAmountsAction } from "../../state/actions/financialAdvisor";
import TransfersChart from "./transfersChart";
import RouteButton from "../common/routeButton";

export default function PortfolioAdvisor(){

    const dispatch = useDispatch();

    const {
        riskLevel, 
        riskLevelData, 
        amounts
    } = useSelector((store) => store.financialAdvisor);

    const initData = {
        bonds: "",
        largeCap: "",
        midCap: "",
        foreign: "",
        smallCap: ""
    }

    const [newAmounts, setNewAmounts] = useState(initData);
    const [differences, setDifferences] = useState(initData);
    const [transfers, setTransfers] = useState();

    function handleInput(name, newValue){
        let isValid = validateNumericInput(newValue)
        if(isValid){
            dispatch(setAmountsAction({...amounts, [name]: newValue}));
        }
    }

    function handleClear () {
        dispatch(setAmountsAction(initData));
        setNewAmounts(initData);
        setDifferences(initData);
        setTransfers();
    }

    let isCalculateEnabled =    amounts.bonds &&
                                amounts.largeCap &&
                                amounts.midCap &&
                                amounts.foreign &&
                                amounts.smallCap;

    function handleCalculate () {

        if(isCalculateEnabled){
        
            const{
                newAmounts,
                differences,
                transfers
            } = calculatePortfolioTransfers(amounts, riskLevelData);
                
            setNewAmounts(newAmounts)
            setDifferences(differences)
            setTransfers(transfers);

        }
    }

    return (

        <div className="container flex-container align-center-middle flex-dir-column">

            <h3 style={{paddingBottom:"1ch"}}>Portfolio Advisor</h3>
            <h4 style={{paddingBottom:"1ch"}}>Risk Level: {riskLevel}</h4>

            <LevelTable riskLevel={riskLevel} riskLevelData={riskLevelData}/>

            <h4 style={{paddingTop:"2ch", paddingBottom:"1ch"}}>Enter current portfolio:</h4>

            <div className="flex-container align-center-middle flex-dir-column large-flex-dir-row">
                <AmountsTable
                    amounts={amounts}
                    newAmounts={newAmounts}
                    differences={differences}
                    handleInput={handleInput}
                />
                {!!transfers?.length && <TransfersTable transfers={transfers}/>}        
                {!!transfers?.length && <TransfersChart transfers={transfers}/>}        
                
            </div>

            <div className="flex-container align-center-middle">
                <RouteButton
                    label="HOME"
                    href="/riskProfiler"
                    className="homePortfolioAdvisor"
                />
                <ActionButton
                    label="CLEAR"
                    onClick={handleClear}
                    className="clearPortfolioAdvisor"
                />
                <ActionButton 
                    label="CALCULATE"
                    onClick={handleCalculate}
                    active={isCalculateEnabled}
                    className="calculateButton"
                />
            </div>

        </div>
    )
}