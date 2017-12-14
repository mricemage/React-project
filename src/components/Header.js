import React, { Component } from 'react'
import {Row} from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';
import './Header.css';
import LocalizedStrings from 'react-localization'
import DropdownMenus from './DropdownMenus'
import Feedback from './Feedback';



class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            cSelected:[],
            languagebtn: ''
        }
        //  this.changeLanguage = this.changeLanguage.bind(this);
        
       
    }

// <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
changeLanguage(rSelected) {
    alert(rSelected);
    console.log(typeof(rSelected));
    
    this.setState({languagebtn: rSelected}, function() {
        console.log(this.state.languagebtn);
    });
    
  }

    

    render () {
       
       

        return (
            <div>
                
                  
                      
                <Row>
                    <h5>Metsämittari</h5>
                        <ButtonGroup className="righttop">
<<<<<<< HEAD
                            <Button color="primary" onClick={() => this.changeLanguage('fi')} active={this.state.rSelected === 1}>Fi</Button>
                            <Button color="primary" onClick={() => this.changeLanguage('en')} active={this.state.rSelected === 2}>En</Button>
                         
=======
                            <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Fi</Button> &nbsp;
                            <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>En</Button> &nbsp;
                            <Feedback>Feedback</Feedback>
>>>>>>> bf62f4748df1e4dc2d6b9e0cc7e276691bb5b794
                        </ButtonGroup>
                </Row>
                {/* < DropdownMenus languagebtn = {this.state.languagebtn} /> */}


            </div>
        )
    }
}


export default Header