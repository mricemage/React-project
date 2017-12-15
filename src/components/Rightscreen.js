import React, { Component } from 'react'
import './Rightscreen.css'
import Header from './Header'
import Graph from './Graphs'

class Rightscreen extends Component {
    render () {

        const graphData = this.props.graphData;

        return (
            <div className= 'content'>
                <Header/> <br /> <br />
                <Graph graphData = {graphData}
                       getGraphData = {this.props.getGraphData}/>
            </div>
        )
    }
}

export default Rightscreen