import React, { Component } from 'react'
import './Leftscreen.css'
import DropdownMenus from './DropdownMenus'
import CheckBoxes from './CheckBoxes'
import { Scrollbars } from 'react-custom-scrollbars';

class Leftscreen extends Component {



    render () {
        var width2 =Element.offsetWidth; // https://www.w3schools.com/jsref/prop_element_offsetwidth.asp Its getting the width of an element in pixels

        const regionalLevels = this.props.regionalLevels;
        const regions = this.props.regions;
        const scenarioCollection = this.props.scenarioCollection;
        const scenarios = this.props.scenarios;
        const timestamp = this.props.timestamp;
        
        return (
            <div className= "content">
                <Scrollbars
                autoHeight
                autoHeightMin={500}
                autoHeightMax={1200}
                style={{ width: width2  }}
                >   
            <DropdownMenus regionalLevels ={regionalLevels} 
                           regions = {regions}
                           scenarioCollection = {scenarioCollection}
                           scenarios = {scenarios}
                           setRegionLevels = {this.props.setRegionLevels}
                           getRegion = {this.props.getRegion}
                           setRegion = {this.props.setRegion}
                           getScenarioCollection = {this.props.getScenarioCollection}
                           getScenarios = {this.props.getScenarios}
                           setScenarioCollection = {this.props.setScenarioCollection}
                           getTimePeriods = {this.props.getTimePeriods}
                           />
            <CheckBoxes getScenarios = {this.props.getScenarios}
                        getTimePeriods = {this.props.getTimePeriods}
                        scenarios = {scenarios}
                        timestamp = {timestamp}/>
            </Scrollbars>  
            </div>
        )
    }
}

export default Leftscreen