import React, { Component } from 'react'
import { UncontrolledButtonDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import LocalizedStrings from 'react-localization'
import ForestIndicatorData from './ForestIndicatorData'


class DropdownMenus extends Component {
    constructor(props){
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        dropdownOpen: false
        };
    
}

toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }




 render () {
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

    const { items, name, order, id } = this.props;

        return (
           <div>
               
               <label> {strings.ScenarioSelection} </label>
               <br />
               <label> {strings.ForestryCenters} </label>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {strings.ForestryCenters}
                </DropdownToggle>
        
        <DropdownMenu>
            <DropdownItem header>Region Selection</DropdownItem>
            <DropdownItem>{ name }</DropdownItem>
            
            
            </DropdownMenu>
        </Dropdown>

        <label> {strings.Area}</label>
        <br/>
        <UncontrolledButtonDropdown>
            <DropdownToggle caret>
            Region
            </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown> 

        <br/>
      <label> {strings.ScenarioCollection}</label>
        <br/>
        <UncontrolledButtonDropdown>
            <DropdownToggle caret>
            Scenario collection
            </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown> 
        
       
        </div>
        )
    }
}



export default DropdownMenus