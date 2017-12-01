import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Leftscreen from './components/Leftscreen'
import Rightscreen from './components/Rightscreen'
import { Grid, Row, Col} from 'react-bootstrap'
import { render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/react-bootstrap.min.css'
class App extends Component {
  render() {
    return (
        <div>
          <Grid>
            <Row className="show-grid">
            <Col lg={12} lg={4}> <Leftscreen /></Col>
            <Col lg={12} lg={8}> <Rightscreen /></Col>
            </Row>
          </Grid>
          </div>
    );
  }
}
export default App;
