import axios from 'axios';

var regionLevel = 0;
var regionId = 0;
var scenarioCollectionId = 0;
var regionData = [];
var lastDataLanguage = "";

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
            }*/ 
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
// mahdollisesti tulevaisuudessa
/*
function getRegionData(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/regionLevels/"+regionLevel+"/regions";
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            lastDataLanguage = language;
            resolve(results.data);
        })
        .catch(error => {
            console.log(error);
            console.log("jotain meni pieleen");
            reject("jotain meni pieleen");
        })
    });
}*/

function getRegion(language = "fi"){
    return new Promise((resolve, reject) => {
        /*
        if (regionData === null || lastDataLanguage !== language){
            getRegionData(language).then(items => {
                resolve(items);
            });
        }
        else{
            console.log("virhettä tullee");
            reject();
            //resolve(regionData);
        }
        //might change this function structure later
        reject("error");*/
        
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

//made this function this way because it was easier for others to use so we wont pass id as parameter
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

function getWoodProduction(language = "fi"){
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
            var count = 0;
            while(results.data[0].indicatorCategories[count]){
                if(results.data[0].indicatorCategories[count].name == "Puuntuotanto" || 
                    results.data[0].indicatorCategories[count].name == "Wood production"){
                    //console.log(results.data[count].scenarioCollections);
                    //console.log(results.data[count]);
                    resolve(results.data[0].indicatorCategories[count].indicators);
                }
                count++;
            }

            resolve("Wood production was not found"); //results.data.scenarios
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}
//filter
function getBiodiversity(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            var count = 0;
            while(results.data[0].indicatorCategories[count]){
                if(results.data[0].indicatorCategories[count].name == "Monimuotoisuus" || 
                    results.data[0].indicatorCategories[count].name == "Biodiversity"){
                    resolve(results.data[0].indicatorCategories[count].indicators);
                }
                count++;
            }

            resolve("Biodiversity was not found");
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getNaturalProducts(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            var count = 0;
            while(results.data[0].indicatorCategories[count]){
                if(results.data[0].indicatorCategories[count].name == "Keruutuotteet" || 
                    results.data[0].indicatorCategories[count].name == "Natural products"){
                    resolve(results.data[0].indicatorCategories[count].indicators);
                }
                count++;
            }
            resolve("Natural products was not found");
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getCarbon(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            var count = 0;
            while(results.data[0].indicatorCategories[count]){
                if(results.data[0].indicatorCategories[count].name == "Hiili" || 
                    results.data[0].indicatorCategories[count].name == "Carbon"){
                    resolve(results.data[0].indicatorCategories[count].indicators);
                }
                count++;
            }
            resolve("Carbon was not found");
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getOthers(language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            var count = 0;
            while(results.data[0].indicatorCategories[count]){
                if(results.data[0].indicatorCategories[count].name == "Muut" || 
                    results.data[0].indicatorCategories[count].name == "Others"){
                    resolve(results.data[0].indicatorCategories[count].indicators);
                }
                count++;
            }
            resolve("Others was not found");
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getGraphData(scenarioId, indicatorId, timePeriodId, language = "fi"){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            /*
            var count = 0;
            while(results.data[0].indicatorCategories[count]){
                if(results.data[0].indicatorCategories[count].name == "Muut" || 
                    results.data[0].indicatorCategories[count].name == "Others"){
                    resolve(results.data[0].indicatorCategories[count].indicators);
                }
                count++;
            }*/
            const parsedData = results.data[0].values.filter(function (i,n) {
                //console.log(i);
                if(i.scenarioId === scenarioId && i.indicatorId === indicatorId && 
                   i.timePeriodId === timePeriodId){
                    console.log(i);
                    return i;
                }
            }).map(function (o){
                return o.value;
            });
            resolve(parsedData);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

export default { getRegionLevels, setRegionLevels, getRegion, setRegion, getScenarioCollection, 
                 setScenarioCollection, getScenarios, getTimePeriods, getIndicatorCategories,
                 getWoodProduction, getBiodiversity, getNaturalProducts, getCarbon, getOthers,
                 getGraphData } 