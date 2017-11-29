import axios from 'axios';

var regionLevel = 0;
var region = "";

function getItems()
{
    //get the data from somewhere?

    //"http://mela2.metla.fi/mela/tupa/index.php?lk=3&ko=10&ty=6,4&ka=12&mj=1,5,8,9"
    //"http://todoserver-182713.appspot.com/todos"
    //http://melatupa.azurewebsites.net/docs/#!/default/getScenarioCollection
    return new Promise((resolve, reject) => {
        axios.get("http://melatupa.azurewebsites.net/regionLevels")
        .then(results => {
            console.log(results);
            /*
            const items = results.data.map(element => {
                //element.dueDate = moment(element.dueDate);
                return element;
            });
            resolve(items);*/
            resolve(results);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
        //reject("something failed");
    });
}

function getRegionLevels(){
    return new Promise((resolve, reject) => {
        axios.get("http://melatupa.azurewebsites.net/regionLevels")
        .then(results => {
            //console.log(results);
            
            //this solution works with ie7 & 8
            var count = 0;
            while(results.data[count]){
                count++;
            }

            //console.log(count);
            var names = [];
            var id = [];
            for (var i = 0; i < count; i++){
                names[i] = results.data[i].name;
                id[i] = results.data[i].id;
            }
            console.log(names); //results.data[0].id
            console.log(id);
            resolve(results.data); //results.data[0].name
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

function getRegion(){

}

function setRegion(id){
    
}

export default { getItems, getRegionLevels } 