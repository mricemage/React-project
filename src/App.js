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
      regionalLevels: [],
      regions: []
    };   

    //this.getData = this.getData.bind(this);
    //this.setData = this.setData.bind(this);
    this.setRegionLevels = this.setRegionLevels.bind(this)
    this.getRegion = this.getRegion.bind(this)
  }
  
    componentDidMount(){
    ForestIndicatorData.getRegionLevels().then(result => {
      //console.log(items[1]);
      //console.log(items[0][0]); //[] choose region  [] get name or id
      this.setState({regionalLevels: result});
      console.log(this.state.regionalLevels);
    });
  }

  setRegionLevels(id){
    ForestIndicatorData.setRegionLevels(id);
  }

  getRegion(){
    ForestIndicatorData.getRegion().then(result => {
      this.setState({regions: result})
      console.log(this.state.regions);
    });
  }

  setRegion(id){
    console.log(id)
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
            <Col lg={12} lg={4}> <Leftscreen  regionalLevels = {this.state.regionalLevels}
                                              regions = {this.state.regions}
                                              setRegionLevels = {this.setRegionLevels}
                                              getRegion = {this.getRegion}/>
                                              </Col>
            <Col lg={12} lg={8}> <Rightscreen /></Col>
            </Row>
          </Grid>
        </div>   
    );
  }

}

//
export default App;
