import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leftscreen from './components/Leftscreen'
import Rightscreen from './components/Rightscreen'
import { Grid, Row, Col} from 'react-bootstrap'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, combineReducers } from 'redux';
import { localeReducer, initialize, addTranslation } from 'react-localize-redux';
import { Provider } from 'react-redux'
import Translation from './components/Translation'


const store = createStore(combineReducers({
  locale: localeReducer
}));



//import 'bootstrap/dist/react-bootstrap.min.css'
class App extends Component {
  
  render() {
  return (
      App = props => (
        <div>
          <Provider store= { store } >
          </Provider>
          <Grid>
            <Row className="show-grid">
            <Col lg={12} lg={4}> <Leftscreen /></Col>
            <Col lg={12} lg={8}> <Rightscreen /></Col>
            </Row>
          </Grid>
        
          </div>
        
      )
    )
    
  }
  }

export default App;
