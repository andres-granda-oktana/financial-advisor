export default function LevelButton (props) {

    const {
        riskLevel,
        setRiskLevel,
        value
    } = props

    let buttonActive = riskLevel===value ? "button levelButton primary" : "button levelButton hollow secondary"
    
    return (
        <div style={{}}>
            <a 
                className={buttonActive} 
                name={value}
                onClick={(e)=>setRiskLevel(e.target.name)}
            >
                {value}
            </a>
        </div>
    )
}