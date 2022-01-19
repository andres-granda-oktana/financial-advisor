import { Chart } from "react-google-charts";
import riskLevelsData from "../../constants/riskLevelsData.json"

export default function DonutChart (props) {
    
    const {
        riskLevel,
        width,
        height
    } = props

    const dataSample = [
        ["Type", "Percentage"],
        ["Bonds", 0.4],
        ["Large Cap", 0.2],
        ["Mid Cap", 0.2],
        ["Foreign", 0.2],
        ["Small Cap", 0],
    ];
    
    let riskLevelData = [
        ["Type", "Percentage"],
        ["Bonds", riskLevelsData[riskLevel-1]?.bonds],
        ["Large Cap", riskLevelsData[riskLevel-1]?.largeCap],
        ["Mid Cap", riskLevelsData[riskLevel-1]?.midCap],
        ["Foreign", riskLevelsData[riskLevel-1]?.foreign],
        ["Small Cap", riskLevelsData[riskLevel-1]?.smallCap],
    ]

    const options = {
        colors: ['#0099C6','#DC3912','#FF9900','#109618','#990099'],
        tooltip: {
            text: 'percentage', //both/value/percentage
            trigger: "focus", //focus/none/selection
            showColorCode: false, 
            ignoreBounds: true,
            isHtml: false
        },
        pieHole: 0.3,
        is3D: false,
        enableInteractivity: true,
        pieSliceText: "label", //percentage/value/label/none
        chartArea: {
            left:'17%',
            top: '17%', //give space when use title or legend on top
            width:'66%',
            height:'66%'},
        fontSize: 14,
        fontName: "Arial",
        legend: {
            position: 'none', //bottom/labeled/left/none/right/top
            alignment: 'center', //start/center/end
            textStyle: {color: 'black', fontSize: 16}
        },
    };
      
    const chartEvents = [
        {
            eventName: "select",
            callback({ chartWrapper }) {
                    chartWrapper.getChart().setSelection(0);
            }
        }
    ];

    return(
        <Chart
            chartType="PieChart"
            width={width} //Default: width of the containing element
            height={height} //Default: height of the containing element
            data={riskLevelData}
            options={options}
            chartEvents={chartEvents}
      />
    )
}