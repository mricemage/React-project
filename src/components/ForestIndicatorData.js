import axios from 'axios';

var language = "fi";
var regionLevel = 0;
var regionId = 0;
var scenarioCollectionId = 0;
var regionData = [];
var lastDataLanguage = "";

function setLanguage(_language){
    language = _language;
}

function getRegionLevels(){
    return new Promise((resolve, reject) => {
        //axios.get("http://melatupa.azurewebsites.net/regionLevels")
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

function getRegion(){
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

                    //console.log(results.data[count].scenarioCollections);
                    //console.log(results.data[count]);

                    console.log(results.data[count].scenarioCollections);
                    console.log(results.data[count]);

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

function getScenarios(){
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
            regionData = results.data[0];
            lastDataLanguage = language;
            resolve(results.data[0].scenarios); //results.data.scenarios
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getTimePeriods(){
    return new Promise((resolve, reject) => {
        /*
        if(regionData !== null || lastDataLanguage !== language){
            console.log("ei haettu netistä uudestaan dataa");
            resolve(regionData.timePeriods);
        }
        else{*/
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
        //}
    });
}

function getIndicatorCategories(){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            resolve(results.data[0].indicatorCategories);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getWoodProduction(){
    return new Promise((resolve, reject) => {
        /*
        console.log(regionData);
        console.log(regionData.length);
        console.log(lastDataLanguage);
        console.log(language);
        //((regionData && regionData.lenght > 0) || lastDataLanguage === language)
        if(regionData.lenght > 0 && lastDataLanguage === language){
            console.log("ei haettu netistä uudestaan dataa");
            resolve(regionData);
        }
        else{*/
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
        "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            if(results.data[0]){
                regionData = results.data[0];
                results.data[0].indicatorCategories.forEach(element => {
                    if(element.name == "Puuntuotanto" || 
                        element.name == "Wood production"){
                        resolve(element.indicators);
                    }
                });
            } 
            resolve([{name: "Wood production was not found"}]);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
        //}
    });
}

function getBiodiversity(){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            if(results.data[0]){
                regionData = results.data[0];
                results.data[0].indicatorCategories.forEach(element => {
                    if(element.name == "Monimuotoisuus" || 
                       element.name == "Biodiversity"){
                        resolve(element.indicators);
                    }
                });
            } 
            resolve([{name: "Biodiversity was not found"}]);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getNaturalProducts(){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            if(results.data[0]){
                regionData = results.data[0];
                results.data[0].indicatorCategories.forEach(element => {
                    if(element.name == "Keruutuotteet" || 
                       element.name == "Natural products"){
                        resolve(element.indicators);
                    }
                });
            } 
            resolve([{name: "Natural products was not found"}]);
            /*
            results.data.forEach(element => {
                if(element.indicatorCategories[count].name == "Keruutuotteet" || 
                element.indicatorCategories[count].name == "Natural products"){
                    resolve(element.indicatorCategories[count].indicators);
                }
            });
            resolve(["Natural products was not found"]);*/
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getCarbon(){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            if(results.data[0]){
                regionData = results.data[0];
                results.data[0].indicatorCategories.forEach(element => {
                    if(element.name == "Hiili" || 
                       element.name == "Carbon"){
                        resolve(element.indicators);
                    }
                });
            } 
            resolve([{name: "Carbon was not found"}]);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getOthers(){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            if(results.data[0]){
                regionData = results.data[0];
                results.data[0].indicatorCategories.forEach(element => {
                    if(element.name == "Muut" || 
                       element.name == "Others"){
                        resolve(element.indicators);
                    }
                });
            } 
            resolve([{name: "Others was not found"}]);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}

function getGraphData(scenarioId, indicatorId, timePeriodId){
    return new Promise((resolve, reject) => {
        var url = "http://melatupa.azurewebsites.net/scenarioCollection/"+scenarioCollectionId+ 
                  "/region/"+regionId;
        axios({
            method: 'get',
            url: url,
            headers: {'Accept-Language': language}
        })
        .then(results => {
            const parsedData = results.data[0].values.filter(e => e.timePeriodId === timePeriodId)
            .filter(function (data){
                for (var count = 0; count < scenarioId.length; count++){
                    if(scenarioId[count] === data.scenarioId){
                        return data;
                    }
                }
            }).filter(function (data){
                for (var count = 0; count < indicatorId.length; count++){
                    if(indicatorId[count] === data.indicatorId){
                        //console.log(i);
                        return data;
                    }
                }
            })
            .map(function (o){
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
                 getGraphData, setLanguage } 