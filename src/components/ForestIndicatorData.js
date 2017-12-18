import axios from 'axios';

var language = "fi";
var regionLevel = 0;
var regionId = 0;
var lastRegiodId = 0;
var scenarioCollectionId = 0;
var lastScenarioCollectionId = 0;
var scenarioData = [];
var lastDataLanguage = "";

function setLanguage(_language){
    language = _language;
}

function getRegionLevels(){
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: 'http://melatupa.azurewebsites.net/regionLevels',
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

//made this function this way because it was easier for others to use so we wont pass id as parameter
function setRegionLevels(id){
    regionLevel = id;
}

function getRegion(){
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
//made this function this way because it was easier for others to use so we wont pass id as parameter
function setRegion(id){
    regionId = id;
}

function getScenarioCollection(){
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
                    resolve(results.data[count].scenarioCollections);
                }
                count++;
            }
            reject(); //didn't find scenarioCollections
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

//made this function this way because it was easier for others to use so we wont pass id as parameter
function setScenarioCollection(id){
    scenarioCollectionId = id;
}

function getScenarioData(){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
        "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            scenarioData = results.data[0];
            lastDataLanguage = language;
            lastRegiodId = regionId;
            lastScenarioCollectionId = scenarioCollectionId;

            resolve(results.data[0]);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function isDataUpToDate(){
    if(Object.keys(scenarioData).length > 0 && lastDataLanguage === language && 
       scenarioCollectionId === lastScenarioCollectionId && regionId === lastRegiodId){
        return true;
    }
    else{
        return false;
    }
}

function getScenarios(){
    return new Promise((resolve, reject) => {
        if(isDataUpToDate()){
            resolve(scenarioData.scenarios);
        }
        else{
            var data = Promise.resolve(getScenarioData());
            data.then(function(value){
                resolve(value.scenarios);
            });
        }
    });
}

function getTimePeriods(){
    return new Promise((resolve, reject) => {
        if(isDataUpToDate()){
            resolve(scenarioData.timePeriods);
        }       
        else{
            var data = Promise.resolve(getScenarioData());
            data.then(function(value){
                resolve(value.timePeriods);
            });
        }
    });
}

function getIndicatorCategories(){
    return new Promise((resolve, reject) => {
        if(isDataUpToDate()){
            resolve(scenarioData.indicatorCategories);
        }       
        else{
            var data = Promise.resolve(getScenarioData());
            data.then(function(value){
                resolve(value.indicatorCategories);
            });
        }
    });
}

function parseScenarioData(dataForParsing, finnishName, englishName){
    return new Promise((resolve, reject) => {
        if(dataForParsing){
            dataForParsing.indicatorCategories.forEach(element => {
                if(element.name == finnishName || 
                   element.name == englishName){
                    resolve(element.indicators);
                }
            });
            resolve("no data");
        }
        else{
            resolve("no data");
        }
    });
}

function getWoodProduction(){
    return new Promise((resolve, reject) => {
        if(isDataUpToDate()){
            var parsedData = parseScenarioData(scenarioData, "Puuntuotanto", "Wood production");
            parsedData.then(function(value){
                if(value != "no data" && value)
                    resolve(value);
                else
                    resolve([{name: "Wood production was not found"}])
            });
        }       
        else{
            var data = Promise.resolve(getScenarioData());
            data.then(function(value){
                var parsedData = parseScenarioData(value, "Puuntuotanto", "Wood production");
                parsedData.then(function(value){
                    if(value != "no data" && value)
                        resolve(value);
                    else
                        resolve([{name: "Wood production was not found"}])
                });
            });
        }
    });
}

function getBiodiversity(){
    return new Promise((resolve, reject) => {
        if(isDataUpToDate()){
            var parsedData = parseScenarioData(scenarioData, "Monimuotoisuus", "Biodiversity");
            parsedData.then(function(value){
                if(value != "no data" && value)
                    resolve(value);
                else
                    resolve([{name: "Biodiversity was not found"}])
            });
        }       
        else{
            var data = Promise.resolve(getScenarioData());
            data.then(function(value){
                var parsedData = parseScenarioData(value, "Monimuotoisuus", "Biodiversity");
                parsedData.then(function(value){
                    if(value != "no data" && value)
                        resolve(value);
                    else
                        resolve([{name: "Biodiversity was not found"}])
                });
            });
        }
    });
}

function getNaturalProducts(){
    return new Promise((resolve, reject) => {
        if(isDataUpToDate()){
            var parsedData = parseScenarioData(scenarioData, "Keruutuotteet", "Natural products");
            parsedData.then(function(value){
                if(value != "no data" && value)
                    resolve(value);
                else
                    resolve([{name: "Natural products was not found"}])
            });
        }       
        else{
            var data = Promise.resolve(getScenarioData());
            data.then(function(value){
                var parsedData = parseScenarioData(value, "Keruutuotteet", "Natural products");
                parsedData.then(function(value){      
                    if(value != "no data" && value)
                        resolve(value);
                    else
                        resolve([{name: "Natural products was not found"}])
                });
            });
        }
    });
}

function getCarbon(){
    return new Promise((resolve, reject) => {
        if(isDataUpToDate()){
            var parsedData = parseScenarioData(scenarioData, "Hiili", "Carbon");
            parsedData.then(function(value){
                if(value != "no data" && value)
                    resolve(value);
                else
                    resolve([{name: "Carbon was not found"}])   
            });
        }
        else{
            var data = Promise.resolve(getScenarioData());
            data.then(function(value){
                var parsedData = parseScenarioData(value, "Hiili", "Carbon");
                parsedData.then(function(value){
                    if(value != "no data" && value)
                        resolve(value);
                    else
                        resolve([{name: "Carbon was not found"}])
                });
            });
        }
    });
}

function getOthers(){
    return new Promise((resolve, reject) => {
        if(isDataUpToDate()){
            var parsedData = parseScenarioData(scenarioData, "Muut", "Others");
            parsedData.then(function(value){
                if(value != "no data" && value)
                    resolve(value);
                else
                    resolve([{name: "Others was not found"}])   
            });
        }       
        else{
            var data = Promise.resolve(getScenarioData());
            data.then(function(value){
                var parsedData = parseScenarioData(value, "Muut", "Others");
                parsedData.then(function(value){
                    if(value != "no data" && value)
                        resolve(value);
                    else
                        resolve([{name: "Others was not found"}])
                });
            });
        }
    });
}

function parseGraphData(unParsedData, scenarioId, indicatorId, timePeriodId){
    return new Promise((resolve, reject) => {
        if(unParsedData && unParsedData.length > 0){
            const parsedData = unParsedData.filter(e => e.timePeriodId === timePeriodId)
            .filter(function (data){
                for (var count = 0; count < scenarioId.length; count++){
                    if(scenarioId[count] === data.scenarioId){
                        return data;
                    }
                }
            }).filter(function (data){
                for (var count = 0; count < indicatorId.length; count++){
                    if(indicatorId[count] === data.indicatorId){
                        return data;
                    }
                }
            })
            .map(function (o){
                return o.value;
            });
            resolve(parsedData);
        }
        else{
            reject();
        }
    });
}

function getGraphData(scenarioId, indicatorId, timePeriodId){
    return new Promise((resolve, reject) => {
        if(isDataUpToDate()){
            var parsedData = parseGraphData(scenarioData.values, scenarioId, indicatorId, timePeriodId);
            parsedData.then(function(value){
                if(value !== "" && value)
                    resolve(value);
                else
                    reject();  
            });
        }       
        else{
            var data = Promise.resolve(getScenarioData());
            data.then(function(value){
                var parsedData = parseGraphData(scenarioData.values, scenarioId, indicatorId, timePeriodId);
                parsedData.then(function(value){
                    if(value !== "" && value)
                        resolve(value);
                    else
                        reject();  
                });
            });
        }
    });
}

export default { getRegionLevels, setRegionLevels, getRegion, setRegion, getScenarioCollection, 
                 setScenarioCollection, getScenarios, getTimePeriods, getIndicatorCategories,
                 getWoodProduction, getBiodiversity, getNaturalProducts, getCarbon, getOthers,
                 getGraphData, setLanguage } 