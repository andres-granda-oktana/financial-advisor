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
    
    function calculateTransfersArray () {

        if(transfers){
            const data = [
                ["From", "To", "Amount"]
              ];
               
            let transfersTemp

            transfersTemp = transfers?.map(t => t.from === 'bonds' ? { ...t, from: 'Bonds' } : t );
            transfersTemp = transfersTemp?.map(t => t.from === 'largeCap' ? { ...t, from: 'Large Cap' } : t );
            transfersTemp = transfersTemp?.map(t => t.from === 'midCap' ? { ...t, from: 'Mid Cap' } : t );
            transfersTemp = transfersTemp?.map(t => t.from === 'foreign' ? { ...t, from: 'Foreign' } : t );
            transfersTemp = transfersTemp?.map(t => t.from === 'smallCap' ? { ...t, from: 'Small Cap' } : t );

            transfersTemp = transfersTemp?.map(t => t.to === 'bonds' ? { ...t, to: 'Bonds' } : t );
            transfersTemp = transfersTemp?.map(t => t.to === 'largeCap' ? { ...t, to: 'Large Cap' } : t );
            transfersTemp = transfersTemp?.map(t => t.to === 'midCap' ? { ...t, to: 'Mid Cap' } : t );
            transfersTemp = transfersTemp?.map(t => t.to === 'foreign' ? { ...t, to: 'Foreign' } : t );
            transfersTemp = transfersTemp?.map(t => t.to === 'smallCap' ? { ...t, to: 'Small Cap' } : t );

            transfersTemp?.map((item, index)=>{
                data.push(Object.values(item));
            });

            setChartData(data);
        }
    }

    useEffect(()=>{
        calculateTransfersArray();
    },[transfers]) // eslint-disable-line react-hooks/exhaustive-deps
      
    return (
        <table className="unstriped text-left transfersChart">
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