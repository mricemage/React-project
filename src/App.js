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
      regions: [],
      scenarioCollection:[],
      scenarios:[],
      timestamp:[]
    };   

    //this.getData = this.getData.bind(this);
    //this.setData = this.setData.bind(this);

    this.setRegionLevels = this.setRegionLevels.bind(this)
    this.getRegion = this.getRegion.bind(this)
    this.setRegion = this.setRegion.bind(this)
    this.getScenarioCollection = this.getScenarioCollection.bind(this)
    this.getScenarios = this.getScenarios.bind(this)
    this.setScenarioCollection = this.setScenarioCollection.bind(this)
    this.getTimePeriods = this.getTimePeriods.bind(this)

  }
    
    componentDidMount(){
    ForestIndicatorData.getRegionLevels("en").then(result => {
      this.setState({regionalLevels: result});
      //console.log(this.state.regionalLevels);
    });

    //Test functions and will be removed in the future
    ForestIndicatorData.setRegionLevels(1);
    ForestIndicatorData.setRegion(24);
    ForestIndicatorData.setScenarioCollection(6);
    ForestIndicatorData.getGraphData(11, 125, 20).then(result =>{
      console.log("huomenta");
      console.log(result);
    });
    /*
    ForestIndicatorData.getScenarios().then(result =>{
      //console.log(result);
    });
    ForestIndicatorData.getTimePeriods().then(result =>{
      //console.log(result);
    });
    ForestIndicatorData.getIndicatorCategories().then(result =>{
      console.log(result);
    });*/
    /*
    ForestIndicatorData.getWoodProduction().then(result =>{
      console.log(result);
    });
    ForestIndicatorData.getBiodiversity().then(result =>{
      console.log(result);
    });
    ForestIndicatorData.getNaturalProducts().then(result =>{
      console.log(result);
    });
    ForestIndicatorData.getCarbon().then(result =>{
      console.log(result);
    });
    ForestIndicatorData.getOthers().then(result =>{
      console.log(result);
    });*/
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
    ForestIndicatorData.getScenarioCollection().then(result => {
      this.setState({scenarioCollection: result})
      console.log(this.state.scenarioCollection);
    });
  }

  setScenarioCollection(id){
    ForestIndicatorData.setScenarioCollection(id);
  }

  getScenarios(){
    ForestIndicatorData.getScenarios().then(result => {
      this.setState({scenarios: result})
      console.log(this.state.scenarios)
    });
  }

  getTimePeriods(){
    ForestIndicatorData.getTimePeriods().then(result => {
      this.setState({timestamp: result})
      console.log(this.state.timestamp)
  });
}
  render() {
    return (
        <div>
          <Grid>
            <Row className="show-grid">
            <Col lg={12} lg={4}> <Leftscreen  regionalLevels = {this.state.regionalLevels}
                                              regions = {this.state.regions}
                                              scenarioCollection = {this.state.scenarioCollection}
                                              scenarios = {this.state.scenarios}
                                              timestamp = {this.state.timestamp}
                                              setRegionLevels = {this.setRegionLevels}
                                              getRegion = {this.getRegion}
                                              setRegion = {this.setRegion}
                                              getScenarioCollection = {this.getScenarioCollection}
                                              getScenarios = {this.getScenarios}
                                              setScenarioCollection = {this.setScenarioCollection}
                                              getTimePeriods = {this.getTimePeriods}
                                              />
                                              </Col>
            <Col lg={12} lg={8}> <Rightscreen /></Col>
            </Row>
          </Grid>
        </div>   
    );
  }
}

export default App;