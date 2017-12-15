import React, { Component } from 'react'
import {Table} from 'reactstrap';
const ReactHighCharts = require('react-highcharts')

class Graphs extends Component {
    constructor(props){
        super(props);
       
      }
    

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
            
            <div className="graph" id="graph">
            <table id="table">
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
                <ReactHighCharts config = {config}></ReactHighCharts>
                
                  
               
            </div>

        )
    }
}

export default Graphs