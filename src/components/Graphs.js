import React, { Component } from 'react'
const ReactHighCharts = require('react-highcharts')

class Graphs extends Component {
    render () {

        const config = {chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Mikä tekee ihmisestä hullun'
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
                        //color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        color : 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Javascript',
                y: 56.33
            }, {
                name: 'Laiteläheinen',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Projektit',
                y: 10.38
            }, {
                name: 'Traumat',
                y: 4.77
            }, {
                name: 'Väkivalta',
                y: 0.91
            }, {
                name: 'Other',
                y: 0.2
            }]
        }]
    };

        return (
            <div className="graph">
                <ReactHighCharts config = {config}></ReactHighCharts>
            </div>
        )
    }
}

export default Graphs