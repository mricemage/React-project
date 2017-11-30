import { initialize, addTranslation } from 'react-localize-redux';
import { createStore, combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';
import { setActiveLanguage } from 'react-localize-redux'

const store = createStore(combineReducers({
    locale: localeReducer
  }));
  

const languages = ["fi", "en"];
store.dispatch(initialize(languages));


const MainPageTranslation = {
    ScenarioSelection:[
        "Scenario Selection",
        "Skenaarioiden valinta"
    ],
    ForestryCenters:[
        "Forestry Centers",
        "Aluetaso"
    ],
    Area:[
        "Area",
        "Alue"
    ],
    ScenarioCollection:[
        "Scenario Collection",
        "Skenaariokokoelma"
    ],
    Time:[
        "Time",
        "Ajankohta"
    ],
    IndicatorSelection:[
        "Indicator Selection",
        "Indikaattoreiden valinta"
    ],
    ProductCollections:[
        "Product Collections",
        "Keruutuotteet"
    ],
    Diversity:[
        "Diversity",
        "Monimuotoisuus"
    ],
    Carbon:[
        "Carbon",
        "Hiili"
    ],
    Other:[
        "Other",
        "Muut"
    ]
};

store.dispatch(addTranslation(MainPageTranslation));

