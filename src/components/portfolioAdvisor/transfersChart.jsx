import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export default function TransfersChart (props) {

    const { transfers } = props

    const [chartData, setChartData] = useState();
      
    const options = {
      sankey: {
        node: {
          colors: ['#0099C6','#DC3912','#FF9900','#109618','#990099']
        },
      }
    };

    const labelsMap = {
        "bonds": "Bonds",
        "largeCap": "Large Cap",
        "midCap": "Mid Cap",
        "foreign": "Foreign",
        "smallCap": "Small Cap"
    }
    
    function calculateTransfersArray () {

        if(transfers){
            const data = [
                ["From", "To", "Amount"]
            ];
               
            transfers?.map((item, index)=>{
                data.push([labelsMap[item.from], labelsMap[item.to], item.val]);
            });

            setChartData(data);
        }
    }

    useEffect(()=>{
        calculateTransfersArray();
    },[transfers]) // eslint-disable-line react-hooks/exhaustive-deps
      
    return (
        <table className="unstriped transfersChart">
            <thead>
                <tr>
                    <th>Transfers Chart</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Chart
                            chartType="Sankey"
                            width="100%"
                            height="100%"
                            data={chartData}
                            options={options}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}