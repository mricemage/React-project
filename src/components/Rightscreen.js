import React, { Component } from 'react'
import './Rightscreen.css'
import Header from './Header'
import Graph from './Graphs'


class Rightscreen extends Component {

    
    render () {


        const graphData = this.props.graphData;
        const nameofIndicator = this.props.nameofIndicator;
        console.log(nameofIndicator, "RightScreenName")
        return (
            <div className= 'content'>
                <Header/> <br /> <br />
                <Graph graphData = {graphData}
                       getGraphData = {this.props.getGraphData}
                       nameofIndicator = {nameofIndicator}/>

            </div>
        )
    }
}

export default Rightscreen