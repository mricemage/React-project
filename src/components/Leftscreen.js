import React, { Component } from 'react'
import './Leftscreen.css'
import DropdownMenus from './DropdownMenus'
import CheckBoxes from './CheckBoxes'
import { Scrollbars } from 'react-custom-scrollbars';

import {Row} from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';

class Leftscreen extends Component {

    constructor(props){
        super(props);
        this.state={
            languagebtn: ''
        };
        // this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        
       
    }

    onRadioBtnClick(rSelected) {
        alert(rSelected);
        console.log(typeof(rSelected));
        // this.setState({languagebtn: rSelected});
        this.setState({languagebtn: rSelected}, function() {
            console.log(this.state.languagebtn);
        });
        
      }


    render () {
        var width2 =Element.offsetWidth; // https://www.w3schools.com/jsref/prop_element_offsetwidth.asp Its getting the width of an element in pixels

        const regionalLevels = this.props.regionalLevels;
        const regions = this.props.regions;
        const scenarioCollection = this.props.scenarioCollection;
        const scenarios = this.props.scenarios;
        const timestamp = this.props.timestamp;

        // const languagebtn = this.props.languagebtn;
        
        return (
            <div className= "content">
             <Row>
                    <h5>Metsämittari</h5>
                        <ButtonGroup className="righttop">
                            <Button color="primary" onClick={() => this.onRadioBtnClick('fi')} active={this.state.rSelected === 1}>Fi</Button>
                            <Button color="primary" onClick={() => this.onRadioBtnClick('en')} active={this.state.rSelected === 2}>En</Button>
                         
                        </ButtonGroup>
                </Row>

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
                           languagebtn = { this.state.languagebtn }
                           
                         
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