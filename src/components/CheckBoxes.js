import React, { Component } from 'react'
import {Button, ButtonGroup}from 'reactstrap';
import LocalizedStrings from 'react-localization'

class CheckBoxes extends Component {
    constructor (props) {
        super(props);
        
        this.state = { cSelected: [],
                       rSelected: [],
                       woodproduction: [],
                       Biodiversity: [],
                       ProductCollections: [],
                       Carbon: [],
                       Other: [],
                       indicator: [] };
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.onWoodProduction = this.onWoodProduction.bind(this);
        this.onBiodiversity = this.onBiodiversity.bind(this);
        this.onProductCollections = this.onProductCollections.bind(this);
        this.onCarbon = this.onCarbon.bind(this);
        this.onOther = this.onOther.bind(this);
        
      }

      onCheckboxBtnClick(selected, name) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
          this.state.cSelected.push(selected);
        } else {
          this.state.cSelected.splice(index, 1);
        }
        if (this.state.cSelected.length <= 5){
          this.setState({ cSelected: [...this.state.cSelected] }, function () {
            this.props.setscenarioId(this.state.cSelected, name);
            }) // Not "selected"
        }
        
      }
    
      onRadioBtnClick(selected) {
        const index = this.state.rSelected.indexOf(selected);
        if (index < 0) {
          this.state.rSelected.push(selected);
        } else {
          this.state.rSelected.splice(index, 1);
        }
        if (this.state.rSelected.length <= 1){
        this.setState({ rSelected: [...this.state.rSelected] });
        this.props.settimePeriodId(this.state.rSelected);
        }
      }

      onWoodProduction(selected, name) {
        const index = this.state.woodproduction.indexOf(selected);
        if (index < 0) {
          this.state.woodproduction.push(selected);
        } else {
          this.state.woodproduction.splice(index, 1);
        }

        if (this.state.woodproduction.length <= 15){
        this.setState({ indicator: [...this.state.woodproduction] }, function () {
        this.props.setindicatorId(this.state.indicator, name);
        })
        }
      }
    
      onBiodiversity(selected, name) {
        const index = this.state.woodproduction.indexOf(selected);
        if (index < 0) {
          this.state.woodproduction.push(selected);
        } else {
          this.state.woodproduction.splice(index, 1);
        }
        if (this.state.woodproduction.length <= 15){
          this.setState({ indicator: [...this.state.woodproduction] }, function () {
          this.props.setindicatorId(this.state.indicator, name);
          })
          }
        }

      onProductCollections(selected, name) {
        const index = this.state.woodproduction.indexOf(selected);
        if (index < 0) {
          this.state.woodproduction.push(selected);
        } else {
          this.state.woodproduction.splice(index, 1);
        }
        if (this.state.woodproduction.length <= 15){
          this.setState({ indicator: [...this.state.woodproduction] }, function () {
          this.props.setindicatorId(this.state.indicator, name);
          })
          }
        }
      
      onCarbon(selected, name) {
        const index = this.state.woodproduction.indexOf(selected);
        if (index < 0) {
          this.state.woodproduction.push(selected);
        } else {
          this.state.woodproduction.splice(index, 1);
        }
        if (this.state.woodproduction.length <= 15){
          this.setState({ indicator: [...this.state.woodproduction] }, function () {
          this.props.setindicatorId(this.state.indicator, name);
          })
          }
        }

      onOther(selected, name) {
        const index = this.state.woodproduction.indexOf(selected);
        if (index < 0) {
          this.state.woodproduction.push(selected);
        } else {
          this.state.woodproduction.splice(index, 1);
        }
        if (this.state.woodproduction.length <= 15){
          this.setState({ indicator: [...this.state.woodproduction] }, function () {
          this.props.setindicatorId(this.state.indicator, name);
          })
          }
        }

    onRadioBtnClick1(tSelected){
        this.setState({ tSelected })
    }
    onRadioBtnClick2(ySelected){
        this.setState({ ySelected })
    }
    onRadioBtnClick3(uSelected){
        this.setState({ uSelected })
    }
    onRadioBtnClick4(iSelected){
        this.setState({ iSelected })
    }
    onRadioBtnClick5(oSelected){
        this.setState({ oSelected })
    }

    render () {
      const languagebtn = this.props.languagebtn;

        let strings = new LocalizedStrings ({
            en: {
                ScenarioSelection:"Scenario Collection",
                ForestryCenters:"Forestry Centers",
                Area:"Area",
                ScenarioCollection:"Scenario Collection",
                Scenario:"Scenario",
                Period:"Time",
                IndicatorSelection:"Indicator Selection",
                WoodProduction:"Wood Production",
                ProductCollections:"Natural Products",
                Biodiversity:"Biodiversity",
                Carbon:"Carbon",
                Other:"Other"
            },
            fi: {
                ScenarioSelection:"Skenarrioiden valinta",
                ForestryCenters:"Aluetaso",
                Area:"Alue",
                ScenarioCollection:"Skenaariokokoelma",
                Scenario:"Skenaariot",
                Period:"Ajankohta",
                IndicatorSelection:"Indikaattoreiden valinta",
                WoodProduction:"Puuntuotanto",
                ProductCollections:"Keruutuotteet",
                Biodiversity:"Monimuotoisuus",
                Carbon:"Hiili",
                Other:"Muut"
            }
        });

        strings.setLanguage(languagebtn);

        return (
            <div>
            <p>{strings.Scenario}</p>
                <ButtonGroup vertical>
                {
                    this.props.scenarios.map( (element, i) => 
                        <Button  onClick={() => this.onCheckboxBtnClick(element.id, element.name)} key={i} id= {element.id} active={this.state.cSelected.includes(element.id)}>{ element.name }</Button>)
                    }  

                 </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.cSelected)}</p> 

                <p>{strings.Period}</p>
                <ButtonGroup vertical>
                {
                    this.props.timestamp.map( element => 
                        <Button  onClick={() => this.onRadioBtnClick(element.id)} id= {element.id} active ={this.state.rSelected.includes(element.id)}>{ element.yearStart } - {element.yearEnd}</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.rSelected)}</p>
                
                <h5>{strings.IndicatorSelection}</h5>

                <p>{strings.WoodProduction}</p>
                <ButtonGroup vertical>
                {
                    this.props.woodproduction.map( element => 
                        <Button  onClick={() => this.onWoodProduction(element.id, element.name)} id= {element.id} active ={this.state.woodproduction.includes(element.id)}>{ element.name }</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.woodproduction)}</p>
              
                <p>{strings.Biodiversity}</p>
                <ButtonGroup vertical>
                {
                    this.props.biodiversity.map( element => 
                        <Button  onClick={() => this.onBiodiversity(element.id, element.name)} id= {element.id} active ={this.state.Biodiversity.includes(element.id)}>{ element.name }</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.Biodiversity)}</p>

                <p>{strings.ProductCollections}</p>
                <ButtonGroup vertical>
                {
                    this.props.naturalproducts.map( element => 
                         
                    <Button  onClick={() => this.onProductCollections(element.id, element.name)} id= {element.id} active ={this.state.ProductCollections.includes(element.id)}>{ element.name }</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.ProductCollections)}</p>

                <p>{strings.Carbon}</p>
                <ButtonGroup vertical>
                {
                    this.props.carbon.map( element => 
                        <Button  onClick={() => this.onCarbon(element.id, element.name)} id= {element.id} active ={this.state.Carbon.includes(element.id)}>{ element.name }</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.Carbon)}</p>

                <p>{strings.Other}</p>
                <ButtonGroup vertical>
                {
                    this.props.others.map( element => 
                        <Button  onClick={() => this.onOther(element.id, element.name)} id= {element.id} active ={this.state.Other.includes(element.id)}>{ element.name }</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.Other)}</p>
                
                

            </div>
        )
    }
}

/*                <p>{strings.Other}</p>
                <ButtonGroup vertical>
                <Button  onClick={() => this.onRadioBtnClick5(1)} >One</Button>
                <Button  onClick={() => this.onRadioBtnClick5(2)} >Two</Button>
                <Button  onClick={() => this.onRadioBtnClick5(3)} >Three</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.oSelected)}</p>*/



/*  {
                this.props.indicatorCategories.map(( element, i) => <div> <p>{element.name}</p> <ButtonGroup vertical>
                 {this.props.indicatorCategories[i].indicators.map(element => <Button  onClick={() => this.onRadioBtnClick(element.id)} id= {element.id}
                  active ={this.state.rSelected.includes(element.id)}>{ element.name }</Button>) 
                  }</ButtonGroup></div>)
                } 

                */
export default CheckBoxes