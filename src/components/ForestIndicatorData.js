import axios from 'axios';

var regionLevel = 0;
var regionId = 0;
var scenarioCollectionId = 0;
var region = "";

function getRegionLevels(language = "fi"){
    return new Promise((resolve, reject) => {
        //axios.get("http://melatupa.azurewebsites.net/regionLevels")
        axios({
            method: 'get',
            url: 'http://melatupa.azurewebsites.net/regionLevels',
            headers: {'Accept-Language': language}
        })
        .then(results => {
            //console.log(results);
            
            //this solution works with ie7 & 8
            /*
            var count = 0;
            while(results.data[count]){
                count++;
            }

            //console.log(count);
            var data2 = {key1: 1, key2: 3, key3: [4, 2]};

            data2.key1
            var data = [[]];
            for (var i = 0; i < count; i++){
                data[i] = [];
                data[i][0] = results.data[i].name;
                data[i][1] = results.data[i].id;
            }*/
            //console.log(data);
            //resolve(data); //results.data[0].name
            
            resolve(results.data);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function setRegionLevels(id){
    regionLevel = id;
}

function getRegion(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/regionLevels/"+regionLevel+"/regions";
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            resolve(results.data);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function setRegion(id){
    regionId = id;
}

function getScenarioCollection(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/regionLevels/"+regionLevel+"/regions";
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            var count = 0;
            while(results.data[count]){
                if(results.data[count].id == regionId){
                    //console.log(results.data[count].scenarioCollections);
                    //console.log(results.data[count]);
                    resolve(results.data[count].scenarioCollections);
                }
                count++;
            }
            //console.log(results.data.);
            //resolve(results.data);
            reject(); //didn't find scenarioCollections
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function setScenarioCollection(id){
    scenarioCollectionId = id;
}

function getScenarios(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            //console.log(results.data[0].scenarios);
            resolve(results.data[0].scenarios); //results.data.scenarios
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getTimePeriods(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            //console.log(results.data[0].timePeriods);
            resolve(results.data[0].timePeriods); //results.data.scenarios
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getIndicatorCategories(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            //console.log(results.data[0].timePeriods);
            resolve(results.data[0].indicatorCategories); //results.data.scenarios
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

export default { getRegionLevels, setRegionLevels, getRegion, setRegion, getScenarioCollection, 
                 setScenarioCollection, getScenarios, getTimePeriods, getIndicatorCategories } 