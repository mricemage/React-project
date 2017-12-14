import React, { Component } from 'react'
import { UncontrolledButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LocalizedStrings from 'react-localization'
import { Tooltip } from 'reactstrap'




class DropdownMenus extends Component {
    constructor(props){
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.regionalLevels = this.regionalLevels.bind(this);
        this.regions = this.regions.bind(this);
        this.scenarioCollection = this.scenarioCollection.bind(this);
        this.checklanguage = this.checklanguage.bind(this);

        this.state = {
        dropdownOpen: false,
        tooptipOpen:false,
        items: [],
        regionalLevels: "Aluetaso",
        regions:"Select regions",
        scenarioCollection:"Select scenario Collection",

        regionalLevels: this.props.regionalLevels[0].name,
        regions:this.props.regions[0].name,
        scenarioCollection:this.props.scenarioCollection[0].name

        };
    
}

toggle(event) {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        tooltipOpen: !this.state.tooltipOpen
    });
}

regionalLevels(e){
    console.log(this.props.regionalLevels)
    this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        regionalLevels: e.currentTarget.textContent,
        regions: "Select regions",
        scenarioCollection:"Select scenario Collection"
       
    });
    console.log(e.currentTarget.id);
    this.props.setRegionLevels(e.currentTarget.id);
    this.props.getRegion();
}

regions(e){
    this.setState({
       
        regions: e.currentTarget.textContent,
        scenarioCollection: 'Select scenario Collection'
    });
    this.props.setRegion(e.currentTarget.id);
    this.props.getScenarioCollection();
}

scenarioCollection(e){
    this.setState({
        scenarioCollection: e.currentTarget.textContent
    })
    this.props.setScenarioCollection(e.currentTarget.id);
    console.log(e.currentTarget.id)
    this.props.getScenarios();
    this.props.getTimePeriods();
    this.props.getIndicatorCategories();
    this.props.getWoodProduction();
    this.props.getBiodiversity()
    this.props.getNaturalProducts()
    this.props.getCarbon();
    this.props.getOthers();
}

checklanguage() {
    this.setState = ({
        regionalLevels: this.props.regionalLevels[0].name,
        regions:this.props.regions[0].name,
        scenarioCollection:this.props.scenarioCollection[0].name
    });
}

 render () {
  
   const languagebtn = this.props.languagebtn;

    let strings = new LocalizedStrings ({
        en: {
            ScenarioSelection:"Scenario Collection",
            ForestryCenters:"Forestry Centers",
            Area:"Area",
            ScenarioCollection:"Scenario Collection",
            Period:"Time",
            IndicatorSelection:"Indicator Selection",
            ProductCollections:"Product Collections",
            Diversity:"Diversity",
            Carbon:"Carbon",
            Other:"Other"
        },
        fi: {
            ScenarioSelection:"Skenarrioiden valinta",
            ForestryCenters:"Aluetaso",
            Area:"Alue",
            ScenarioCollection:"Skenaariokokoelma",
            Period:"Ajankohta",
            IndicatorSelection:"Indikaattoreiden valinta",
            ProductCollections:"Keruutuotteet",
            Diversity:"Monimuotoisuus",
            Carbon:"Hiili",
            Other:"Muut"
        }
    });

    strings.setLanguage(languagebtn);   

        return (
           <div>
               
               
               <label> {strings.ScenarioSelection} </label>
               <br />
               <label> {strings.ForestryCenters} </label>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
            {this.state.regionalLevels}
            </DropdownToggle>
            <DropdownMenu>
                {    
                    this.props.regionalLevels.map( element => 
                        <DropdownItem onClick = {this.regionalLevels} id={element.id}> { element.name } </DropdownItem>
                        )
                    
                }   
            </DropdownMenu>
        </Dropdown>

        <label> {strings.Area}</label>
        <br/>
        <UncontrolledButtonDropdown>
            <DropdownToggle caret>
            {this.state.regions}
            </DropdownToggle>
        <DropdownMenu>
          {
              this.props.regions.map(element =>
            <DropdownItem onClick= {this.regions} id={element.id}>{ element.name }</DropdownItem>)
          }
        </DropdownMenu>
      </UncontrolledButtonDropdown> 

        <br/>
      <label> {strings.ScenarioCollection}</label>
        <br/>
        <UncontrolledButtonDropdown>
            <DropdownToggle caret>
           {this.state.scenarioCollection}
            </DropdownToggle>
        <DropdownMenu>
        {
              this.props.scenarioCollection.map(element =>
            <DropdownItem onClick= {this.scenarioCollection} id={element.id}>{ element.name }</DropdownItem>)
          }
        </DropdownMenu>
      </UncontrolledButtonDropdown> 
        
       
       {this.checklanguage}
        </div>
        )
    }
}



export default DropdownMenus