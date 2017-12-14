import React, { Component } from 'react'
import { UncontrolledButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LocalizedStrings from 'react-localization'
import ForestIndicatorData from './ForestIndicatorData'




class DropdownMenus extends Component {
    constructor(props){
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.regionalLevels = this.regionalLevels.bind(this);
        this.regions = this.regions.bind(this);
        this.scenarioCollection = this.scenarioCollection.bind(this);
        // this.languagechanger = this.languagechanger.bind(this);
        // this.changeLanguage = this.changeLanguage.bind(this);
       

        this.state = {
        dropdownOpen: false,
        items: [],
        regionalLevels: "Aluetaso",
        regions:"Select regions",
        scenarioCollection:"Select scenario Collection",
        // languagebtn: ''
        };
    
}

toggle(event) {
    this.setState({
        dropdownOpen: !this.state.dropdownOpen,
    });
}

regionalLevels(e){
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
}




// _onSetLanguageToItalian() {
//     strings.setLanguage(this.state.languagebtn);
//     this.setState({});
//   }

// changeLanguage(){
//     alert("Hello world");

    

    //    this.setState({languagebtn: rSelected});
        //     this.setState({});
        
        // let language = this.props.onRadioBtnClick();
      
      

// onRadioBtnClick(number) {
    
// if (number === 1 ) {

//     strings.setLanguage('fi');
//     this.setState({});
// }
// }






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


    // console.log(this.state.languagebtn, "DropdownMenus");

    // function changeLanguage(languagebtn) {
    //     alert("Hello", languagebtn);
    //     strings.setLanguage(languagebtn);
    //     console.log(this.state.languagebtn, "DropdownMenus");

    //     this.props.onRadioBtnClick();
    //     // this.setState({languagebtn }, function() {
            
    //     // });
        
    // }

   



//    strings.setLanguage(this.state.languagebtn);

//    console.log(this.state.languagebtn);
    
    
   
      
   

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
                        <DropdownItem onClick = {this.regionalLevels} id={element.id}> { element.name } </DropdownItem>)
                       
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
        
       
        </div>
        )
    }
}



export default DropdownMenus