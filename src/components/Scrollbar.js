import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import DropdownMenus from './DropdownMenus'
import CheckBoxes from './CheckBoxes'
import DemoDropdownDynamicMenu from './DemoDropdownDynamicMenu'
import { DropdownButton } from 'react-bootstrap';

class Scrollbar extends Component {
    
    render () {
        const options = {
            "USA": ["New York", "San Francisco"],
            "Germany": ["Berlin", "Munich"]
          }
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