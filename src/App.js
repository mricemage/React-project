import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leftscreen from './components/Leftscreen'
import Rightscreen from './components/Rightscreen'
import { Grid, Row, Col} from 'react-bootstrap'
import { render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import ForestIndicatorData from './components/ForestIndicatorData'
import DropdownMenus from './components/DropdownMenus'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      views:"ForestIndicator",
      regionalLevels: []
    };   

    //this.getData = this.getData.bind(this);
    //this.setData = this.setData.bind(this);
  }
    
    componentDidMount(){
    ForestIndicatorData.getRegionLevels("en").then(result => {
      this.setState({regionalLevels: result});
      console.log(this.state.regionalLevels);

    });
    ForestIndicatorData.setRegionLevels(1);
    ForestIndicatorData.setRegion(29);
    ForestIndicatorData.getScenarioCollection().then(result => {
      //console.log(result);
    })
  }

  setRegionLevels(id){
    ForestIndicatorData.setRegionLevels(id);
  }

  getRegion(){
    ForestIndicatorData.getRegion().then(items => {
      console.log("getRegion");
      console.log(items);
      
    });
  }

  setRegion(id){
    ForestIndicatorData.setRegion(id);
  }

  getScenarioCollection(){
    ForestIndicatorData.getScenarioCollection().then(items => {
      console.log("getScenarioCollection");
      console.log(items);
    });
  }

  setScenarioCollection(id){
    ForestIndicatorData.setScenarioCollection(id);
  }

  getScenarios(){
    ForestIndicatorData.getScenarios().then(items => {
      console.log("getScenarioCollection");
      console.log(items);
    });
  }

  render() {
    return (
        <div>
          <Grid>
            <Row className="show-grid">
            <Col lg={12} lg={4}> <Leftscreen regionalLevels = {this.state.regionalLevels} /></Col>
            <Col lg={12} lg={8}> <Rightscreen /></Col>
            </Row>
          </Grid>
        </div>   
    );
  }

}

//
export default App;
