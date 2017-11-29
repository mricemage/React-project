import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leftscreen from './components/Leftscreen'
import Rightscreen from './components/Rightscreen'
import { Grid, Row, Col} from 'react-bootstrap'
import { render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ForestIndicatorData from './components/ForestIndicatorData'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: []
    };   

    this.getData = this.getData.bind(this);

    this.getData();
  }
  
  getData(){
    ForestIndicatorData.getRegionLevels().then(items => {
      console.log(items);
      this.setState = ({items})
    });
  }

  render() {
    return (
      App = (
        <div>
          <Grid>
            <Row className="show-grid">
            <Col xs={6} md={4}> <Leftscreen /></Col>
            <Col xs={12} md={8}> <Rightscreen /></Col>
            </Row>
          </Grid>
        </div>   
      )
    );
  }
}

//
export default App;
