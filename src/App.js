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
      timestamp:[],
      indicatorCategories:[],
      woodproduction:[],
      biodiversity:[],
      naturalproducts:[],
      carbon:[],
      others:[],
      graphData:[]
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
    this.getIndicatorCategories = this.getIndicatorCategories.bind(this)
    this.getWoodProduction = this.getWoodProduction.bind(this)
    this.getBiodiversity = this.getBiodiversity.bind(this)
    this.getNaturalProducts = this.getNaturalProducts.bind(this)
    this.getCarbon = this.getCarbon.bind(this)
    this.getOthers = this.getOthers.bind(this)
    this.getGraphData = this.getGraphData.bind(this)
  }
    
    componentDidMount(){
    ForestIndicatorData.getRegionLevels('fi').then(result => {
      this.setState({regionalLevels: result});
      console.log(this.state.regionalLevels);
    });
    /*
    ForestIndicatorData.setRegionLevels(1);
    ForestIndicatorData.setRegion(24);
    ForestIndicatorData.setScenarioCollection(6);
    ForestIndicatorData.getScenarios().then(result =>{
      console.log(result);
    });
    ForestIndicatorData.getTimePeriods().then(result =>{
      console.log(result);
    });
    ForestIndicatorData.getIndicatorCategories().then(result =>{
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
getIndicatorCategories(){
  ForestIndicatorData.getIndicatorCategories().then(result => {
    this.setState({indicatorCategories: result})
    console.log(this.state.indicatorCategories, "indicators")
})
}

getWoodProduction(){
  ForestIndicatorData.getWoodProduction().then(result => {
    this.setState({woodproduction: result})
    console.log(this.state.woodproduction, "wood")
})
}

getBiodiversity(){
  ForestIndicatorData.getBiodiversity().then(result => {
    this.setState({biodiversity: result})
    console.log(this.state.biodiversity, "bio")
})
}

getNaturalProducts(){
  ForestIndicatorData.getNaturalProducts().then(result => {
    this.setState({naturalproducts: result})
    console.log(this.state.naturalproducts, "natural")
})
}

getCarbon(){
  ForestIndicatorData.getCarbon().then(result => {
    this.setState({carbon: result})
    console.log(this.state.carbon, "carbon")
})
}

getOthers(){
  ForestIndicatorData.getOthers().then(result => {
    this.setState({others: result})
    console.log(this.state.others, "others")
})
}

getGraphData(){
  ForestIndicatorData.getGraphData().then(result => {
    this.setState({graphData: result})
    console.log(this.state.graphData, "graph data")
  })
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
                                              indicatorCategories = {this.state.indicatorCategories}
                                              woodproduction = {this.state.woodproduction}
                                              biodiversity = {this.state.biodiversity}
                                              naturalproducts = {this.state.naturalproducts}
                                              carbon = {this.state.carbon}
                                              others = {this.state.others}
                                              setRegionLevels = {this.setRegionLevels}
                                              getRegion = {this.getRegion}
                                              setRegion = {this.setRegion}
                                              getScenarioCollection = {this.getScenarioCollection}
                                              getScenarios = {this.getScenarios}
                                              setScenarioCollection = {this.setScenarioCollection}
                                              getTimePeriods = {this.getTimePeriods}
                                              getIndicatorCategories = {this.getIndicatorCategories}
                                              getWoodProduction = {this.getWoodProduction}
                                              getBiodiversity = {this.getBiodiversity}
                                              getNaturalProducts = {this.getNaturalProducts}
                                              getCarbon = {this.getCarbon}
                                              getOthers = {this.getOthers}
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
