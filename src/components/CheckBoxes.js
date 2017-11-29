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

    render () {
        return (
            <div>
            <h5>Scenarios</h5>
                <ButtonGroup vertical>
                 <Button  onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}>Four</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(5)} active={this.state.cSelected.includes(5)}>Five</Button>
                 <Button  onClick={() => this.onCheckboxBtnClick(6)} active={this.state.cSelected.includes(6)}>Six</Button>
                 </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.cSelected)}</p> 

                <h5>TimeStamp</h5>
                <ButtonGroup vertical>
                <Button  onClick={() => this.onRadioBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                <Button  onClick={() => this.onRadioBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                <Button  onClick={() => this.onRadioBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
                <Button  onClick={() => this.onRadioBtnClick(4)} active={this.state.cSelected.includes(4)}>Four</Button>
                <Button  onClick={() => this.onRadioBtnClick(5)} active={this.state.cSelected.includes(5)}>Five</Button>
                <Button  onClick={() => this.onRadioBtnClick(6)} active={this.state.cSelected.includes(6)}>Six</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(this.state.rSelected)}</p>
            </div>
        )
    }
}

export default CheckBoxes