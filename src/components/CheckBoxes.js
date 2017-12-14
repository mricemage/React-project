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
                       Other: [] };
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      }

      onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
          this.state.cSelected.push(selected);
        } else {
          this.state.cSelected.splice(index, 1);
        }
        if (this.state.cSelected.length <= 5){
        this.setState({ cSelected: [...this.state.cSelected] });
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
        }
      }

      onWoodProduction(selected) {
        const index = this.state.woodproduction.indexOf(selected);
        if (index < 0) {
          this.state.woodproduction.push(selected);
        } else {
          this.state.woodproduction.splice(index, 1);
        }
        if (this.state.woodproduction.length <= 5){
        this.setState({ woodproduction: [...this.state.woodproduction] });
        }
      }
    
      onBiodiversity(selected) {
        const index = this.state.Biodiversity.indexOf(selected);
        if (index < 0) {
          this.state.Biodiversity.push(selected);
        } else {
          this.state.Biodiversity.splice(index, 1);
        }
        if (this.state.Biodiversity.length <= 5){
        this.setState({ Biodiversity: [...this.state.Biodiversity] });
        }
      }

      onProductCollections(selected) {
        const index = this.state.ProductCollections.indexOf(selected);
        if (index < 0) {
          this.state.ProductCollections.push(selected);
        } else {
          this.state.ProductCollections.splice(index, 1);
        }
        if (this.state.ProductCollections.length <= 5){
        this.setState({ ProductCollections: [...this.state.ProductCollections] });
        }
      }
      
      onCarbon(selected) {
        const index = this.state.Carbon.indexOf(selected);
        if (index < 0) {
          this.state.Carbon.push(selected);
        } else {
          this.state.Carbon.splice(index, 1);
        }
        if (this.state.Carbon.length <= 5){
        this.setState({ Carbon: [...this.state.Carbon] });
        }
      }

      onOther(selected) {
        const index = this.state.Other.indexOf(selected);
        if (index < 0) {
          this.state.Other.push(selected);
        } else {
          this.state.Other.splice(index, 1);
        }
        if (this.state.Other.length <= 5){
        this.setState({ Other: [...this.state.Other] });
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

        strings.setLanguage('en');

        return (
            <div>
            <p>{strings.Scenario}</p>
                <ButtonGroup vertical>
                 {
                    this.props.scenarios.map( element => 
                        <Button  onClick={() => this.onCheckboxBtnClick(element.id)} id= {element.id} active={this.state.cSelected.includes(element.id)}>{ element.name }</Button>)
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
                        <Button  onClick={() => this.onWoodProduction(element.id)} id= {element.id} active ={this.state.woodproduction.includes(element.id)}>{ element.name }</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.woodproduction)}</p>
              
                <p>{strings.Biodiversity}</p>
                <ButtonGroup vertical>
                {
                    this.props.biodiversity.map( element => 
                        <Button  onClick={() => this.onBiodiversity(element.id)} id= {element.id} active ={this.state.Biodiversity.includes(element.id)}>{ element.name }</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.Biodiversity)}</p>

                <p>{strings.ProductCollections}</p>
                <ButtonGroup vertical>
                {
                    this.props.naturalproducts.map( element => 
                         
                    <Button  onClick={() => this.onProductCollections(element.id)} id= {element.id} active ={this.state.ProductCollections.includes(element.id)}>{ element.name }</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.ProductCollections)}</p>

                <p>{strings.Carbon}</p>
                <ButtonGroup vertical>
                {
                    this.props.carbon.map( element => 
                        <Button  onClick={() => this.onCarbon(element.id)} id= {element.id} active ={this.state.Carbon.includes(element.id)}>{ element.name }</Button>)
                } 
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.Carbon)}</p>

                <p>{strings.Other}</p>
                <ButtonGroup vertical>
                {
                    this.props.others.map( element => 
                        <Button  onClick={() => this.onOther(element.id)} id= {element.id} active ={this.state.Other.includes(element.id)}>{ element.name }</Button>)
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