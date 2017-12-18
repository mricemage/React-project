import React, { Component } from 'react'
import './Rightscreen.css'
import Header from './Header'
import Graph from './Graphs'
import GraphTwo from './GraphTwo'
import Table from './Table'
import GraphBar from './GraphBar'
import {Row, Button, ButtonGroup} from 'reactstrap';


class Rightscreen extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            graphnumber: 1,
            showNewItemInputs: false,
            
          };
    this.toggleNewItemInputs = this.toggleNewItemInputs.bind(this);
    }
    



    printDocument() {
        var prtContent = document.getElementById("graph");
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      }


      toggleNewItemInputs(number)
      { 
        this.setState({ graphnumber: number });
      }

    

    render () {
        const graphData = this.props.graphData;
        const nameofIndicator = this.props.nameofIndicator;
        console.log(nameofIndicator, "RightScreenName")

        let content;
        
        if(this.state.graphnumber === 1)
        {
            content = (<Graph graphData = {graphData}
                getGraphData = {this.props.getGraphData}
                nameofIndicator = {nameofIndicator}/>);
        } 
        if (this.state.graphnumber === 2) {
            content = (<GraphTwo graphData = {graphData}
                getGraphData = {this.props.getGraphData}
                nameofIndicator = {nameofIndicator}/>);
        }
        if (this.state.graphnumber === 3) {
            content = (<GraphBar graphData = {graphData}
                getGraphData = {this.props.getGraphData}
                nameofIndicator = {nameofIndicator}/>);
        }
        if (this.state.graphnumber === 4) {
            content = (<table>
                        <tr> 
                            <td><Table graphData={graphData}
                                    getGraphData = {this.props.getGraphData}/>
                            </td>
                        </tr>
                        </table>);
        }
        // } else {
        //     content = (
        //         <div>
        //             <button color="primary">1 Graphs</button>
        //             <button color="primary">2 Graphs</button>
        //             <button color="primary">3 Graphs</button>
        //         </div>);
        // }


        

        
     

        return (
            <div className= 'content'>

  
                <Header/> <br /> <br />
                { content } 
                {/* <Graph graphData = {graphData}
                       getGraphData = {this.props.getGraphData}/>

                <Graph graphData = {graphData}
                       getGraphData = {this.props.getGraphData}/>
                       
                <Graph graphData = {graphData}
                       getGraphData = {this.props.getGraphData}/>
                 */}


                <Row >
                        <ButtonGroup className="justified">
                            <Button color="primary" onClick={() => this.toggleNewItemInputs(1) }><i class="fa fa-pie-chart" aria-hidden="true"></i></Button>
                            <Button color="primary" onClick={() => this.toggleNewItemInputs(2) }><i class="fa fa-pie-chart" aria-hidden="true"></i><i class="fa fa-pie-chart" aria-hidden="true"></i></Button>
                            <Button color="primary" onClick={() => this.toggleNewItemInputs(3) }><i class="fa fa-bar-chart" aria-hidden="true"></i></Button>
                            <Button color="primary" onClick={() => this.toggleNewItemInputs(4) }><i class="fa fa-table" aria-hidden="true"></i></Button>
                            <Button color="primary"  onClick={() => this.printDocument()}><i class="fa fa-print" aria-hidden="true"></i></Button>
                        </ButtonGroup>
                </Row>

                       {/* getGraphData = {this.props.getGraphData} */}
                       {/* nameofIndicator = {nameofIndicator}/> */}




                
                {/* RightScreenn */}
                


            </div>
        )
    }
}

export default Rightscreen