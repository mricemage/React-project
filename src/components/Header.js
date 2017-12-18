import React, { Component } from 'react'
import {Row} from 'reactstrap';
import { ButtonGroup } from 'reactstrap';
import './Header.css';
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
                             <Feedback>Feedback</Feedback>

                        </ButtonGroup>
                </Row>
               


            </div>
        )
    }
}


export default Header