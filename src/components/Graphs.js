import React, {Component} from 'react'
const ReactHighCharts = require('react-highcharts')


class Graphs extends Component {


    render() {
         let processedGraphData = this.props.graphData;
        

        const config = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Result'
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
        <div>
        <ReactHighCharts config = {config}></ReactHighCharts>
        </div>
    )

};
}


export default Graphs;