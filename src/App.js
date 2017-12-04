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
import Scrollbar from './components/Scrollbar'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: []
    };   

    //this.getData = this.getData.bind(this);
    //this.setData = this.setData.bind(this);

    this.componentDidMount();
    this.setRegionLevels();
    this.getRegion();
    this.setRegion(2);
    this.getScenarioCollection();
    this.setScenarioCollection(4);
    this.getScenarios();
  }
  
    componentDidMount(){
    ForestIndicatorData.getRegionLevels().then(items => {
      //console.log(items[1]);
      //console.log(items[0][0]); //[] choose region  [] get name or id
      this.setState({items: items});
    });
  }

  setRegionLevels(){
    ForestIndicatorData.setRegionLevels(2);
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
            <Col lg={12} lg={4}> <Leftscreen items = {this.state.items} /></Col>
            <Col lg={12} lg={8}> <Rightscreen /></Col>
            </Row>
          </Grid>
        </div>   
    );
  }
}

//
export default App;
