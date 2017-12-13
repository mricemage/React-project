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
        const indicatorCategories = this.props.indicatorCategories;
        const woodproduction = this.props.woodproduction;
        const biodiversity = this.props.biodiversity;
        const naturalproducts = this.props.naturalproducts;
        const carbon = this.props.carbon;
        const others = this.props.others;


        return (
            <div className= "content">
                <Scrollbars
                autoHeight
                autoHeightMin={500}
                autoHeightMax={1200}
                style={{ width: width2  }}
                color={props => <div {...props} className="scrollbar-color" />}
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
                           getIndicatorCategories = {this.props.getIndicatorCategories}
                           getWoodProduction = {this.props.getWoodProduction}
                           getBiodiversity = {this.props.getBiodiversity}
                           getNaturalProducts = {this.props.getNaturalProducts}
                           getCarbon = {this.props.getCarbon}
                           getOthers = {this.props.getOthers}
                           />
            <CheckBoxes scenarios = {scenarios}
                        timestamp = {timestamp}
                        indicatorCategories = {indicatorCategories}
                        woodproduction = {woodproduction}
                        biodiversity = {biodiversity}
                        naturalproducts = {naturalproducts}
                        carbon = {carbon}
                        others = {others}
                        getScenarios = {this.props.getScenarios}
                        getTimePeriods = {this.props.getTimePeriods}
                        
                        />
            </Scrollbars>  
            </div>
        )
    }
}

export default Leftscreen