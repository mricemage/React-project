import React, { Component } from 'react'
import {Row} from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import './Header.css';
import Feedback from './Feedback';


class Header extends Component {
    constructor(props){
        super(props);
        this.state={cSelected:[]}
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

// <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
    onRadioBtnClick(rSelected) {
        this.setState({ rSelected });
      }

    render () {
        return (
            <div>
                
                  
                      
                <Row>
                    <h5>Metsämittari</h5>
                        <ButtonGroup className="righttop">
                            <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Fi</Button> &nbsp;
                            <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>En</Button> &nbsp;
                            <Feedback>Feedback</Feedback>
                        </ButtonGroup>
                </Row>


            </div>
        )
    }
}


export default Header