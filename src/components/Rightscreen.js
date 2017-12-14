import React, { Component, PropTypes } from 'react'
import './Rightscreen.css'
import Header from './Header'
import Graphs from './Graphs'
import {Row, Button, ButtonGroup} from 'reactstrap';

class Rightscreen extends Component {
    constructor(props){
        super(props);
        this.state={cSelected:[]}
        // this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

   
    printDocument() {
        var prtContent = document.getElementById("graph");
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      }

    render () {
        return (
            <div className= 'content'>
                <Header/>
                RightScreenn
                <Graphs/>


            
      

                <Row>
                    <h5></h5>
                        <ButtonGroup className="justified">
                            <Button color="primary">1 Graphs</Button>
                            <Button color="primary">2 Graphs</Button>
                            <Button color="primary" onClick={() => this.printDocument()}>Print</Button>
                        </ButtonGroup>
                </Row>

            </div>
        )
    }
}

export default Rightscreen