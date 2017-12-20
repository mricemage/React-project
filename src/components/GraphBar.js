import React, { Component } from 'react'
const ReactHighCharts = require('react-highcharts')

class GraphBar extends Component {
    render () {
        let processedGraphData = this.props.graphData; 
        let nameofIndicator = this.props.nameofIndicator;

        //
        // Next code will be messy and bad because lack of time
        // I didn't have time to make better parsing functions and cleaner code
        // Also there is some bugs because I would have to study and change other project members codes
        //

        var data ={name: "",data: []};
        var indicatorData = [];
        var indicatorNames = [];
        var isNameInArray = false;

        //Not the best parsing because lack of time
        //Check if there is already same indicator in array
        for (var i = 0; i < nameofIndicator.length; i++){
            console.log(nameofIndicator[i]);
            isNameInArray = false;
            for(var j = 0; j < indicatorNames.length; j++){
                console.log(indicatorNames[j]);
                if(indicatorNames[j] === nameofIndicator[i]){
                    isNameInArray = true;
                }
            }
            if(!isNameInArray){
                indicatorNames.push(nameofIndicator[i]);
            }
        }
        console.log(indicatorNames);

        for (var i = processedGraphData.length; --i>=0;){
            data.name = "scenarioName";
            data.data.push(processedGraphData[i]);
        }
        indicatorData.push(data);

        const config = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Graph data'
            },
            subtitle: {
                text: 'You can select only one scenario'
            },
            xAxis: {
                categories: indicatorNames
                /*[
                    'Jan',
                    'Feb'
                ]*/,
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: indicatorData
        }

        return (
            <div id="graph">
                <ReactHighCharts config = {config}></ReactHighCharts>
            </div>
        )
    }
}

export default GraphBar