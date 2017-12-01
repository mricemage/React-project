import React, { Component } from 'react'
import {Button, ButtonGroup}from 'reactstrap';
class CheckBoxes extends Component {
    constructor (props) {
        super(props);
    
        this.state = { cSelected: [] };
        this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
      }

      onCheckboxBtnClick(selected) {
        const index = this.state.cSelected.indexOf(selected);
        if (index < 0) {
          this.state.cSelected.push(selected);
        } else {
          this.state.cSelected.splice(index, 1);
        }
        this.setState({ cSelected: [...this.state.cSelected] });
      }
    
        
    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
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
        return (
            <div>
            <p>Scenarios</p>
                <ButtonGroup vertical>
                 <Button  onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}>Four</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(5)} active={this.state.cSelected.includes(5)}>Five</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(6)} active={this.state.cSelected.includes(6)}>Six</Button>
                 </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.cSelected)}</p> 

                <p>TimeLine</p>
                <ButtonGroup vertical>
                <Button  onClick={() => this.onRadioBtnClick(1)} >One</Button>
                <Button  onClick={() => this.onRadioBtnClick(2)} >Two</Button>
                <Button  onClick={() => this.onRadioBtnClick(3)} >Three</Button>
                <Button  onClick={() => this.onRadioBtnClick(4)} >Four</Button>
                <Button  onClick={() => this.onRadioBtnClick(5)} >Five</Button>
                <Button  onClick={() => this.onRadioBtnClick(6)} >Six</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.rSelected)}</p>

                <h5>Indicator Selections</h5>
                <p>Wood Production</p>
                <ButtonGroup vertical>
                <Button  onClick={() => this.onRadioBtnClick1(1)} >One</Button>
                <Button  onClick={() => this.onRadioBtnClick1(2)} >Two</Button>
                <Button  onClick={() => this.onRadioBtnClick1(3)} >Three</Button>
                <Button  onClick={() => this.onRadioBtnClick1(4)} >Three</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.tSelected)}</p>
               

                <p>Biodiversity</p>
                <ButtonGroup vertical>
                <Button  onClick={() => this.onRadioBtnClick2(1)} >One</Button>
                <Button  onClick={() => this.onRadioBtnClick2(2)} >Two</Button>
                <Button  onClick={() => this.onRadioBtnClick2(3)} >Three</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.ySelected)}</p>

                <p>Natural products</p>
                <ButtonGroup vertical>
                <Button  onClick={() => this.onRadioBtnClick3(1)} >One</Button>
                <Button  onClick={() => this.onRadioBtnClick3(2)} >Two</Button>
                <Button  onClick={() => this.onRadioBtnClick3(3)} >Three</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.uSelected)}</p>

                <p>Carbon</p>
                <ButtonGroup vertical>
                <Button  onClick={() => this.onRadioBtnClick4(1)} >One</Button>
                <Button  onClick={() => this.onRadioBtnClick4(2)} >Two</Button>
                <Button  onClick={() => this.onRadioBtnClick4(3)} >Three</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.iSelected)}</p>

                <p>Others</p>
                <ButtonGroup vertical>
                <Button  onClick={() => this.onRadioBtnClick5(1)} >One</Button>
                <Button  onClick={() => this.onRadioBtnClick5(2)} >Two</Button>
                <Button  onClick={() => this.onRadioBtnClick5(3)} >Three</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.oSelected)}</p>
            </div>
        )
    }
}

export default CheckBoxes