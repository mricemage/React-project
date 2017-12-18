import React, { Component } from 'react'
import './Leftscreen.css'
import DropdownMenus from './DropdownMenus'
import CheckBoxes from './CheckBoxes'
import { Scrollbars } from 'react-custom-scrollbars';
import {Row} from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import LocalizedStrings from 'react-localization'

class Leftscreen extends Component {
    constructor(props){
        super(props);
        this.state={
            languagebtn: 'fi',
            color_blackEn: true,
            color_blackFi: false

        };
        this.changeColor = this.changeColor.bind(this);
    }
    

    changeColor(){
        this.setState({color_blackEn: !this.state.color_blackEn,
                        color_blackFi: !this.state.color_blackFi
                    })
    }

    onRadioBtnClick(rSelected) {  
        
        this.changeColor();
        // alert(rSelected);
        console.log(typeof(rSelected));
        // this.setState({languagebtn: rSelected});
        this.setState({languagebtn: rSelected}, function() {
            console.log(this.state.languagebtn);
            this.props.LanguageChange(this.state.languagebtn);
         
        }); 
       
    }



    render () {
        let btnColorEn = this.state.color_blackEn ? "" : "darkblue";
        let btnColorFi = this.state.color_blackFi ? "" : "darkblue";

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

        let strings = new LocalizedStrings ({
            en: {
                Language:"Language"
               
            },
            fi: {
                Language:"Kieli"
            }
        });
     
       
            strings.setLanguage(this.state.languagebtn);   
         

        return (
            <div className= "content">
             
             <Row>
             {strings.Language}:&nbsp;&nbsp;&nbsp;
                        <ButtonGroup className="right">
                            <Button color="primary" style={{backgroundColor: btnColorFi}} onClick={() => this.onRadioBtnClick('fi')} active={this.state.rSelected === 1}>Fi</Button>
                            <Button color="primary" style={{backgroundColor: btnColorEn}} onClick={() => this.onRadioBtnClick('en')} active={this.state.rSelected === 2}>En</Button>
                         
                        </ButtonGroup>
                </Row>

                <Scrollbars
                autoHeight
                autoHeightMin={500}
                autoHeightMax={900}
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
                        setscenarioId = {this.props.setscenarioId} //Set scenarioId for the charts
                        settimePeriodId = {this.props.settimePeriodId} //Set timePeriodId for the charts
                        setindicatorId = {this.props.setindicatorId}
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