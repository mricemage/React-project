import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import DropdownMenus from './DropdownMenus'
import CheckBoxes from './CheckBoxes'
import DemoDropdownDynamicMenu from './DemoDropdownDynamicMenu'
import { DropdownButton } from 'react-bootstrap';

class Scrollbar extends Component {

      /*{

      }*/
      /*
                  [
                {
                  "id": 374178,
                  "name": "RUSKIBOI",
                  "description": "Detailed region level description",
                  "order": 1
                },
                {
                    "id": 374178,
                    "name": "German",
                    "description": "Detailed region level description",
                    "order": 1
                  },
                  {
                    "id": 55664,
                    "name": "USA",
                    "description": "Detailed region level description",
                    "order": 1
                  }
              ]*/
    render () {
        const options = {    
        "USA": ["New York", "San Francisco", "Hallelujah"],
        "Germany": ["Berlin", "Munich"],
        "Finland": ["Kuopio", "Helsinki"]}
          
        var width2 =Element.offsetWidth; // https://www.w3schools.com/jsref/prop_element_offsetwidth.asp Its getting the width of an element in pixels
        
        return (
            <Scrollbars
            autoHeight
            autoHeightMin={500}
            autoHeightMax={1200}
            style={{ width: width2  }}
                            >
            <p><DemoDropdownDynamicMenu options={options}/></p>
            <DropdownMenus/>
            <p><CheckBoxes/></p>

            </Scrollbars>
         

        )
    }
}

export default Scrollbar