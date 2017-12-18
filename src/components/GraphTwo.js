import React, {Component} from 'react'
import {Table} from 'reactstrap';
const ReactHighCharts = require('react-highcharts')



class GraphTwo extends Component {

   
   


    render() {
         let processedGraphData = this.props.graphData;

         const data = { data: processedGraphData

         }
        

        const config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Result 2'
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
                name: 'Brands',
                colorByPoint: true,
                data: processedGraphData
            }]
        };
 

    return (
        <div id="graph">
            <ReactHighCharts config = {config}></ReactHighCharts>
           
           <div id="tableplace">
           </div>

        </div>
      
    )

};
}


export default GraphTwo;