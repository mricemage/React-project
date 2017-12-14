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

    onRadioBtnClick(rSelected, counter) {
        alert(rSelected);
        console.log(typeof(rSelected));
        // this.setState({languagebtn: rSelected});
        this.setState({languagebtn: rSelected}, function() {
            console.log(this.state.languagebtn);
            this.props.LanguageChange(this.state.languagebtn);
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

        const indicatorCategories = this.props.indicatorCategories;
        const woodproduction = this.props.woodproduction;
        const biodiversity = this.props.biodiversity;
        const naturalproducts = this.props.naturalproducts;
        const carbon = this.props.carbon;
        const others = this.props.others;

        return (
            <div className= "content">
             <Row>
                    <h5>Metsämittari</h5>
                        <ButtonGroup className="righttop">
                            <Button color="primary" onClick={() => this.onRadioBtnClick('fi', 1)} active={this.state.rSelected === 1}>Fi</Button>
                            <Button color="primary" onClick={() => this.onRadioBtnClick('en', 1)} active={this.state.rSelected === 2}>En</Button>
                         
                        </ButtonGroup>
                </Row>

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
                           languagebtn = { this.state.languagebtn }
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
                        languagebtn = { this.state.languagebtn }
                        
                        />
            </Scrollbars>  
            </div>
        )
    }
}

export default Leftscreen