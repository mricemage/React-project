import React, {Component} from 'react'
const ReactHighCharts = require('react-highcharts')
    

class Graphs extends Component {
    

    render() {
         let processedGraphData = this.props.graphData;
         let nameofIndicator = this.props.nameofIndicator;
         let nameofScenario = this.props.nameofScenario;
         console.log(nameofIndicator, "NameOfIndicator , Graphs")
         console.log(nameofScenario)
         
         var dataForGraphs = [];
         for(var i=0; i<processedGraphData.length; i++)
         {
         {
             dataForGraphs.push({
                 title: nameofScenario[0],
                 name: nameofIndicator[i],
                 y: processedGraphData[i]
             });
             console.log(dataForGraphs, "GraphModule-data")

         }
        }

        const config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: nameofScenario[0]
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                name: "Percentage",
                colorByPoint: true,
                data: dataForGraphs
            }]
        };
 

    return (
        <div id="graph">
            <ReactHighCharts config = {config}></ReactHighCharts>
           
           
           

        </div>
      
    )

};
}


export default Graphs;

