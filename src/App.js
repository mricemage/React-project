import React, { Component } from 'react';
import './App.css';
import Leftscreen from './components/Leftscreen'
import Rightscreen from './components/Rightscreen'
import { Grid, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import ForestIndicatorData from './components/ForestIndicatorData'



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
      languagebtn: '',
      indicatorCategories:[],
      woodproduction:[],
      biodiversity:[],
      naturalproducts:[],
      carbon:[],
      others:[],
      graphData:[],
      datafromAPI: false,
      scenarioId:[],
      indicatorId:[],
      nameofIndicator:[],
      nameofScenario:[],
      timePeriodId: 0

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
    // this.changeLanguage = this.changeLanguage.bind(this)


    this.getIndicatorCategories = this.getIndicatorCategories.bind(this)
    this.getWoodProduction = this.getWoodProduction.bind(this)
    this.getBiodiversity = this.getBiodiversity.bind(this)
    this.getNaturalProducts = this.getNaturalProducts.bind(this)
    this.getCarbon = this.getCarbon.bind(this)
    this.getOthers = this.getOthers.bind(this)
    this.getGraphData = this.getGraphData.bind(this)
    this.setscenarioId = this.setscenarioId.bind(this)
    this.settimePeriodId = this.settimePeriodId.bind(this)
    this.setindicatorId = this.setindicatorId.bind(this)
    this.setLanguage = this.setLanguage.bind(this)
    this.LanguageChange = this.LanguageChange.bind(this)

  }
  // changeLanguage(){
  //   this.setState({languagebtn: rSelected}, function() {
  //     console.log(this.state.languagebtn);
  // });
  // }  

    componentDidMount(){
    ForestIndicatorData.getRegionLevels('fi').then(result => {
      this.setState({regionalLevels: result});
      console.log(this.state.regionalLevels, ": RegionLevel");
      console.log(this.state.regionalLevels[0].id ,": default RegionLevel")

      ForestIndicatorData.setRegionLevels(this.state.regionalLevels[0].id)
      ForestIndicatorData.getRegion().then(result => {
        this.setState({regions: result});
        console.log(this.state.regions, "Regions")
        console.log(this.state.regions[0].id, "default Regions")

        ForestIndicatorData.setRegion(this.state.regions[0].id)
        ForestIndicatorData.getScenarioCollection().then(result => {
          this.setState({scenarioCollection: result});
          console.log(this.state.scenarioCollection[0].id, "default ScenarioCollection")

           ForestIndicatorData.setScenarioCollection(this.state.scenarioCollection[0].id)
           
           ForestIndicatorData.getScenarios().then(result => {
            this.setState({scenarios: result,
                        datafromAPI: true});
            console.log(this.state.scenarios, "Scenarios")
            this.getTimePeriods();
            this.getIndicatorCategories();
            this.getWoodProduction();
            this.getBiodiversity()
            this.getNaturalProducts()
            this.getCarbon();
            this.getOthers();
          });
        });          
      });
    });

/*   ForestIndicatorData.setRegion(this.state.regionalLevels[0].id).then(result => {
      this.setState({regions: result});
      console.log(this.state.regions, "Ekanetappi")
      //console.log(this.state.regionalLevels);
    });*/
    //Test functions and will be removed in the future
    /*
    ForestIndicatorData.setLanguage("fi");
    ForestIndicatorData.setRegionLevels(1);
    ForestIndicatorData.setRegion(24);
    ForestIndicatorData.setScenarioCollection(6); //6
    
    ForestIndicatorData.getScenarios().then(result =>{
      console.log("getScenarios");
      console.log(result);
      ForestIndicatorData.getGraphData([10,11], [125,126,127], 20).then(result =>{
        console.log("huomenta");
        console.log(result);
        });
    });*/
    /*
    ForestIndicatorData.getTimePeriods().then(result =>{
      console.log(result);
    });
    ForestIndicatorData.getIndicatorCategories().then(result =>{
      console.log(result);
    });
    
    ForestIndicatorData.getWoodProduction().then(result =>{
      console.log("getWoodProduction");
      console.log(result); //result[0].name
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
    });
    
    ForestIndicatorData.getGraphData([10,11], [125,126,127], 20).then(result =>{
    console.log("huomenta");
    console.log(result);
    });*/
    ForestIndicatorData.setRegionLevels(1);
    ForestIndicatorData.setRegion(29);
    ForestIndicatorData.getScenarioCollection().then(result => {
      //console.log(this.state.regionalLevels);
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

setscenarioId(cSelected, name){
  
  this.state.nameofScenario.push(name)
  this.setState({scenarioId: cSelected}, function () {
    console.log(this.state.scenarioId, "scenarioId");
    console.log(this.state.nameofScenario, "Scenario name")
  })
}
   
settimePeriodId(rSelected){
  var testData = rSelected;
  this.setState({timePeriodId: testData}, function () {
    console.log(this.state.timePeriodId, "timePeriodId")
  })
}

setindicatorId(indicatorId, name){
  this.state.nameofIndicator.push(name)
  this.setState({indicatorId: indicatorId}, function() {

    console.log(this.state.indicatorId, "indicatorId");
    console.log(this.state.nameofIndicator, ":indicatorName")
    this.getGraphData();
  })
}

getGraphData(){
  ForestIndicatorData.getGraphData(this.state.scenarioId, this.state.indicatorId, this.state.timePeriodId).then(result => {
    this.setState({graphData: result})
    console.log(this.state.graphData, "graph data")
    console.log(this.state.nameofIndicator, "indicatorNamepart2")
  })
}

setLanguage(language){
ForestIndicatorData.setLanguage(language);
}

LanguageChange(language){
    this.setLanguage(language)
    ForestIndicatorData.getRegionLevels().then(result => {
    this.setState({regionalLevels: result});
    console.log(this.state.regionalLevels, ": RegionLevel");
    console.log(this.state.regionalLevels[0].id ,": default RegionLevel")

    ForestIndicatorData.setRegionLevels(this.state.regionalLevels[0].id)
    ForestIndicatorData.getRegion().then(result => {
      this.setState({regions: result});
      console.log(this.state.regions, "Regions")
      console.log(this.state.regions[0].id, "default Regions")

      ForestIndicatorData.setRegion(this.state.regions[0].id)
      ForestIndicatorData.getScenarioCollection().then(result => {
        this.setState({scenarioCollection: result});
        console.log(this.state.scenarioCollection[0].id, "default ScenarioCollection")

        ForestIndicatorData.setScenarioCollection(this.state.scenarioCollection[0].id)
        ForestIndicatorData.getScenarios().then(result => {
          this.setState({scenarios: result,
                      datafromAPI: true});
          console.log(this.state.scenarios, "Scenarios")
          this.getTimePeriods();
          this.getIndicatorCategories();
          this.getWoodProduction();
          this.getBiodiversity();
          this.getNaturalProducts();
          this.getCarbon();
          this.getOthers();
        });
      });          
    });
  });
}
  render() {
    return (
        <div>
          {this.state.datafromAPI ?
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
                                              setscenarioId = {this.setscenarioId} //Set scenarioId function to work with charts
                                              settimePeriodId = {this.settimePeriodId} //Set timePeriodId function to work with charts
                                              setindicatorId = {this.setindicatorId} //setindicatorId
                                              getScenarioCollection = {this.getScenarioCollection}
                                              getScenarios = {this.getScenarios}
                                              setScenarioCollection = {this.setScenarioCollection}
                                              getTimePeriods = {this.getTimePeriods}
                                              languagebtn = {this.state.languagebtn}
                                              getIndicatorCategories = {this.getIndicatorCategories}
                                              getWoodProduction = {this.getWoodProduction}
                                              getBiodiversity = {this.getBiodiversity}
                                              getNaturalProducts = {this.getNaturalProducts}
                                              getCarbon = {this.getCarbon}
                                              getOthers = {this.getOthers}
                                              LanguageChange = {this.LanguageChange}
                                              />
                                              </Col>
            <Col lg={12} lg={8}> <Rightscreen graphData = {this.state.graphData}
                                              getGraphData = {this.getGraphData} 
                                              nameofIndicator = {this.state.nameofIndicator}
                                              nameofScenario = {this.state.nameofScenario}/></Col>
            </Row>
          </Grid>
          :"Still Loading"}
        </div>   
    );
  }
}

export default App;