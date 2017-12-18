import React, { Component } from 'react'
import ReactTable from 'react-table'


class Tables extends Component {
    render () {
        let processedGraphData = this.props.graphData; 
        let nameofIndicator = this.props.nameofIndicator;
      
        var dataForGraphs = [];
         for(var i=0; i<processedGraphData.length; i++)
         {
         
             dataForGraphs.push({
                 name: nameofIndicator[i],
                 y: processedGraphData[i]
             });
             console.log(dataForGraphs, "GraphModule-data")
         
        }

        const data = [{
          name: 'Tanner Linsley',
          age: 26,
          friend: {
            name: 'Jason Maurer',
            age: 23,
          }
        }]

        const columns = [{
          Header: 'Name',
          accessor: 'name' // String-based value accessors!
        }, {
          Header: 'Age',
          accessor: 'age',
          Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
          id: 'friendName', // Required because our accessor is not a string
          Header: 'Friend Name',
          accessor: d => d.friend.name // Custom value accessors!
        }, {
          Header: props => <span>Friend Age</span>, // Custom header components!
          accessor: 'friend.age'
        }]


        return (
            <div id="graph">
             <ReactTable defaultPageSize={10} minRows={2}
    data={data}
    columns={columns}
  />
            {/* {processedGraphData} */}
            {/* {nameofIndicator} */}
          
                {/* <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table> */}
            </div>
        )
    }
}

export default Tables